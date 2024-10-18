import "./Board.css";
import BackgroundCellGenerator from "./Board/BackgroundCellGenerator";
import BlackChecker from "./Board/BlackChecker";



function Board() {
    return <div className="Board">
        <BackgroundCellGenerator/>
        <BlackChecker x={2} y={7}/>
        <div style={{gridColumn: 4, gridRow: 4}}></div>
        <div style={{gridColumn: 2, gridRow: 2}}></div>
        <div style={{gridColumn: 6, gridRow: 6}}></div>
</div>
}

export default Board;