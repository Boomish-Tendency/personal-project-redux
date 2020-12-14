import { useState, useEffect } from "react";
import axios from "axios";
import { getUserSession } from "../redux/reducer";
import AboutMe from "./AboutMe";

const Profile = (props) => {
  const [seeds, setSeeds] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    const getMySeeds = async () => {
      try {
        const res = await axios.get(`/api/seeds/${res.session.user.user_id}`);
        setSeeds(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    let userSession = getUserSession()
    setUser(userSession)
        
    getMySeeds();
  }, []);

  const mappedSeeds = seeds.map((seed) => {
    return (
      <div key={seeds.seed_id}>
        <div className="">
          <h3>Type: {seed.type}</h3>
          <h2>Variety: {seed.variety}</h2>
          <img url={seed.image_url} />
          <h2>Description: {seed.description}</h2>
          <h2>Quantity: {seed.quantity}</h2>
          <h2>Owner: {seed.user_id}</h2>
        </div>
      </div>
    );
  });

  return (
    <div>
      <AboutMe user={user} />
      <img src={user.profilePic} alt='' />
      {mappedSeeds}
    </div>
  );
};

export default Profile;

// const deleteSeed = async (seed_id) => {
//     try {
//         const res = await axios.delete(`/api/seeds/${seed_id}`);
//         setSeeds(res.data);
//     } catch(err) {
//         console.log(err);
//     };
// };
