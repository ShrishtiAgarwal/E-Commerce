const Sentry = require("@sentry/node");


function alert() {
    
    Sentry.init({ dsn: "https://examplePublicKey@o0.ingest.sentry.io/0" });
}
module.exports=alert