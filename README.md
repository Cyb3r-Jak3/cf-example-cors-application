# Cloudflare CORS ACCESS

Example of how to use CORS with Cloudflare access to pass credentials to a backend.
Replace all `.community.cyberjake.xyz` with your domain.

Need the following:

Cloudflare Policies:

- ![Cloudflare CORS policy](https://r2-sharex.cyberjake.xyz/file/2024/03/firefox_DawNag6jI1.png)
- ![Cloudflare Access Application](https://r2-sharex.cyberjake.xyz/file/2024/03/firefox_AG7WxYmBLC.png)

### Backend:

Cloudflare tunnel token with public hostnames as shown below.
![Cloudflare Tunnel Public Hostnames](https://r2-sharex.cyberjake.xyz/file/2023/12/firefox_IRs6LwK788.png)

Edit the cors settings in [backend/index.js](backend/index.js) to match your origin.

### Frontend:

Edit the `server_name` in [frontend/nginx.conf](frontend/nginx.conf) to match your domain.

### Running:

```bash
docker compose up --build
```

Wait for the tunnel to connect and then visit `https://<your domain>/` to see the frontend and watch the console for the response from the backend.

## Demo

View the demo at [https://frontend.community.cyberjake.xyz/](https://frontend.community.cyberjake.xyz/).

#### Demo Notes

- It does require to verify with an email address to access the site.
- I am able to see emails that sign up, so please don't use any sensitive information. You can use a temporary email service like [Temp Mail](https://temp-mail.org/) to get a temporary email address.
