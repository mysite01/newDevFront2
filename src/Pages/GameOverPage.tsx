import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const GameOverPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { dataGameInstance, playerID, teamID, scores } = location.state || {};
  const startTime = dataGameInstance?.payload?.startTime;

  const [timeDifference, setTimeDifference] = useState<string | null>(null);

  useEffect(() => {
    if (startTime) {
      // Calculate time difference
      const startDate = new Date(startTime);
      const currentDate = new Date();
      const diffInMilliseconds = currentDate.getTime() - startDate.getTime();

      // Calculate time difference in minutes and seconds
      const diffInSeconds = Math.floor(diffInMilliseconds / 1000);
      const minutes = Math.floor(diffInSeconds / 60);
      const seconds = diffInSeconds % 60;

      setTimeDifference(`${minutes} minutes and ${seconds} seconds`);
    } else {
      setTimeDifference(null);
    }
  }, [startTime]);

  return (
    <div style={{ paddingTop: "20vh", textAlign: "center" }}>
      <h1>Game Over</h1>

      {/* Display Time Difference if available */}
      {timeDifference ? (
        <p>
          <strong>Time:</strong> {timeDifference}
        </p>
      ) : (
        <p>
          <strong>Time:</strong> Not available
        </p>
      )}

      <h2>Scores</h2>
      {scores && scores.size > 0 ? (
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {[...scores.values()].map((score, index) => (
            <li key={index} style={{ margin: "10px 0" }}>
              <strong>Team {index + 1}</strong> - Score {score}
            </li>
          ))}
        </ul>
      ) : (
        <p>No scores available</p>
      )}

      {/* Back to Start Button */}
      <button
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          border: "solid",
          borderColor: process.env.REACT_APP_COLOR_SECONDARY,
          borderRadius: "5px",
          backgroundColor: process.env.REACT_APP_COLOR_PRIMARY,
          color: process.env.REACT_APP_COLOR_SECONDARY,
        }}
        onClick={() => navigate("/")}
      >
        Back to Start
      </button>
    </div>
  );
};

export default GameOverPage;
