# deezer-proxy-api
This is a simple Express Typescript API which consumes [deezer public API](https://www.deezer.com/)

## How set up locally

### Prerequisite

You need the following installed:
```
node: >14
```

### Steps

1. Clone this repository
2. In your shell/terminal, navigate to `deezer-proxy-api` directory.
   ```
   cd /path/to/deezer-proxy-api
   ```
3. Install dependencies
   ```
   npm install
   ```
4. Create `.env` in root dictory and add the following
   ```
   PORT:<portnumber> // 8080 default
   DEEZER_URL=https://api.deezer.com
   ```
5. Start the server
   ```
   npm run dev
   ```
  
## API endpoints

The following endpoints are available

| enpoint   | descriptions  |examples      |
| --------- | ---------------- | ----------------------
| `/tracks?q=`  | Fetch **Tracks** based on the query params. Use `q` for general search and (track, artist, label and album) for specific search  | `/api/v1/tracks?q=eminem`, `/api/v1/tracks?track=i need a dollar`, `/api/v1/tracks?artist=eminem`, `/api/v1/tracks?artist=eminem&track=track name&album`  |
| `/artists/:id`  | Fetch an *Artist* by `id`  | `/api/v1/artists/1`  |

