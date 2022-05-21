import * as React from "react";

const Select = (props) => {
    const classList = ["select"]
    if (props.className) {
        classList.push(props.className);
    }

    return (
        <label className="select__container">
            <select
                {...props}
                className={classList.join(" ")}
            >
                {props.children}
            </select>
            <svg className="select__arrow" width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 5L0.535898 0.5L7.4641 0.5L4 5Z" fill="#1E3240"/>
            </svg>
        </label>
    );
};

export default Select;
