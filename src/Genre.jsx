import React, {useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom';

function Genre() {
    const [genresall, setgenresall] = useState([])





    useEffect(() =>{function callgenre() {
        axios
        // https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=8125db8f67d23da1d30f6063b1b794b8
            .get("https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=8125db8f67d23da1d30f6063b1b794b8")
            .then((data) => {
                setgenresall(data.data.genres)
                console.log(data.data.genres[5].name)
              
            })
    } callgenre()
    }, [])
      



  return (
    <>
    <div className="listdiv">
        <Link to= '/'><h1>NETFLIX</h1></Link>
        

    <div className="genrelistdiv">
        {
        genresall.map((allgenrelist) =>{
            return <div className="listviewmaingenre">
                {/* <a href=''>{allgenrelist.name}</a> */}
                {/* <Link>{allgenrelist.name}</Link> */}
                <Link to= 'g'><span>{allgenrelist.name}</span></Link>

                
            </div>
        })
        }
        
    </div>
    </div>
    
    
    </>
  )
}

export default Genre



{/* <div className="listdiv">
        <h1>NETFLIX</h1>
        <Genre></Genre>
      </div> */}