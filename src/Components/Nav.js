import { Link } from "react-router-dom";
import { getUserSession } from "../redux/reducer";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

const Nav = (props) => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    let userSession = getUserSession()
    setUser(userSession)
        
   
  }, []);
  
  
  return (
    <nav className="">
      <ul>
        <li>
          <Link to={`/profile/:userId`}>Profile</Link>
        </li>
        <li>
          <Link to="/dash/">Dashboard</Link>
        </li>
        <li>
          <Link to={`/wishlist/:userId`}>My Wishlist</Link>
        </li>
        <li>
          <Link to="/logout">Logout</Link>
        </li>
      </ul>
    </nav>
  );
};
const mapStateToProps = (state) => state;
export default connect(mapStateToProps, { getUserSession })(Nav);