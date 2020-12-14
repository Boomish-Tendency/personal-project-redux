import { useEffect } from 'react';
import {logoutUser} from '../redux/reducer'
import { connect } from "react-redux";
import axios from "axios";

const Logout = (props) => {

  useEffect(() => {
    const logOff = () => {
      axios
        .post("/auth/logout", {})
        .then((res) => {
          props.logoutUser();
          props.history.push(`/`)
        })
        .catch((err) => console.log(err))
      };
  logOff()  
  }, [])

  return(
    <div className="">
      <h1>Have a Nice Day!</h1>
    </div>
  )

}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { logoutUser })(Logout);