module.exports = {
  FOURSQUARE: {
    CLIENT_ID: process.env.FOURSQUARE_CLIENT_ID || "UNKOWN_CLIENT_ID",
    CLIENT_SECRET: process.env.FOURSQUARE_CLIENT_SECRET || "UNKOWN_CLIENT_SECRET",
    API_VERSION: process.env.FOURSQUARE_API_VERSION || "20180625",
    BASE_URL: process.env.FOURSQUARE_BASE_URL || "https://api.foursquare.com/v2/",
    REDIRECT_URI: process.env.FOURSQUARE_REDIRECT_URI || "localhost:5000/oauth-redirect/foursquare",
  },
  SERVER: {
    PORT: process.env.PORT || 5000
  }
}