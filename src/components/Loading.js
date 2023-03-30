import React from "react";
import loading from "../assets/loading.svg";

const Loading = () => {
  return (
    <div
      style={{ height: "600px" }}
      className="w-full flex aligns-center justify-center"
    >
      <div className="flex justify-center items-center space-x-2">
        <div className="" role="status">
          <img alt="" src={loading} />
        </div>
      </div>
    </div>
  );
};

export default Loading;
