import React from "react";
//import animation from "./image/Beispiel.mp4"; // Pfad zum MP4-Video
import animation from "../layout/image/Beispiel.gif";

const TutorialPage: React.FC = () => {
  return (
    <div>
      <h1>Willkommen zum Tutorial</h1>
      {/* Video-Tag mit eingebettetem MP4 */}
      <video 
        src={animation} 
        autoPlay 
        loop 
        muted 
        style={{ maxWidth: "100%", borderRadius: "8px" }} 
      />
    </div>
  );
};

export default TutorialPage;
