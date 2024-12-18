import React from "react";

export const Dropdown = ({ options, onSelect}) =>{
    return(
        <select onChange={(e) => onSelect(e.target.value)}>
            {options.map((option, index)=>(
                <option key={index} value={index}>
                    {option.name}
                </option>
            ))}
        </select>
    );
};

