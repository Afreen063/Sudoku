import { useState } from "react";



function App() {
   const [array, setArray]=useState([[1,2,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]); 
   const [show, setShow] = useState(false)
   const handleInput=(e)=>{
        
   } 

   const handleClick=()=>{
       setShow(true)
   }

  return (
    <div className="App">
     <h1 className="text-3xl">Sudoku Solver</h1>
     <div className="table">
     <tbody>
         {
         [0,3,6].map((i)=>{
          return (
            <tr>
              {
                [0,3,6].map((j)=>{
                  return (
                    <td className="liItem">{array[i][j]}</td>
                  )
                })
              }      
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
