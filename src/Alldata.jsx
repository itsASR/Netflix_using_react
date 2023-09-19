import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';


function Alldata() {
    const [titleall, settitleall] = useState([])
    let a = 'https://image.tmdb.org/t/p/original'

    useEffect(() => {
        function callmovie() {
            axios
                // https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=8125db8f67d23da1d30f6063b1b794b8
                .get("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=8125db8f67d23da1d30f6063b1b794b8")
                .then((data) => {
                    settitleall(data.data.results)
                    // console.log(a+data.data.results[0].poster_path)
                    //   console.log(data.data.results[0])
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
                                <Link to=''><img src={a + titles.poster_path}></img></Link>
                            </div>
                            <h1>{titles.title}</h1>

                        </div>
                    })
                }
            </div>


        </>
    )
}

export default Alldata