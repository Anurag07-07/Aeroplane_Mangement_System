# AeroplaneMS Backend

A simple Express.js backend implementing a small MVC-style API service.

## Overview

This repository contains the backend service for AeroplaneMS. It is built with Node.js and Express, and follows a clean folder structure with separate configuration, routes, controllers, and utilities.

## Features

- Express.js REST API
- Environment-based configuration via `.env`
- Basic logging with Winston
- API versioning support under `/api/v1`

## Quick Start

### Prerequisites

- Node.js 18+ installed
- npm installed

### Install dependencies

```bash
cd backend
npm install
```

### Run in development

```bash
npm run dev
```

The server starts using the value from `backend/.env`, defaulting to port `3000`.

## API Endpoints

### Health / info endpoint

```http
GET /api/v1/info
```

Response example:

```json
{
  "success": true,
  "message": "API is Live",
  "error": {},
  "data": {}
}
```

## Project Structure

- `backend/src/server.js` — application entry point
- `backend/src/config/` — configuration and logger setup
- `backend/src/routes/` — route definitions and API versioning
- `backend/src/controllers/` — controller logic for API endpoints
- `backend/.env` — environment settings

## Notes

- Logs are written to the console and `combined.log` by Winston.
- Add new routes under `backend/src/routes/v1` and connect their controllers via `backend/src/controllers/index.js`.

## License

This project is licensed under ISC.


