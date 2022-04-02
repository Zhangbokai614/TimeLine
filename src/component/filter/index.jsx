import React, { useState, useEffect } from "react";

import "./index.css";

function MessageBox(props) {
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    setMessageList(props.messageList);
  });

  return (
    <div id="message_list">
      {messageList.map((m, index) => {
        if (index % 2 == 0) {
          return (
            <div className="right_box" key={index}>
              <div className="block" />
              <div id="line" />
              <div className="right_point" />
              <div className="right_message">
                <div className="right_text">{m}</div>
              </div>
            </div>
          );
        } else {
          return (
            <div className="left_box" key={index}>
              <div className="block" />
              <div id="line" />
              <div className="left_point" />
              <div className="left_message">
                <div className="left_text">{m}</div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default MessageBox;
