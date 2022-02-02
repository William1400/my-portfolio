import React from 'react';
import "../toggle/Toggle.scss";
import Dark from "../../img/dark.png";
import Light from "../../img/light.png";
import { ThemeContext } from "../../context";
import { useContext } from "react"

const Toggle = () => {

    const theme = useContext(ThemeContext);

    const handelClick = () => {
        
        theme.dispatch({type: "TOGGLE"});
    }

    return (

        <div className="toggle">
            <img src={Light} alt="" className="toggle-icon" />
            <img src={Dark} alt="" className="toggle-icon" />
            <div className="toggle-button" onClick={handelClick} style={{left: theme.state.darkMode ? 0 : 25}}></div>
        </div>
    );
};

export default Toggle;
