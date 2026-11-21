# TechSpire Solutions (MERN)

A multi-page studio website built with MongoDB, Express, React (Vite) and Node.js.

**Pages:** Home, Work, Services, Product, Process, About, Feedback, Contact (plus a 404 page).

## Structure

```
techspire-mern/
  package.json        root scripts (run both apps together)
  server/             Express + MongoDB API
    server.js         app entry
    seed.js           loads sample projects into MongoDB
    models/           Project, Message, Feedback
    routes/           /api/projects, /api/contact, /api/feedback
    data/projects.js  sample case studies
  client/             React app (Vite + React Router)
    src/pages/        one file per page
    src/components/   Navbar, Footer, ProjectCard, ...
    src/data/         fallback project data
    src/styles.css    all styling
```

## Run locally

You need Node.js 18+ and MongoDB (local install or a free MongoDB Atlas cluster).

```bash
# 1. install everything
npm install
npm run install:all

# 2. configure the server
cp server/.env.example server/.env
#    edit server/.env and set MONGO_URI (Atlas or local)

# 3. load the sample projects (optional but recommended)
npm run seed

# 4. start server (port 5000) and client (port 5173)
npm run dev
```

Open http://localhost:5173.

The Work and Home pages show sample projects even if the API is down. The contact form needs the server and MongoDB running; messages are stored in the `messages` collection.

## API

| Method | Route               | Purpose                                  |
| ------ | ------------------- | ---------------------------------------- |
| GET    | /api/health         | Health check                             |
| GET    | /api/projects       | List projects (`?tag=Web` to filter)     |
| GET    | /api/projects/:slug | One project                              |
| POST   | /api/contact        | Save a contact message (name, email, message required) |
| GET    | /api/feedback       | Approved client feedback                 |
| POST   | /api/feedback       | Client submits feedback (hidden until approved) |

## Approving client feedback

Feedback submitted on the Feedback page is saved with `approved: false` and stays hidden. To publish a review, set `approved: true` on it in MongoDB (Atlas UI or Compass). The sample reviews are placeholders: replace them with real ones, with the client's permission.

## Production

```bash
npm run build     # builds client/dist
npm start         # Express serves the API and the built React app
```

Set `MONGO_URI` and `CLIENT_ORIGIN` as environment variables on your host.

## Customize

- Replace the sample projects in `server/data/projects.js` and `client/src/data/projects.js`, then run `npm run seed`.
- Replace the sample feedback in `server/data/feedback.js` and `client/src/data/feedback.js`, and the `[Name]` placeholders on the About page.
- Replace the placeholder office address, phone number and `@techspire.example` emails in `Footer.jsx` and `Contact.jsx`.
- Colors and fonts are CSS variables at the top of `client/src/styles.css`.
