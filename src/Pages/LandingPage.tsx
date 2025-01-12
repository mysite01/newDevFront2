import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import HostGame from '../components/GameStartButton';
import JoinGame from '../components/JoinGameStartButton';
import ShowNameDialogInput from '../components/ShowNameDialogInput';
import { createNewPlayer } from '../actions/CreateNewPlayer';
import { RootState, useAppDispatch } from '../store/index';
import HomePageImag from "../layout/image/homePage1.png";

/** import css */
import "../layout/css/style.css";
import ReadQACode from '../components/ReadQACode';
import { useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';

const LandingPage: React.FC = () => {
  const [showNameDialog, setShowNameDialog] = useState(false);
  const [nickName, setnickName] = useState('');
  const [host, sethost] = useState(Boolean);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();


  const handleGameStartClick = () => {
    setShowNameDialog(true);
    sethost(true)
  };

  const handleJoinGameStartClick = () => {
    setShowNameDialog(true);
    sethost(false)
  };
  const handleClose = () => {
    setShowNameDialog(false);
  };

  const handleTutorialClick = () => {
    navigate('/tutorial'); // Navigiert zur Tutorial-Seite
  };

  const handleSaveName = async () => {
    if (nickName.trim()) {
      const newPlayer = await dispatch(createNewPlayer({ nickName, host }));
      const playerID = newPlayer.payload.id
      
      handleClose();
      navigate('/game', { state: { nickName, host, playerID } });
    } else {
      alert('Please enter a valid namen .');
    }
  };

  return (
    <div className="landing-page ">
      <section className="banner text-center py-4">
        <div className="banner-image">
          <img style={{paddingTop: "10vh"}} src={HomePageImag} width="300" alt="imag-header" />
        </div>
        <div className="banner-content" style={{ padding: "5rem" }}>
          <h1 style={{paddingTop: "10vh"}}>Hello, Welcome to Geo Pick Points!</h1>
          <p style={{ marginTop: "1rem", fontSize: "1.2rem", color: "#333" }}>
    Geo Pick Points is an exciting outdoor game where players explore real-world locations 
    to complete challenges and earn points. Play as a Game Master to set up the game 
    or join as a Player to participate in the adventure!
  </p>
          <HostGame onClick={handleGameStartClick} />
          <ShowNameDialogInput
            show={showNameDialog}
            onClose={handleClose}
            onSave={handleSaveName}
            nickName={nickName}
            setnickName={setnickName}
            host={host}

          />

          <JoinGame onClick={handleJoinGameStartClick} />
          <ReadQACode />
          {/* Tutorial-Button mit React-Bootstrap Style */}
          <Button
            variant="warning" // Gleicher Stil wie der JoinGame-Button
            onClick={handleTutorialClick}
            data-testid="TutorialButton"
            style={{ marginTop: "20px" }} // Optionaler Abstand
          >
            View Tutorial
          </Button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
