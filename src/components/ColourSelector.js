import React from "react";

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props;
  const { background } = config;
  // const handleClick = () => {
  //   // console.log(background);
  //   selectNextBackground({ background: background });

  //   console.log(background);
  // };
  return (
    <button
      className={props.config.classname}
      // onClick={handleClick}
      onClick={() => selectNextBackground({ background: background })}
    >
      {props.config.label}
    </button>
  );
};
export default ColourSelector;
