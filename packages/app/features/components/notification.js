import "../../styles/finishedSession.css";
import "../../styles/notification.css";

export const Notification = ({ title, text }) => {
    return(
        <div className="notification">
            <h4 className="hSM notificationTitle">{title}</h4>
            <p className="small">{text}</p>

            <div className="notificationDecision">
                <a className="declineNotification">No</a>
                <p></p>
                <a className="acceptNotification">Yes</a>
            </div>
        </div>
    )
}