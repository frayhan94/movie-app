

# Movie APP from JSON Placeholder


## Demo

http://photo-app-faris.s3-website-ap-southeast-1.amazonaws.com/

## Environment

```bash
NodeJS v14.17.0
npm v6.14.13
```

## Local Installation

```bash
yarn install
```

```bash
yarn start
```

## Run With Docker

Build First

```bash
docker build . -t photo-album:v1
```

Run dev mode within container

```bash
docker container run -p 81:3000 photo-album:v1
```

## E2E Test

```bash
npm run e2e
```