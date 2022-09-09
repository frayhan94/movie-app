import React, { Fragment, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  GET_MOVIE_SUCCESS,
  GET_MOVIE_REQUEST,
  GET_MOVIE_FAILURE,
} from '../features/movie/actionTypes'
import useDebounce from '../hooks/useDebounce'
import useMediaQuery from '../hooks/useMediaQuery'
import { Dispatch } from 'redux'
import { useEffect } from 'react'
import api from '../features/movie/api'
import { selectors } from '../features/movie'
import IParameter from '../interfaces/models/parameter'
import Pagination from '../components/pagination'
export const Home: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch()
  const matchesMobile = useMediaQuery('(max-width: 480px)')

  const [search, setSearch] = useState<string>('')

  const [showModal, setShowModal] = useState<boolean>(false)

  const [selectedImage, setSelectedImage] = useState<string>('')

  const [page, setPage] = useState<number>(1)

  const debouncedSearchValue = useDebounce<string>(search, 500)

  const movie = useSelector(selectors.getMovie)

  console.log('movie', movie)
  const loadData = async (param?: Partial<IParameter>) => {
    try {
      dispatch({
        type: GET_MOVIE_REQUEST,
      })
      const get = await api.GetList(param)
      dispatch({
        type: GET_MOVIE_SUCCESS,
        payload: get,
      })
    } catch (e) {
      dispatch({
        type: GET_MOVIE_FAILURE,
      })
    }
  }

  const showImageModal = (image: string) => {
    setShowModal(true)
    setSelectedImage(image)
  }

  const hideImageModal = () => {
    setShowModal(false)
  }

  useEffect(() => {
    loadData({
      start: page,
      limit: 10,
      search: debouncedSearchValue,
    })
  }, [debouncedSearchValue, page])

  // @ts-ignore
  return (
    <Fragment>
      <div className="row">
        <div className="input-field col s12">
          <input
            id={'txt_search_movie'}
            placeholder={'Search Movie...'}
            onChange={(e) => {
              setSearch(e.target.value)
            }}
            type="text"
            className="validate"
          />
        </div>
      </div>

      {showModal && (
        <>
          <div
            className="modal-overlay"
            style={{
              zIndex: 1002,
              display: 'block',
              opacity: 0.5,
            }}
          />
          <div
            className="modal open"
            tabIndex={0}
            style={{
              zIndex: 1003,
              display: 'block',
              opacity: 1,
              transform: 'scaleX(1) scaleY(1)',
            }}
          >
            <div
              style={{ display: 'flex', justifyContent: 'center' }}
              className="modal-content"
            >
              <img
                className="materialboxed"
                width="150"
                src={selectedImage}
                alt={'thumbnailUrl_selected'}
              />
            </div>
            <div className="modal-footer">
              <a
                id={'btn_close'}
                onClick={hideImageModal}
                className="modal-close waves-effect waves-red btn-flat"
              >
                close
              </a>
            </div>
          </div>
        </>
      )}

      {movie?.requesting ? (
        <div style={{ marginBottom: '16px' }}>Loading</div>
      ) : (
        <table id={'tbl_photo'}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              {!matchesMobile && <th id={'th_thumbnail'}>Thumbnail</th>}
            </tr>
          </thead>
          <tbody>
            {movie?.list && movie?.list?.length > 0 ? (
              <>
                {movie?.list?.map((value) => {
                  return (
                    <tr key={`${value.albumId}-${value.title}`}>
                      <td style={matchesMobile ? { display: 'flex' } : {}}>
                        {value.albumId}
                      </td>
                      <td>
                        <div
                          style={matchesMobile ? { marginBottom: '8px' } : {}}
                        >
                          {value.title}
                        </div>
                        {matchesMobile && (
                          <>
                            <div>
                              <img
                                onClick={() => {
                                  showImageModal(value.thumbnailUrl)
                                }}
                                className="materialboxed"
                                width="150"
                                src={value.thumbnailUrl}
                                alt={'thumbnailUrl'}
                              />
                            </div>
                          </>
                        )}
                      </td>
                      {!matchesMobile && (
                        <td>
                          <img
                            onClick={() => {
                              showImageModal(value.thumbnailUrl)
                            }}
                            className="materialboxed"
                            width="150"
                            src={value.thumbnailUrl}
                            alt={'thumbnailUrl'}
                          />
                        </td>
                      )}
                    </tr>
                  )
                })}
              </>
            ) : (
              <tr>
                <td id={'td_no_data_found'}>No Data Found</td>
              </tr>
            )}
          </tbody>
        </table>
      )}

      {movie?.list && movie?.list?.length > 0 && (
        <Pagination
          id={'ul_pagination'}
          className="pagination-bar"
          currentPage={page}
          totalCount={100}
          pageSize={10}
          onPageChange={(pageParameter) => setPage(pageParameter)}
        />
      )}
    </Fragment>
  )
}
