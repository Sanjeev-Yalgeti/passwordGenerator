import { useState,useCallback,useEffect,useRef} from 'react'
function PassGen(){
    //States declared
    const [password, setPassword] = useState("")
    const [length,setLength]=useState(8)
    const [numberAllowed,setNumberAllowed]=useState(false)
    const [charAllowed,setCharAllowed]=useState(false)
    //So that password Gen runs everytime the dependenceies have changed
    const passwordGenerator=useCallback(()=>
    {
        let pass=""
        let str="QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"
        let num="0123456789"
        let special="!@#$%^&*?"
        if(numberAllowed)str=str+num
        if(charAllowed) str=str+special
        for(let i=1;i<=length;i++)
        {
            let char = Math.floor(Math.random() * str.length + 1)
            pass+=str.charAt(char)
        }
        setPassword(pass)
    },[length,numberAllowed,charAllowed,setPassword])
    //Copying to CLipboard
    const copyToClipboard=useCallback(()=>{

    },[password])
    useEffect(()=>
    {
        passwordGenerator()
    },[length,numberAllowed,charAllowed,passwordGenerator])
    return (
        <div className="w-full h-screen bg-gray-500 flex justify-center ">
        <h1 className="font-bold text-4xl text-center font-serif ">Password Generator</h1>
        <div id="container"
        className="fixed flex flex-wrap p-5 w-[50%] justify-center gap-20 rounded-2xl shadow-xl m-5 top-20 outline-none bg-orange-300">
            <div className="w-full" id="Top Section"> 
            <input type="text" 
                    value={password} 
                    className='rounded-s-xl outline-none h-full w-[90%] px-2' 
                    readOnly>
            </input>
            <button onClick={copyToClipboard} 
            className="rounded-e-xl bg-blue-500 w-[10%] text-center text-white p-2 ">Copy</button>
            </div>
            <div id="Input Area" className="flex justify-between">
                <input type="range" 
                    min={8} max={20} value={length} 
                    onChange={(e)=>{setLength(e.target.value)}} 
                    className="cursor-pointer">
                </input>
                <label >length: {length}</label>
                <input type="checkbox"
                    id="numberInput" 
                    defaultChecked={numberAllowed} 
                    onChange={()=>{setNumberAllowed((prev)=>!prev)}} >
                </input>
                <label htmlFor="numberInput">Numbers</label>
                <input type="checkbox" 
                    defaultChecked={charAllowed}  
                    id="charInput" 
                    onChange={()=>
                        {
                        setCharAllowed((prev)=>!prev)
                        }
                    }>
                </input>
                <label htmlFor="charInput">Special Char</label>
            </div>
        </div>
        </div>
    )
}
export default PassGen
