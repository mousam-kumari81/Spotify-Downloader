import React from "react"
import { SlSocialSpotify } from "react-icons/sl";
import axios from "axios"
import { useState } from "react";

function App() {
  const [URL, setURL] = useState("");

  const handleURL = (e) => {
    e.preventDefault();
    setURL(e.target.value);
  };

  const downloadSong = async() => {
    setURL("")
    const options = {
      method: 'GET',
      url: 'https://spotify-downloader9.p.rapidapi.com/downloadSong',
      params: {
        songId: URL,
      },
      headers: {
        'x-rapidapi-key': import.meta.env.VITE_API_KEY,
        'x-rapidapi-host': 'spotify-downloader9.p.rapidapi.com'
      },
    };  
    
    try{
       const response =  await axios.request(options);
       //console.log(rspn.data.data.downloadlink)
       window.location.href = response.data.data.downloadLink;
    } catch (error) {
         console.log(error)
    }  
  };

  return (
     <div className="h-screen w-screen bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center flex-col gap-y-5">


        <div className="flex items-center justify-center
                  gap-x-2 text-xl font-bold">
           <SlSocialSpotify size={50}/>
           <p className="font-extrabold text-green-700 text-4xl drop-shadow-lg">Song Downloader</p>
        </div>

        <div className=" flex gap-x-2">
          <input type="url" className="h-10 w-[450px]
                       border-none outline-none px-5 rounded-lg bg-gradient-to-r from-teal-200 to-lime-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
             onChange={handleURL} value={URL} />
          <button className="h-10 px-2 rounded-lg font-bold bg-gradient-to-r from-teal-400 to-lime-500 shadow-lg transform hover:scale-105 transition duration-300"
         
             onClick={downloadSong}>Downloader</button>
        </div>

     
  
     </div>
  )
}

export default App