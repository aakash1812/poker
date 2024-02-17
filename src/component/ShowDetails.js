import React from "react";

const ShowDetails = ({ category, title, description, price }) => {
    return (
        <>
            <div className="show_details" style={{display: 'flex', flexDirection: 'column'}}>
                <div style={{float: "left"}}>
                    <p>{title}</p>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <span>Price : AED {price} </span>
                    <span>{category}</span>
                </div>
                <div className="item_description">
                    <p>{description}</p>
                </div>
            </div>
        </>
    )
}

export default ShowDetails