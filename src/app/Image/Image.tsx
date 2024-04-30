'use client'
import { useEffect, useState } from 'react'
import './image.css'
import Image from 'next/image';
import custom from "./custom.module.scss"
import clsx from 'clsx'
import NBALogo from "../../../public/images/OIP.jpg";
type Props = {
    setStyle: boolean
}

export default function Images(props: Props) {
    const [style, setStyle] = useState(false);
    useEffect(() => {
        setStyle(props.setStyle);
    }, [props.setStyle])
    return (
        <div className={clsx('image', {
            [custom.image]: style
        })}>
            <Image
                src={NBALogo}
                height={200}
                width={300}
                alt='nba logo'
            />
        </div>
    )
}