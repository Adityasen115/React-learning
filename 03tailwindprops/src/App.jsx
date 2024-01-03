import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

let url = 'https://api.github.com/users/Adityasen115';
let data;
let img;
async function urlData(geturl) {
  try {
      data = await fetch(geturl);
      const jsonData = await data.json();
      img = jsonData.avatar_url;
  } catch (error) {
      console.log(error);
  }
}


urlData(url);


function App() {
  let myObj = {
    name: 'aditya',
    age: 21
  };

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
    <Card me='Aditya' someThing={myObj} Url={img}/>
    </>
  )
}

export default App
