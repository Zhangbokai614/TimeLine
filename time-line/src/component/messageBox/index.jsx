import React, { useState, useEffect } from "react";

import { Typography } from "antd";

import "./index.css";

const { Title, Text } = Typography;

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
              <div className="right_point">{m.tag}</div>
              <div className="right_message">
                <div className="right_text">
                  <Title level={4}>{m.title}</Title>
                  <Text className="message">{m.content}</Text>
                </div>
                <Text className="text_date" disabled>
                  {m.date}
                </Text>
              </div>
            </div>
          );
        } else {
          return (
            <div className="left_box" key={index}>
              <div className="block" />
              <div id="line" />
              <div className="left_point">{m.tag}</div>
              <div className="left_message">
                <div className="left_text">
                  <Title level={4}>{m.title}</Title>
                  <Text className="message">{m.content}</Text>
                </div>
                <Text className="text_date" disabled>
                  {m.date}
                </Text>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default MessageBox;
