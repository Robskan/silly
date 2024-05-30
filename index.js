export default {
  async fetch(request, env, ctx) {
    const hostname = new URL(request.url).hostname;

    const parts = hostname.split('.');
    let subdomain = '';
    if (parts.length > 3 && parts.slice(-3).join('.') === 'is-silly.ntts.site') {
      subdomain = parts.slice(0, -3).join('.');
    } else {
      subdomain = 'Robbie';
    }
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${subdomain} is very silly</title>
          <style>
              body {
                  background-color: black;
                  color: purple;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  height: 100vh;
                  margin: 0;
                  font-family: Arial, sans-serif;
              }
              #content {
                  text-align: center;
              }
              #icon {
                  margin-right: 10px;
                  vertical-align: middle;
              }
          </style>
      </head>
      <body>
          <div id="content">
              <h1>${subdomain}</h1>
              <p><img id="icon" src="https://images-ext-1.discordapp.net/external/UaLXG1KbFVNMw1qmKTH__WkNvv0ZUADBJR_VpLyapiE/https/i.ibb.co/BfzLDQf/1-removebg-preview.png" alt="Icon" width="20" height="20"> Verified silly</p>
          </div>
      </body>
      </html>
    `;
    return new Response(htmlContent, {
      headers: { 'Content-Type': 'text/html' },
    });
  },
};
