import React,{useContext} from 'react'
import UserContext from "../context/UserContext.js";
// here we fetch our if exist else
function Profile() {
    const{user}= useContext(UserContext)
  if(!user) return <div> please login</div>
    return <div>
        welcome {user.userName}
        {/*console.log({user.password});*/}
        
    </div>
}

export default Profile;
