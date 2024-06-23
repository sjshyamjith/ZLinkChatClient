import React from "react";

const ChatBalloonWithEdit = (WrappedComponent) => {
  const editMessage = (id, message) => {
    // console.log("edit message clicked");
  };
  return function (props) {
    return <WrappedComponent {...props} editMessage={editMessage} />;
  };
};

export default ChatBalloonWithEdit;
