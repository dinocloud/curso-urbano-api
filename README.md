## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## ENV vars

TYPEORM_CONNECTION = postgres
TYPEORM_URL = postgresql://username:password@localhost:port/databseName
TYPEORM_SYNCHRONIZE = false
TYPEORM_LOGGING = true
TYPEORM_ENTITIES = entity/*.ts,src/**/*.entity.ts
TYPEORM_MIGRATIONS = src/migrations/*.ts
TYPEORM_MIGRATIONS_DIR = src/migrations
