import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
export default function Movie({ title, poster_path, release_date, id }) {
    const imagePath = "https://image.tmdb.org/t/p/original"
    return (
        <div>
            <h1>{title}</h1>
            <Link href={`/${id}`}>
                <Image src={imagePath + poster_path} alt={title} width={500}height={500} />
            </Link>
        </div>
    )
}
