import { useState } from "react";



function App() {
   const [array, setArray]=useState([0,0,0,0,0,0,0,0,0]); 
   const [show, setShow] = useState(false)
   const handleInput=(e)=>{
        
   } 

   const handleClick=()=>{
       setShow(true)
   }

  return (
    <div className="App">
     <h1 className="text-3xl">Sudoku Solver</h1>
     <div className="">
     <tbody>
         {
          array.map((i)=>{
              return (
                <tr key={i}>
         { array.map((i)=>{
            return (
              <td className="liItem"></td>
            )
          })}
          </tr>
              )
          })
         }
         </tbody>
         </div>
         <button onClick={handleClick}>Solve</button>
    </div>
  );
}

export default App;
