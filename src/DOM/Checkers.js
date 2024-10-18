import EnemyInfo from "./Checkers/EnemyInfo.js";
import Game from "./Checkers/Game.js";
import PlayerInfo from "./Checkers/PlayerInfo.js";
import "./Checkerss.css";

function Checkers() {
    return <div className="Checkers">
        <EnemyInfo/>
        <Game/>
        <PlayerInfo/>
    </div>;
}
    export default Checkers;