import React from "react";

const ShowImage = ({image}) => {

    if(!image){
        return (
            <div className="show_image">
                <p>No Image Found</p>
            </div>
        )
    } else {
        return (
            <div className="show_image" style={{height: '160px'}}>
                <img src={image} width='360' height="auto"/>
            </div>
        )
    }
    
}

export default ShowImage
