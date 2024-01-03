import { useState, useCallback, useEffect, useRef} from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password,setPassword] = useState("");
  const passwordRef = useRef(null);

  const PasswordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(number) str+="0123456789";
    if(character)str+="!@#$%^&*_~`";

    for (let i = 0; i < length; i++) {
      pass += str.charAt(Math.round(Math.random()*str.length));
      
    }
    setPassword(pass);
  },[length,number,character,setPassword])

  const copyToClipboard = useCallback(() => {
    passwordRef.current.select();
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(()=>{
    PasswordGenerator()
  },[length,number,character, PasswordGenerator])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-center text-white'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='passsword' readOnly ref={passwordRef}/>
        <button className='bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyToClipboard}>Copy</button>
      </div>

      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range" min={8} max={40} value={length} className='cursor-pointer' onChange={(e)=> {setLength(e.target.value)}}/>
          <label >Length: {length}</label>
          <input type="checkbox" defaultChecked = {number} id='numberInput' className='ml-2' onChange={() => {setNumber((prev)  => !prev)}}/>
          <label >Number</label>
          <input type="checkbox" defaultChecked = {character} id='characterInput' className='ml-2' onChange={() => {setCharacter((prev)  => !prev)}}/>
          <label >Character</label>

        </div>
      </div>
    </div>
    </>
  )
}

export default App
