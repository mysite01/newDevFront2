import React from "react";
import Button from "react-bootstrap/Button";


interface Props {
    onClick: () => void;
}

const JoinGameStartButton: React.FC<Props> = ({ onClick }) => {
    return (
        <Button variant="warning" onClick={onClick} data-testid={'JoinGameStartButton'}>
            Join Game withh invite code or QR-Code
        </Button>
    );
};

export default JoinGameStartButton;