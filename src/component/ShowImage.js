import React, {memo} from "react";

// const ShowImage = memo(({image}) => {
//     console.log("ShowImageShowImageShowImageShowImage")

//     if(!image){
//         return (
//             <div className="show_image">
//                 <p>No Image Found</p>
//             </div>
//         )
//     } else {
//         return (
//             <div className="show_image" style={{height: '160px'}}>
//                 <img src={image} width='360' height="240"/>
//             </div>
//         )
//     }
    
// })

const ShowImage = ({image}) => {
    console.log("ShowImageShowImageShowImageShowImage")

    if(!image){
        return (
            <div className="show_image">
                <p>No Image Found</p>
            </div>
        )
    } else {
        return (
            <div className="show_image" style={{height: '160px'}}>
                <img src={image} width='360' height="240"/>
            </div>
        )
    }
    
}

export default memo(ShowImage)
