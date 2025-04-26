import logo from './logo.svg';
import './App.css';
import Header from './componanets/header';
import Ipout from './componanets/Ipout';
import { useState } from 'react';

function App() {
  let [code ,setcode] = useState("")
  let [city, setcity] = useState(" ")
  let [data, setdata] = useState( )

  let getdata = (event) => {


    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=00551e49e128dde56855cba1d07aee78&units=metric`)
      .then((res) => res.json())
      .then((finale) => {
          console.log(finale);
          
              if(finale.cod === "404"){
                setdata(undefined)
              }else{
                setdata(finale)
              }
            
   
      })

    event.preventDefault()
    setcity(" ")

  }
  return (
    <div className="App bg-[#222222] h-[100vh] ">
      <Header />
      <Ipout getdata={getdata} city={city} setcity={setcity} />
      <div className='w-[200px] h-[ 100vh] m-auto bg-slate-500 rounded-md' >
     {data !== undefined
     ?
             <>
             <h1 className='font-bold text-black text-xl m-5' >{data.name} <br/><span className='text-sm m-3'>{data.sys.country}</span></h1>
             <img className='m-3' src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`}/>
             
              <h2 className='text-center'>{data.main.temp}°C <br/>{data.weather[0].description}</h2>
             </>
             :
            "no data"
        }
      </div>
    </div>
  );
}

export default App;

