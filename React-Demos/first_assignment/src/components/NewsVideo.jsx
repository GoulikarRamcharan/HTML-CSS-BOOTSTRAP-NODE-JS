import React from "react";
import hamza from "./hamza.mp4";

function NewsVideo() {
  return (
   <div className="ratio ratio-16x9">
      <video className="w-100 h-100" controls>
        <source src={hamza} type="video/mp4" />
      </video>
    </div>
  );
}

export default NewsVideo;
