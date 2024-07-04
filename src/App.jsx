
import React, {useState} from 'react';    /* CGPT suggestion */

function App() {
  const [color, setColor] = useState("lavender")

  return (
    <div 
    className="w-full h-screen duration-200" 
    style={{backgroundColor : color}}> 
    
    {/* CGPT suggestion: use {{}} for inline style */}

      <div 
      className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">

        <div 
        className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl ">


        {/* //Mistake -----> Instead of rounded-3xl by mistake wrote 33xl */}

        
        <button
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
        style={{backgroundColor:"red"}}
        onClick={() => setColor("red")}>       {/* CGPT */}

        Red
        
        </button>

        <button
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
        style={{backgroundColor:"green"}}
        onClick={() => setColor("green")}>       {/* CGPT */}

        Green

        </button>

        <button
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
        style={{backgroundColor:"blue"}}
        onClick={() => setColor("blue")}>       {/* CGPT */}

        Blue

        </button>

        <button
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
        style={{backgroundColor:"olive"}}
        onClick={() => setColor("olive")}>       {/* CGPT */}

        Olive

        </button>

        <button
        className="outline-none px-4 py-1 rounded-full text-black shadow-lg" 
        style={{backgroundColor:"yellow"}}
        onClick={() => setColor("yellow")}>       {/* CGPT */}

        Yellow

        </button>

        <button
        className="outline-none px-4 py-1 rounded-full text-black shadow-lg" 
        style={{backgroundColor:"pink"}}
        onClick={() => setColor("pink")}>       {/* CGPT */}

        Pink

        </button>

        <button
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
        style={{backgroundColor:"Purple"}}
        onClick={() => setColor("Purple")}>       {/* CGPT */}

        Purple

        </button>

        <button
        className="outline-none px-4 py-1 rounded-full text-black shadow-lg" 
        style={{backgroundColor:"Lavender"}}
        onClick={() => setColor("lavender")}>       {/* CGPT */}

        Lavender

        </button>

        <button
        className="outline-none px-4 py-1 rounded-full text-black shadow-lg" 
        style={{backgroundColor:"white"}}
        onClick={() => setColor("white")}>       {/* CGPT */}

        White

        </button>

        <button
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
        style={{backgroundColor:"black"}}
        onClick={() => setColor("black")}>       {/* CGPT */}

        Black

        </button>

        </div>

      </div>

    </div>
  )
}

export default App


//Changed text color for Yellow Pink Lavender White as Black - For more Visibility

/* Learning ------> */

//* The syntax issue seems to be related to how the comments are written within JSX. JSX does not support single-line comments (//) within elements. Instead, use block comments ({/* comment */)} */


// Div ke bahar --> // or /**/ 
// Div ke andar --> {/* comment */)            


