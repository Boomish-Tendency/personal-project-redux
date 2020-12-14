const bcrypt = require("bcrypt");

module.exports = {
  register: async (req, res) => {
    const db = req.app.get("db");
    const { email, password } = req.body;

    const [user] = await db.check_user([email]);

    if (user) {
      return res.status(409).send("Please use another email.");
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const [newUser] = await db.register_user([email, hash]);
    req.session.user = newUser;
    res.status(200).send(req.session.user);
  },
  logout: (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
  },
  login: async (req, res) => {
    const db = req.app.get("db");
    const { email, password } = req.body;
    try {
      const [pastUser] = await db.check_user([email]);
      const pastTheGate = bcrypt.compareSync(password, pastUser.hash);

      if (!pastUser) {
        return res.status(401).send("Email not found");
      }
      if (!pastTheGate) {
        return res.status(401).send("Incorrect Credentials");
      }
      if (pastTheGate) {
        req.session.user = pastUser;
        delete pastUser.hash;
        res.status(200).send(req.session.user);
      }
    } catch (err) {
      res.sendStatus(400);
      console.log("Error", err);
    }
  },
  getUserSession: (req, res) => {
    if (req.session.user) {
      res.status(200).send(req.session.user);
    } else {  
      res.status(500).send("Server Error: No known session");
    }
  },
};

// Old Code
// register: async (req, res) => {

//   const db = req.app.get("db");
//   const { email, firstName, lastName, aboutMe, password } = req.body;

//   const [user] = await db.check_user([email]);

//   if (user) {
//     return res.status(409).send("Please use another email.");
//   }

//   const salt = bcrypt.genSaltSync(10);
//   const hash = bcrypt.hashSync(password, salt);
//   const profilePic = `https://picsum.photos/200`;
//   const dateCreated = Date.now();

//   const [newUser] = await db.register_user([
//     email,
//     firstName,
//     lastName,
//     aboutMe,
//     hash,
//     profilePic,
//     dateCreated,
//     dateCreated,
//   ]);
//   req.session.user = newUser;
//   res.status(200).send(req.session.user);
// },
