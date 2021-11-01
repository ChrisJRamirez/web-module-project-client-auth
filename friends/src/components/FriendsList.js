import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";


class FriendsList extends React.Component {
  state = {
    friendsList: []
  };

  componentDidMount() {
    axiosWithAuth()
      .get("/friends")
      .then(res => {
        this.setState({
          friendsList: res.data.data
        });
      })
      
      .catch(err => {
        console.log(err)
      })
      
  }
  
}



export default FriendsList;