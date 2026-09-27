# Tasklane

A small task-tracking API for teams.

## Requirements

Tasklane requires Node.js 18.

## Getting started

1. Copy `.env.sample` to `.env` and adjust the values.
2. Install dependencies with `npm install`.
3. Seed some example data:

   ```sh
   npm run seed
   ```

4. Start the API:

   ```sh
   npm run serve
   ```

The server entry point is `src/index.js`, and routes live in `src/routes/tasks.js`.
Default settings are in `config/default.json`.

## Development

Run the tests with `npm test` and check style with `npm run lint`.

To regenerate the documentation site, run `npm run docs`.

## Documentation

- API reference: `docs/api.md`
- Deployment guide: `docs/deployment.md`
- Contributing: `CONTRIBUTING.md`
