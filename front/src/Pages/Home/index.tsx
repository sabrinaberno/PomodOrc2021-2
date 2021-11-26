import React, { useState } from "react";
import "./styles.css";

function index() {
  return (
    <div>
      <div className="container-global">
        <div className="container-btn">
          <button className="btn-sidebar">
            <p>Side</p>
          </button>
        </div>
        <div className="container-texts">
          <div className="pomodorc-text">
            <h1>POMOD'ORC</h1>
          </div>
          <div className="timer-text">25:00</div>
          <div className="ctn-btn-play">
            <button className ="btn-play">||</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
