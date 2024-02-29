import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import './style.css'
import ShowImage from './ShowImage'
import ShowDetails from './ShowDetails'

const Card = () => {
    const [details, setDetails] = useState('')
    const [loading, setLoading] = useState(true)
    const [id, setId] = useState(1)
    const [memoValue, setMemoValue] = useState(0)
    const [counter, setCounter] = useState(0)

    const childRef = useRef()

    let obj = {
        name: 'ABC', 
        location : {
            city: 'Noida', 
            address : {
                lane: 'indrapuram', 
                hno: '1234567890'
            }
        }
    }

    let {name, location: {city, address: {lane, hno:housenumber}}} = obj
    console.log(lane)
    console.log(housenumber)

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json()
            .then(res => {
                setDetails(res)
                setLoading(false)
            }).catch(err => {
                setLoading(false)
                setDetails('')
            }))
    }, [id])


    const changeMemoValue = () => {
        for (let i=0; i<=10; i++){
            console.log("i - ", i)
            setMemoValue(i)
        }
    }

    const num = useMemo(() => {
        let x = 0
        for(let i=0; i<=100; i++){
            x = i
        console.log("XXX = ", x)

        }
        return x
    }, [memoValue])

    if(loading) return null 

    console.log("memoValue = ", memoValue)
    let borderStyle = ['card']
    if(details?.rating?.rate > 4) borderStyle?.push('rating4')
    else if(details?.rating?.rate > 3) borderStyle?.push('rating3')

    return(
        <>
            <div className={borderStyle.join(' ')} >
                <ShowImage {...details} />
                <ShowDetails ref={childRef} id={id} setId={setId} {...details} />
                <p>Memo value - {memoValue}</p>
                <div>
                    <button type='button' onClick={(e) => childRef.current.handleBGChange(e)}>Change BG</button>
                </div>
                <div>
                    <button type='button' onClick={(e) => changeMemoValue()}>Change Memo Value</button>
                </div>
                <div>
                    <span>Number = {num}</span>
                    <button type='button' onClick={(e) => setCounter(prev => prev + 1)}>Counter - {counter}</button>
                </div>
            </div>
        </>
    )
}

export default Card