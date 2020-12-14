import { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = (props) => {
  const [seeds, setSeeds] = useState([]);

  useEffect(() => {
    const getAllSeeds = async () => {
      try {
        const res = await axios.get(`/api/seeds`);
        setSeeds(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getAllSeeds();
  }, []);

  const mappedSeeds = seeds.map((seed) => {
    return (
      <div key={seeds.seed_id}>
        <div className="">
          <h3>Type: {seed.type}</h3>
          <p>Variety: {seed.variety}</p>
          <img src={seed.image_url} />
          <p>Description: {seed.description}</p>
          <p>Quantity: {seed.quantity}</p>
          <p>Owner: {seed.user_id}</p>
        </div>
      </div>
    );
  });

  return <div>{mappedSeeds}</div>;
};

export default Dashboard;
