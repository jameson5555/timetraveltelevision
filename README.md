# Time Travel Television

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). Vintage TV shows and commercials are curated for each decade from the 50s to the 90s and then displayed and controlled via the YouTube Iframe API. 

The live site can be found here: https://timetraveltelevision.com/

## Screenshots
### Decade Page
![Decade Page](https://github.com/jameson5555/timetraveltelevision/blob/main/public/screenshots/decades-page.png?raw=true?raw=true)

### Admin Page
![Admin Page](https://github.com/jameson5555/timetraveltelevision/blob/main/public/screenshots/admin-page.png?raw=true?raw=true)

### Login Page
![Login Page](https://github.com/jameson5555/timetraveltelevision/blob/main/public/screenshots/login-page.png?raw=true)

## Getting Started
Running the development server:

```bash
nvm use 18.18.0 # recommended minimum npm version
npm run dev # command to launch locally
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## Data
Data storage is managed through a [Neon](https://console.neon.tech/) Postgres table, hosted on [Vercel](https://vercel.com/). This is used for both local and production environments.

## Icons
To add icons to a page, browse here and copy/paste the code after clicking the desired icon: https://react-icons.github.io/react-icons/