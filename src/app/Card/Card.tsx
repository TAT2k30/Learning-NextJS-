'use client'
import { useEffect, useState } from 'react'
import './card.css'
import custom from "./custom.module.scss"
import clsx from 'clsx'

type Props = {
    setStyle: boolean
}

export default function Card(props: Props) {
    const [style, setStyle] = useState(false);
    useEffect(() => {
        setStyle(props.setStyle);
    }, [props.setStyle])
    return (
        <div className={clsx('card', {
            [custom.card]: style
        })}>
            <span className='oswald-thin'>This is a card</span>
        </div>
    )
}