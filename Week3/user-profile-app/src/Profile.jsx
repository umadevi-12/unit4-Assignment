import React from "react";
import { UserContext } from "./UserContext";
import { useContext } from "react";

function Profile(){
    const {user} = useContext(UserContext);

    return (
        <div style = {{padding : 20}}>
            <h2>User Profile</h2>
            <p>
                <strong>Name :</strong>{user.name}
            </p>
            <p>
                <strong>Email :</strong>{user.email}
            </p>
        </div>
    )
}
export default Profile;