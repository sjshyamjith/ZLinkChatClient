import React from "react";

const SendMessageForm = () => {
  return (
    <div className="w-full">
      <form action="#">
        <div className="flex px-2">
          <div className="w-9/12">
            <input
              type="text"
              name="message"
              id="message"
              className="rounded-tl-lg rounded-bl-lg w-full p-3 italic"
              autoComplete="off"
              required
              placeholder="Type Message..."
            />
          </div>
          <div className="w-3/12">
            <button
              type="submit"
              className="bg-sky-400 text-white w-full rounded-tr rounded-br-lg p-3"
            >
              SEND
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SendMessageForm;
