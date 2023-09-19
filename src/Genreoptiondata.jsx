import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

function Genreoptiondata() {
    const [titleall, settitleall] = useState([])
    let a = 'https://image.tmdb.org/t/p/original'

    useEffect(() => {
        function callmovie() {
            axios
                .get("https://api.themoviedb.org/3/discover/movie?&api_key=8125db8f67d23da1d30f6063b1b794b8&with_genres=28")
                .then((data) => {
                    settitleall(data.data.results)
                })
        } callmovie()
    }, [])

  return (
    <>
    <div className="maindiv">
        {
            titleall.map((titles) => {
                return <div className='infobox'>
                    <div className="imgdiv">
                        <img src={a + titles.poster_path}></img>
                    </div>
                    <h1>{titles.title}</h1>

                </div>
            })
        }
    </div>


</>

  )
}

export default Genreoptiondata