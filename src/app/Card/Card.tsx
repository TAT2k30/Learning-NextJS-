'use client'
import { useEffect, useState } from 'react'
import './card.css'
import custom from "./custom.module.scss"

type Props = {
    setStyle: boolean
}

export default function Card(props: Props) {
    const [style, setStyle] = useState(false);
    useEffect(() => {
        setStyle(props.setStyle);
    }, [props.setStyle])
    return <div className={`card ${style ? custom.card : ""}`}>Card</div>
}