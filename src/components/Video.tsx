import { useMediaQuery } from "react-responsive";
import useExternalScripts from "../hooks/useExternalScripts";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "video-js": any;
    }
  }
}

interface VideoProps {
  scriptUrl: string;
  playerId: string;
  videoId: string;
  className?: string;
  heroVid?: boolean;
}

const Video = ({
  scriptUrl,
  playerId,
  videoId,
  className,
  heroVid,
}: VideoProps) => {
  useExternalScripts(scriptUrl);
  const isMobile = useMediaQuery({ maxWidth: 1023 });

  return (
    <div className={`${className} hero-block`}>
      <video-js
        data-account="6165065566001"
        data-player={playerId}
        data-embed="default"
        controls=""
        data-video-id={videoId}
        data-playlist-id=""
        data-application-id=""
        class="vjs-fluid"
        style={heroVid && isMobile ? { height: "460px" } : { height: "auto" }}
        loop
      ></video-js>

      <h3 className="reader-only">Video</h3>
    </div>
  );
};

export default Video;
