import "../../styles/button.css";

export const SmallButton = ({ iconName }) => {
    return(
        <a className="smallButton">
            <img src={require('./../../styles/images/arrow-left.svg').default.src}></img>
        </a>
    )
}