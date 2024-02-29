import React, {useState, forwardRef, useImperativeHandle} from "react";

const ShowDetails = forwardRef(({category, title, description, price, id, setId}, ref) => {

    const [showBG, setShowBG] = useState(false)

    const handleIdChange = (e) => {
        setId(e.target.value)
    }

    useImperativeHandle(ref, () => ({
        type : 'student',
        name: 'ABC',
        handleBGChange: (e) => {
            setShowBG(prev => !prev)
        },
        justConsole: (e) => {
            console.log("ABC")
        }
    }), []);

    
    
    return (
        <>
            <div className="show_details" style={{display: 'flex', flexDirection: 'column', backgroundColor:  showBG && 'yellow'}}>
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
                <div>
                    <span>ID : {id}</span>
                </div>
                <div>
                    <input label={'ID'} type={"text"} onChange={handleIdChange}/>
                </div>
            </div>
        </>
    )
})

export default ShowDetails