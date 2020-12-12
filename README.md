# Note App

> Note: this is a work in progress

A small sample app to grow my fullstack engineering experience.

Built with Rust, React, etc.

## Prerequisites

- Rust
  - `actix-web`
  - `serde`
- Node
  - `create-react-app`
  - `react-router-dom`
  - `express`

## Deployment

### Backend

1. `cargo run`

### Frontend

#### Development

1. `cd src/webroot`
2. `npm run dev`
3. open browser at `localhost:3000`

#### Production

1. `cd src/webroot`
2. `npm run build`
3. `npm start`
4. open browser at `localhost:5000`
