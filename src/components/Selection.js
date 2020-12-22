import React, { useState } from "react";

export default function Selection(props) {
  let [background, setBackground] = React.useState("");

  return (
    <>
      <div
        style={{ backgroundColor: background }}
        className="fix-box"
        onClick={props.applyColor}
      >
        <h2 className="subheading">Selection</h2>
      </div>
    </>
  );
}
