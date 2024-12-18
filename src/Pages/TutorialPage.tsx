import React from "react";
//import animation from "./image/Beispiel.mp4"; // Pfad zum MP4-Video
import animation from "../layout/image/Beispiel.gif";
import hostgame from "../layout/image/hostgame.gif";
import createteam from "../layout/image/createteam.gif";
import spielbeginnen from "../layout/image/spielbeginnen.gif";
import endgame from "../layout/image/Endgame.gif";
const TutorialPage: React.FC = () => {
    return (
      <div style={{ padding: "20px" }}>
        <h1>Willkommen zum Tutorial</h1>
        {/* Video oder GIF eingebettet */}
        <video
         
        />
        
        <section style={{ marginTop: "20px" }}>
          <h2>Einführung</h2>
          <p>
            Geo Pick Points ist ein Spiel, welches eine virtuelle Schnitzeljagd in einer beliebigen Umgebung bereitstellt.
            Ziel des Spiels ist es, möglichst viele Punkte durch das Claimen von Stationen einzusammeln. Ob ihr miteinander kompetitiv oder gegeneinander in mehreren Teams spielt, ist dabei euch überlassen.
            Ihr sollt dabei Spaß haben und eine neue Gegend erkunden, indem ihr interessante Punkte besucht und dabei aber auch gegenseitig, durch das Punkte sammeln, ein wenig Herausforderung habt.
          </p>
          <p>
            Bitte zieht euch entsprechend der Wetterverhältnisse an, da das Spiel hauptsächlich draußen stattfindet.
          </p>
        </section>
  
        <section style={{ marginTop: "20px" }}>
          <h2>Der Host</h2>
          <p>
            Der Host erstellt Spiele, kümmert sich um das Einladen der Spieler und kann das Spiel starten und beenden.
            Ansonsten ist er ebenfalls ein normaler Spieler und spielt wie die anderen mit. Du musst dafür nicht extra angemeldet sein.
          </p>
        </section>
  
        <section style={{ marginTop: "20px" }}>
          <h2>Spiel erstellen</h2>
          <ol>
            <li>Klicke auf der Startseite auf “Create Game”.</li>
            <li>
              Solltest du nicht angemeldet sein, kannst du nun deinen Spielernamen eingeben.
            </li>
            <li>
              Auf der nächsten Seite geht es weiter mit der Erstellung von Teams.
              Tippe auf “Create Teams”.
            </li>
            <li>
              Gib im ersten Feld einen Namen für die Teams ein (aktuell werden alle gleich benannt und mit Zahlen unterschieden).
            </li>
            <li>Im zweiten Feld gibst du die Anzahl der Teams ein.</li>
            <li>Nun solltest du dich in der Spiellobby befinden.</li>
            <li>
              Hier kannst du nun die anderen Spieler über einen QR Code, einen teilbaren Link oder den direkten Code einladen.
            </li>
            <li>
              Wenn alle Spieler beigetreten und in einem Team sind, startest du das Spiel über “Start Game”.
              </li>
              <video
          src={hostgame}
          autoPlay
          loop
          muted
          style={{ maxWidth: "50%", maxHeight: "300px", borderRadius: "8px" }} // maxWidth und maxHeight hinzugefügt
        />
         <video
          src={createteam}
          autoPlay
          loop
          muted
          style={{ maxWidth: "50%", maxHeight: "300px", borderRadius: "8px" }} // maxWidth und maxHeight hinzugefügt
        />
          <video
          src={spielbeginnen}
          autoPlay
          loop
          muted
          style={{ maxWidth: "50%", maxHeight: "300px", borderRadius: "8px" }} // maxWidth und maxHeight hinzugefügt
        />
        
        </ol>
       
          <h2>Spiel beenden</h2>
          <p>
            Wenn das Spiel beendet werden soll, kannst du es aus dem Spiel heraus mit “End Game” beenden.
            Anschließend sollten alle Spieler im Auswertung-Screen landen.
          </p>
          <video
          src={endgame}
          autoPlay
          loop
          muted
          style={{ maxWidth: "50%", maxHeight: "300px", borderRadius: "8px" }} // maxWidth und maxHeight hinzugefügt
        />
        </section>
      </div>
    );
  };
  

export default TutorialPage;
