module.exports = {

    getUserOrders: async (req, res) => {
        const { user_id } = req.params;
        const db = req.app.get("db");
        const orders = await db.getUserSeeds([user_id]);
        res.status(200).send(seeds);
      },
    addOrder: async (req, res) => {
        const db = req.app.get('db');   
        const {} = req.body;
        const order = await db.add_order([])
        res.status(200).send(order) 

    }
}