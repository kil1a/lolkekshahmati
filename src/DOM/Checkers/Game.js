import EnemyCemetry from "./Game/EnemyCemetry";
import Board from "./Game/Board";
import PlayerCemetry from "./Game/PlayerCemetry";
import "./Game.css";

function Game(){
    return <div className="Game">
        <EnemyCemetry/>
        <Board/>
        <PlayerCemetry/>
    </div>;
}
export default Game;