const PROXY_CONFIG = {
  // develop mode, slack bot proxy configuration
  "/services/**": {
    "target": "https://hooks.slack.com",
    "secure": false,
    "changeOrigin": true
  }
}

module.exports = PROXY_CONFIG;
