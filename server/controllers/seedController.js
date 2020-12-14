module.exports = {
  getAllSeeds: async (req, res) => {
    const db = req.app.get("db");

    try {
      const seeds = await db.get_all_seeds();
      res.status(200).send(seeds);
    } catch (err) {
      console.log("Database Error on function getAllSeeds", err);
      res.sendStatus(500);
    }
  },
  getUserSeeds: async (req, res) => {
    const { user_id } = req.params;
    const db = req.app.get("db");
    const seeds = await db.getUserSeeds([user_id]);
    res.status(200).send(seeds);
  },
  addSeed: async (req, res) => {
    const db = req.app.get("db");
    const {
      type,
      variety,
      description,
      image_url,
      user_id,
      quantity,
    } = req.body;
    const seeds = await db.add_seed([
      type,
      variety,
      description,
      image_url,
      user_id,
      quantity,
    ]);
    res.status(200).send(seeds);
  },
};
