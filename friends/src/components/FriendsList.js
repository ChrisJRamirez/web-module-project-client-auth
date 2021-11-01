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
          friendsList: res.friends
        });
        console.log(res.friends)
      })
      
      .catch(err => {
        console.log(err)
      })
      
  }

  render () {
    return (
      <div className="friends-list">
        <div className="title">
          <h1>Friends List</h1>
        </div>

        {this.friendsList.map(friend => (
          <div key={friend.id} className="friend-id">
          
          <div>
            <p> {friend.name} </p>
            <p> {friend.age} </p>
            <p> {friend.email} </p>
          </div>
    
         </div>
        ))}
        
     </div>
    )
  }
  
}


export default FriendsList;