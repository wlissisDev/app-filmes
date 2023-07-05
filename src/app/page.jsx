import Movie from "./components/Movie";

export default async function Home() {
  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
  const resp = await data.json();
  return (
    <div>
      <h1 className='text-red-600 text-4xl font-extrabold text-center my-16'>App Filmes</h1>
      <div className="grid gap-16 grid-cols-fluid">
        {
          resp.results.map(movie => (
            <Movie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              release_date={movie.release_date}
            />

          ))
        }
      </div>
    </div>
  )
}
