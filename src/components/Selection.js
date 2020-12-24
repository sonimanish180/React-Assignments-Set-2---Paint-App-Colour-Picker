import React, { useState } from "react";

export default function Selection(props) {
  // let [background, setBackground] = React.useState("");
  let [background, setBackground] = useState({ background: "" });
  const applyColor = props.applyColor;
  const nextBackground = props.nextBackground;

  const trigger = () => {
    applyColor(setBackground(nextBackground));
  };

  return (
    <>
      <div style={background} className="fix-box" onClick={() => trigger()}>
        <h2 className="subheading">Selection</h2>
      </div>
    </>
  );
}
