# Cloudflare CORS ACCESS

Example of how to use CORS with Cloudflare access to pass credentials to a backend.
Replace all `.community.cyberjake.xyz` with your domain.

Need the following:

Cloudflare Policies:

- ![Cloudflare CORS policy](https://r2-sharex.cyberjake.xyz/file/2023/12/firefox_K6EPBtmSPN.png)
- ![Cloudflare Access Application](https://r2-sharex.cyberjake.xyz/file/2023/12/firefox_Nor8ASvm9x.png)

**Backend**:

Cloudflare tunnel token with public hostnames as shown below.
![Cloudflare Tunnel Public Hostnames](https://r2-sharex.cyberjake.xyz/file/2023/12/firefox_IRs6LwK788.png)

Edit the cors settings in [backend/index.js](backend/index.js) to match your origin.

**Frontend**:

Edit the `server_name` in [frontend/nginx.conf](frontend/nginx.conf) to match your domain.

**Running**:

```bash
docker compose up --build
```

Wait for the tunnel to connect and then visit `https://<your domain>/` to see the frontend and watch the console for the response from the backend.
