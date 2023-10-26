import * as React from "react";
import useExternalScripts from "../hooks/useExternalScripts";

interface VideoJSX extends React.JSX.IntrinsicElements {
  "video-js": any;
}

const Video: React.FC = () => {
  useExternalScripts(
    "https://players.brightcove.net/6165065566001/wIpGq2Kd0p_default/index.min.js"
  );
  return (
    <>
      <div className="full-bg z-[-1]">
        <video-js
          id="bg-video"
          data-account="6165065566001"
          data-player="wIpGq2Kd0p"
          data-video-id="6338956021112"
          data-embed="default"
          data-application-id
          autoPlay
          loop
          muted
          controls
          style={{ objectFit: "cover" }}
        />
      </div>
      <h3 className="reader-only">Video</h3>
    </>
  );
};

export default Video;
