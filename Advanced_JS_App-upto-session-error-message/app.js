let express = require("express");
let session = require("express-session");
let app = express();
const MongoStore = require("connect-mongo") (session);
const flash = require("connect-flash");

let sessionOptions = session({secret: "I can do it!", store: new MongoStore({client: require('./db')}), resave: false, saveUninitialized: false, cookie: {maxAge: 1000 * 60 * 60 * 24, httpOnly: true}});

const router = require("./router");

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(sessionOptions);
app.use(flash());
app.use('/', router);
app.use(express.static("public"));
app.set("views", "views");
app.set("view engine", "ejs");

module.exports = app;
