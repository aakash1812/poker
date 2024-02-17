import React, { useEffect, useState } from 'react'
import './style.css'
import ShowImage from './ShowImage'
import ShowDetails from './ShowDetails'

const Card = () => {
    const [details, setDetails] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/2').then(res => res.json()).then((res) => {
            console.log(res)
            setDetails(res)
            setLoading(false)
        })
    }, [])

    if(loading) return null 

    let borderStyle = ['card']
    if(details.rating.rate > 4) borderStyle.push('rating4')
    else if(details.rating.rate > 3) borderStyle.push('rating3')

    return(
        <>
            <div className={borderStyle.join(' ')} >
                <ShowImage {...details} />
                <ShowDetails {...details} />
            </div>
        </>
    )
}

export default Card