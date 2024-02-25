import React from "react";

const ProfilePhoto = () => {
  return (
    <div>
      <img
        style={{
          borderRadius: "50%",
          Width: "200px",
          height: " 200px",
          display: "flex",
          justifyContent: "center",
          marginLeft: "524px",
          marginTop: "100px",
        }}
        src="img/image.jpg"
        alt="Your Profile Photo"
      />
    </div>
  );
};

export default ProfilePhoto;
