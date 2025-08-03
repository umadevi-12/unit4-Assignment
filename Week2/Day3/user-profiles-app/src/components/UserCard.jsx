import React from "react";
const UserCard = ({name,email,city}) =>{
    return (
        <div style = {style.card}>
            <h3>{name}</h3>
            <p><strong>Email :</strong>{email}</p>
            <p><strong>City :</strong>{city}</p>
        </div>
    );
};
const style = {
    card :{
        border : '1px soild #ccc',
        padding : '16px',
        margin:'12px 0',
        borderRadius:'8px',
        backgroundColor :'#f9f9f9'
    }
};
export default UserCard;
