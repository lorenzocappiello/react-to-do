import React from "react";

function CurrentDate() {

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    
    return <div className="current-date">Current Date: {date}/{month}/{year}</div>
}

export default CurrentDate; 