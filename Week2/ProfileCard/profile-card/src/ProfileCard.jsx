import React from "react";

const ProfileCard = ({
  name = "username",
  age = "age",
  bio = "no bio available"
}) => {
  let displaybio = bio;
  if (bio.length > 100) {
    displaybio = bio.slice(0, 100) + "...Read More";
  }

  return (
    <div
      style={{
        maxWidth: "300px",
        padding: "20px",
        margin: "20px",
        border: "1px solid ",
        borderRadius: "6px",
        backgroundColor: "lightgrey",
        boxShadow: "2px",

      }}
    >
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
      <p style={{ fontSize: "14px", color: "purple" }}>
        Bio: {displaybio}</p>
    </div>
  );
};

export default ProfileCard;
