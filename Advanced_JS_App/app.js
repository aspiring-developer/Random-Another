let express = require("express");
let app = express();
const router = require("./router");
let session = require("express-session");
const MongoStore = require("connect-mongo") (session);
let sessionOptions = session({secret: "I can do it!", store: new MongoStore({client: require('./db')}), resave: false, saveUninitialized: false, cookie: {maxAge: 1000 * 60 * 60 * 24, httpOnly: true}});

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(sessionOptions);
app.use('/', router);
app.use(express.static("public"));
app.set("views", "views");
app.set("view engine", "ejs");

module.exports = app;


