import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

export default async function MovieDetail({ params }) {
    const { movie } = params;

    const imagePath = "https://image.tmdb.org/t/p/original"

    const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`)
    const resp = await data.json();
    console.log(resp)
    return (
        <div>
            <h1 className='text-red-600 text-4xl font-extrabold text-center my-16'>Movie details</h1>
            <div>
                <h2 className='text-2xl'>{resp.title}</h2>
                <h2 className='text0lg'>{resp.release_date}</h2>
                <h2>Runtime: {resp.runtime} minutes</h2>
                <h2 className='text-sm bg-green-600 inline-block my-2 py-2 px-4 rounded'>{resp.status}</h2>
                <Image
                    width={800}
                    height={800}
                    alt={resp.title}
                    src={imagePath + resp.backdrop_path}
                    className='my-12 w-full'
                    priority
                />
                <p>{resp.overview}</p>
            </div>
            <Link href='/' className='text-xl bg-red-600 inline-block my-2 py-2 px-4 rounded'>Back</Link>
        </div>
    )
}
