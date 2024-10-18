import Image from "../../../../image/black_checker.png"
function BlackChecker() {
    return <div style={{gridColumn:props.y, gridRow:props.x}}>
        <img src={Image} alt={""}/>
    </div>
}
export default BlackChecker;