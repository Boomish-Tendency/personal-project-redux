//requirements
require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;
const auth = require("./controllers/authController");
const seedCtrl = require("./controllers/seedController");
const wishListCtrl = require("./controllers/wishListController")
const app = express();

//server middleware
app.use(express.json()); //json parser

app.use(                 //Session cookie setup
  session({
    resave: false,
    saveUninitialized: false,
    secret: SESSION_SECRET,
    cookie: {
      maxAge: 24 * 60 * 60 * 1000, //1 day
    },
  })
);  

massive({                                 //POSTGRESQL data mapper
    connectionString: CONNECTION_STRING,
    ssl: { rejectUnauthorized: false },
  })
    .then((db) => {
      app.set("db", db);
    })
    .catch((err) => console.log(err));

//Endpoints
app.post("/auth/register", auth.register);
app.post("/auth/login", auth.login);
app.post("/auth/logout", auth.logout);
app.get("/auth/userSession", auth.getUserSession);

app.get("/api/seeds", seedCtrl.getAllSeeds)
app.get("/api/seeds/:id", seedCtrl.getUserSeeds)
app.post("/api/seeds/:id", seedCtrl.addSeed)
// app.put("/api/seeds/:id", seedCtrl.editSeed)

app.get("/api/wishlist/:id", wishListCtrl.getUserOrders)


//Listener
app.listen(SERVER_PORT, () =>console.log(`Server listening on port ${SERVER_PORT}`));
