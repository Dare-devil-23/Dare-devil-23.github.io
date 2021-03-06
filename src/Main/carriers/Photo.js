import React from "react";

const imgStyle = {
  display: "block"
};

const cont = {
  backgroundColor: "#eee",
  cursor: "pointer",
  overflow: "hidden",
  float: "left",
  position: "relative"
};

export default ({ photo, margin, onClick }) => {
  return (
    <div style={{ margin, width: photo.width, ...cont }} >
      <img style={{ ...imgStyle }} {...photo} onClick={onClick} key={photo.index} />
    </div>
  );
};
