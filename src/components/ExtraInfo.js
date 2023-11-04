import React from "react";

export default function ExtraInfo(props) {
  return (
    <div className="iconDetail">
      <i className={`fa-solid fa-${props.class}`}></i>
      <div style={{ marginLeft: "10px" }}>
        <p>{props.data}</p>
        <p style={{ fontSize: "medium" }}>{props.info}</p>
      </div>
    </div>
  );
}
