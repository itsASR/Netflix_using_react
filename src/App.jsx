// import { useEffect, useState } from 'react'
// import './Appnetflix.css'
// import axios from 'axios'
import Genre from './Genre'
import Alldata from './Alldata'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Genreoptiondata from './Genreoptiondata';
// import Popup from './Popup';


function App() {
  

  
  return (
    <>
    <div className="superdiv">
      <BrowserRouter>
      <Genre></Genre>
          <Routes>
            {/* <Route path='pop' element = {<Popup />}></Route> */}
            <Route path="/" element={<Alldata />}></Route>
            <Route path="g" element={<Genreoptiondata />}></Route>

          </Routes>
        </BrowserRouter>

      
      </div>






    </>
  )
}

export default App
