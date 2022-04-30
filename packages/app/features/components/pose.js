import "../../styles/poseElement.css";

export const PoseElement = ({ imgName }) => {
    return(
        <div className="poseElement">
            <img src={require('./../../styles/images/dex-ezekiel-We6cFKHo8sQ-unsplash1.png').default.src}></img>
            <p className="base">Test</p>
        </div>
    )
}