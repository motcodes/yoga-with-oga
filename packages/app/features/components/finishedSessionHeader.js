import "../../styles/finishedSession.css";
import "../../styles/sessionPageHeader.css";

export const FinishedSession = ({ title }) => {
    return(
        <div className="finishedSessionheader">
            <p className="base gratulations">Great Session! You completed:</p>
            <h2 className="hMD finishedSessionTitle">{title}</h2>
            <h4 className="hSM">Summary</h4>
        </div>
    )
}