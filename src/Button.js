import React from "react";

const Button = (props) => {
    const {buttonName, color, textColor, borderRadius, border, boxShadow} = props;

    return (
        <button style={{
            backgroundColor: color,
            color: textColor,
            padding: "10px 20px",
            borderRadius: borderRadius,
            boxShadow: boxShadow,
            border: border,
            fontWeight: "600",
            fontSize: "1rem"
        }}>{buttonName}</button>
    )
}

export default Button;