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
          
          <strong>What is Geo Pick Points?</strong>
Geo Pick Points is an exciting game that takes you on a virtual scavenger hunt. You can play solo or in teams, exploring interesting locations while collecting points. Whether cooperative or competitive, the goal is fun and adventure!

<strong>The best part?</strong>
Discover new surroundings, claim stations, and compete against each other – and don’t forget to dress appropriately for the weather, as the adventure takes place outdoors!
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
