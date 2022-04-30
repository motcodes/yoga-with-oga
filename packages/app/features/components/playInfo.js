import "../../styles/play.css";

export const PlayInfo = ({ title, time }) => {
    return(
        <div className="playInfo">
            <div>
                <h3 className="playTime">{time + 's'}</h3>
                <h4 className="playTitle">{title}</h4>
            </div>

            <div className="playInfoTimeline">
                
            </div>
        </div>
    )
}