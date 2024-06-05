import { useState , useCallback,useEffect,useRef} from 'react'
import './App.css'

function App() {

    const [len,setLength] = useState(8);  // for lenght
    const [numberAllowed,setNumberAllowed] = useState(false);

    const [charAllowed,setCharAllowed] = useState(false);

    const [password, setPassword] = useState("");


    // useRef hook:
    const passWordRef = useRef(null)

   const copyPassToClip =useCallback(
       ()=>{
           // using password ref :
           passWordRef.current?.select()  // to show user that this value has been selected
           // here ? means we are selection value optionally may be that value is null then we need not to slect
           // we can further more otptimisd
         //  passWordRef.current?.setSelectionRange(0,0)  Our value will be selected in range

           window.navigator.clipboard.writeText(password);
       },[password]
   )
    const passWordGen= useCallback(()=>{

        // used as memorization -cache
        // we are optimiszing our function

        let pass=""
        let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

        if(numberAllowed) str+="0123456789";
        if(charAllowed)str+="!@#$^&*-+[]"

        for(let i =1; i<=len; i++){

            let char = Math.floor(Math.random()*str.length+1)
            // here we get arrays index value not actual char
            pass += str.charAt(char)

        }
       setPassword(pass)


    },[len,numberAllowed,charAllowed,setPassword]);

    useEffect(() => {
       passWordGen()

    }, [len,numberAllowed,charAllowed,setPassword]);

    // use effect is use to re run if there is any change in len.numberAllowed....
  return (
    <>


        <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-1 text-orange-400 text-center m-5 bg-gray-500 ">

            <div className="text-white text-center my-2">Password generator</div>
            {/*for input */}
           <div  className="flex shadow rounded-lg overflow-hidden mb-4 m-2">
                  <input type="text"
                         value={password}
                         className="outline-none w-full py-1 px-3 "
                         placeholder="password"
                         readOnly
                         ref={passWordRef}


                  />
               <button
                   onClick={copyPassToClip}
                   className= "outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0">
                   Copy</button>
           </div>

            {/* for other inout*/}

            <div className="flex text-sm gap-x-2">
                <div className="flex items-center gap-x-1">
                    <input type="range"
                           min={6}
                           max={100}
                           value={len}
                           className="cursor-pointer"
                           onChange={(e) => setLength(parseInt(e.target.value))}
                    />
                    <label>length:{len}</label>
                </div>
                {/*for check box*/}
                <div className="flex text-sm gap-x-1">
                    <div className="flex items-center gap-x-1">
                        <input type="checkbox"

                               defaultChecked={numberAllowed}
                               id="numberInput"
                               onChange={() => {
                                   setNumberAllowed((prev) => !prev);
                               }}
                        />
                        <label htmlFor="numberInput">Numbers</label>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <input type="checkbox"
                               defaultChecked={charAllowed}
                               id="numberChar"
                               onChange={() => {
                                   setCharAllowed((prev) => !prev);
                               }}
                        />
                        <label htmlFor="numberChar">character</label>
                    </div>
                </div>
            </div>

        </div>
    </>
  )
}

export default App
