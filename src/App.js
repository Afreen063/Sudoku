import { useState } from "react";



function App() {
   const [array, setArray]=useState([
    [null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null]
   ]); 
   const [show, setShow] = useState(false)
   const handleInput=(e)=>{
        setShow(true);
        console.log(array)
   } 

   const handleChange=(row,col,event)=>{
      let copy=[...array];
      copy[row][col]=event.target.value;
      setArray(copy);
   }

  return (
    <div className="App">
     <h1 className="text-3xl">Sudoku Solver</h1>
     <div className="table">
     <table>
     <tbody>
         {
         array.map((row, rowIndex)=>{
          return (
            <tr key={rowIndex}>
              {
                row.map((col, colIndex)=>{
                //  console.log(colIndex);
                 if(colIndex==2||colIndex==5)
                 {
                 if(rowIndex==2||rowIndex==5)
                 {
                  return (
                    <td key={colIndex} ><input type="Number" className="griditem bottomline" maxLength={1} onChange={e=>handleChange(rowIndex,colIndex,e)}></input></td>
                  )
                 }
                 else{
                  return (
                    <td key={colIndex} ><input type="Number" className="griditem" maxLength={1} onChange={e=>handleChange(rowIndex,colIndex,e)}></input></td>
                  )
                 }
                 }
                  if(rowIndex==2||rowIndex==5)
                 {
                  return (
                    <td key={colIndex} ><input type="Number" className="liItem bottomline" maxLength={1} onChange={e=>handleChange(rowIndex,colIndex,e)}></input></td>
                  )
                 }
                 else
                  return (
                    <td key={colIndex}><input type="Number" className="liItem" maxLength={1} onChange={e=>handleChange(rowIndex,colIndex,e)}></input></td>
                  )
                })
              }      
            </tr>
          )
         })
         }
         </tbody>
     </table>
         </div>
         
         <button onClick={handleInput}>Solve</button>
    </div>
  );
}

export default App;
