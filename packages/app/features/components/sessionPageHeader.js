import "../../styles/sessionPageHeader.css";

export const SessionPageHeader = ({ imgName, title, time }) => {
    return(
        <div className="sessionPageHeader">
            <img src={require('./../../styles/images/dex-ezekiel-We6cFKHo8sQ-unsplash1.png').default.src}></img>
            <div className="sessionPageTitle">
                <h2 className="hMD">{title}</h2>
                <p className="small">{time}</p>
            </div>
        </div>
    )
}