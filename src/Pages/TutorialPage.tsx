import React from "react";
//import animation from "./image/Beispiel.mp4"; // Pfad zum MP4-Video
import animation from "../layout/image/Beispiel.gif";
import hostgame from "../layout/image/hostgame.gif";
import createteam from "../layout/image/createteam.gif";
import spielbeginnen from "../layout/image/spielbeginnen.gif";
import endgame from "../layout/image/Endgame.gif";
import jointeam from "../layout/image/jointeam.gif";
import joinwithcode from "../layout/image/joinwithcode.gif";
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

            <section style={{ marginTop: "20px" }}>
                <h2>Die Spieler</h2>
                <p>Warte auf die Bestätigung des Hosts, dass das Spiel vorbereitet ist.</p>
                <p>Auf dem Host-Bildschirm wird ein QR-Code angezeigt:</p>
                <p>Scanne den QR-Code und folge dem Link.</p>
                <p>Alternativ: nutze einen geteilten Link oder gib den Spiel-Code auf der App-Startseite ein.</p>
                <p>
                    Solltest du nicht angemeldet sein, gib deinen gewünschten Spielernamen ins Eingabefeld ein und bestätige mit „Save“.
                </p>
                <p>Tritt einem Team bei:</p>
                <ul>
                    <li>Drücke „Join Team“.</li>
                    <li>Du kannst dein Team wechseln mit „Leave Team“ und erneut „Join Team“.</li>
                </ul>
                <p>
                    Melde dem Host, wenn dein Team feststeht, und warte auf den Spielstart.
                </p>
                <video
                    src={jointeam}
                    autoPlay
                    loop
                    muted
                    style={{ maxWidth: "50%", maxHeight: "300px", borderRadius: "8px" }} // maxWidth und maxHeight hinzugefügt
                />
                <video
                    src={joinwithcode}
                    autoPlay
                    loop
                    muted
                    style={{ maxWidth: "50%", maxHeight: "300px", borderRadius: "8px" }} // maxWidth und maxHeight hinzugefügt
                />
            </section>




            <section style={{ marginTop: "20px" }}>
                <h2>Das Spiel</h2>
                <p>
                    Du bekommst jetzt eine Benachrichtigung in deinem Browser, die dich auffordert, den Standortzugriff zuzulassen. Das ist unbedingt notwendig für das Verwenden der App.
                    Sobald du auf “Zulassen” drückst, solltest du die Karte mit einigen Pick Point (gelb), sowie deinem eigenen Standort (weiß-rot) sehen. Drückst du auf einen Pick Point, so öffnet sich ein Fenster mit einer kurzen Beschreibung des Pick Point, sowie einem Button für das Claimen.
                </p>
                <p>
                    Probiere einen der Pick Points zu Claimen. Du solltest eine Nachricht bekommen, mit der aktuellen Distanz zum Pick Point.
                    Nähere dich einem Pick Point um diesen zu Claimen und Punkte zu sammeln.
                    Du kannst mit dem Button “View Teams” die Teams und ihre Gesamtpunktzahl sehen.
                </p>
                <p><strong>Spiel beenden:</strong> Sind alle Spieler wieder am Startpunkt, drückt der Host auf “End Game”. Alle Spieler sehen jetzt die Punktzahlen aller Teams, sowie die Zeit, die das Spiel gelaufen ist.</p>

                <div style={{ display: "flex", justifyContent: "space-between", gap: "10px" }}>
                    <video
                        src={spielbeginnen}
                        autoPlay
                        loop
                        muted
                        style={{ maxWidth: "48%", maxHeight: "300px", borderRadius: "8px" }}
                    />
                    <video
                        src={endgame}
                        autoPlay
                        loop
                        muted
                        style={{ maxWidth: "48%", maxHeight: "300px", borderRadius: "8px" }}
                    />
                </div>
            </section>

        </div>
    );
};

export default TutorialPage;
