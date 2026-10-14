# Specialist's Dental Clinic website

A single-page website for Specialist's Dental Clinic, built with React and Vite. Every section is its own component, and all clinic details sit in one data file so they are easy to change.

## Run it on your computer

You need Node.js 18 or newer.

```bash
npm install
npm run dev
```

Open the address shown in the terminal (usually http://localhost:5173).

To check the production build:

```bash
npm run build
npm run preview
```

## Change the clinic details

Open `src/data/clinic.js` and replace the placeholder values:

| What | Where |
| --- | --- |
| Phone number and call link | `phone`, `phoneHref` |
| WhatsApp number (booking form and chat button) | `whatsapp` (country code, digits only, for example `919876543210`) |
| Email, address, opening hours | `email`, `address`, `hours` |
| Google Maps link | `mapsUrl` |
| Doctor name, qualifications and introduction | `doctor` |

Other content files:

- `src/data/services.js` for the treatments list
- `src/data/faqs.js` for the questions and answers
- `src/data/reviews.js` for patient reviews. The reviews section stays hidden until you add real ones, with the patient's permission.
- Colours and fonts are in `src/styles/tokens.css`

## Project structure

```
specialists-dental-clinic/
  index.html
  package.json
  vite.config.js
  public/
    favicon.svg
  src/
    main.jsx
    App.jsx
    data/          clinic details, treatments, FAQs, reviews
    styles/        colour tokens and base styles
    components/    one JSX and CSS file per section
```

## Push to GitHub

Create an empty repository on GitHub first, then run:

```bash
git init
git add .
git commit -m "Initial website for Specialist's Dental Clinic"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

## Deploy on Vercel

1. Sign in at https://vercel.com with your GitHub account.
2. Choose **Add New**, then **Project**, and import the repository.
3. Vercel detects Vite on its own. Keep the defaults: build command `npm run build`, output directory `dist`.
4. Select **Deploy**. When it finishes you get a link such as `https://your-project.vercel.app` that you can share with the client.

Every later `git push` to `main` redeploys the site automatically.

You can also deploy without GitHub: run `npx vercel` in this folder and follow the prompts.

## How the booking form works

The site has no server. When a visitor submits the form, it opens WhatsApp with the request already written, addressed to the number in `src/data/clinic.js`. The clinic receives it as a normal WhatsApp message. If the clinic later wants requests sent to email or a dashboard, the submit handler in `src/components/Appointment.jsx` is the only place to change.
