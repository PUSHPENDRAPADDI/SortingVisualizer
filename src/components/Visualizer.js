import React from "react";
import "./Visualizer.css";

const Visualizer = ({ array }) => {
    return (
        <div className="array-container">
            {array.map((value, idx) => (
                <div
                    className="bar"
                    key={idx}
                    style={{ height: `${value}px`, width: '35px' }}
                >{value}</div>

            ))}
        </div>
    );
};

export default Visualizer;
