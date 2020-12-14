import { useState, useEffect } from "react";
import axios from "axios";
import { getUserSession } from "../redux/reducer";


const Wishlist = (props) => {
  const [orders, setOrders] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    const getMyOrders = async () => {
      try {
        const res = await axios.get(`/api/wishlist/${res.session.user.user_id}`);
        setOrders(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    let userSession = getUserSession()
    setUser(userSession)
    getMyOrders();
  }, []);

  // const mappedOrders = orders.map((order) => {
  //   return (
  //     <div key={order.order_id}>
  //       <div className="">
  //         <h3>Owner: {order.type}</h3>
  //         <h2>Variety: {order.variety}</h2>
  //         <img url={order.image_url} />
  //         <h2>Description: {order.description}</h2>
  //         <h2>Quantity: {order.quantity}</h2>
  //         <h2>Owner: {seed.user_id}</h2>
  //       </div>
  //     </div>
  //   );
  // });

  return (
    <div>
      {/* {mappedOrders} */}
    </div>
  );
};

export default Wishlist;