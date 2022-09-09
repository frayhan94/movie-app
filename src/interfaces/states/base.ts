interface IBaseState<T> {
  data?: T | undefined
  list?: Array<T>
  requesting: boolean
  error?: string
}

export default IBaseState
