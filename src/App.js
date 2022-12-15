import { useState } from "react";



function App() {
   const [array, setArray]=useState([
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0]
   ]); 
   const [show, setShow] = useState(false)
   const handleInput=(e)=>{
    const board = [...array];



   let RowPosibility = [] ;
   let presentRow=[];
   let gridPresent=[];
   let gridCol=[];
   function Possibility()/*this funtion create an array of all possible number. When ever it is called it will create
                            RowPossibilty=[1,2,3,4,5,6,7,8,9]*/
   {
       for(let row=0;row<board.length;row++)
       {
        RowPosibility[row]=row+1;
         }
   }
 // console.log(RowPosibility);

function Row()//this function will create an array of number which is present in the row
{
    
    for(let i=0;i<board.length;i++)
    {
        let r=[],count=0;
        for(let j=0;j<board.length;j++)
        {
          if(board[i][j]>0)
          {
              
              r[count++]=board[i][j];
          }
        }
        presentRow[i]=r;
    }
}


  function Colpossibility()//this function will create an array of number present in the column
{
  for(let row=0;row<board.length;row++)
  {
      let count=0;
      let presentCol=[];
      for(let col=0;col<board.length;col++)
      {
          if(board[col][row]>0)
          {
              presentCol[count++]=board[col][row];
              //console.log(presentCol);
          }
      }
      
      presentCol.sort(function(a,b){return a-b});
      gridCol[row]=presentCol;
      
  }
  //console.log(gridCol);y
}


 // console.log(gridCol);
 function Grid()//this function create an array of number which is present in 3*3 grid
 {
    let index=0;
     for(let row=0;row<board.length;row+=3)
     {
        
         for(let col=0;col<board.length;col+=3)
         {
             let count=0, grid=[];
             for(let i=0;i<3;i++)
             {
                 for(let j=0;j<3;j++)
                    {
                       if(board[row+i][col+j]>0) 
                       {
                           grid[count]=board[row+i][col+j];
                           count++;
                       }    
                    }
             }
             grid.sort(function(a,b){return a-b});
             gridPresent[index++]=grid;
         }
     }
    //console.log(gridPresent);
 }
 Possibility();
 Colpossibility();
 Grid();
 Row();
 function posssibiltyInRows()
 {
     let possibleNumber=[];
     let c=0,d=0,flag=0;
     while(flag===0)
     {
         let unique=0;
     for (let row=0;row<board.length;row+=3)
     {
         for(let col=0;col<board.length;col+=3)
         {
             let gp=gridPresent[c++];
            //console.log(RowPosibility);
             for(let m=0;m<3;m++)
             {
                RowPosibility=RowPosibility.filter(function(element){return  gp.indexOf(element)<0 ; });
                RowPosibility=RowPosibility.filter(function(element){return  (presentRow[(row+m)]).indexOf(element)<0 ; });
                 for(let n=0;n<3;n++)
                 {
                     if(board[row+m][col+n]==0)
                     {
                   possibleNumber = RowPosibility.filter(function(element){return  (gridCol[col+n]).indexOf(element)<0; });
                   // console.log(RowPosibility);
                  // console.log(possibleNumber);
                    if(possibleNumber.length==1)
                    {
                        board[row+m][col+n]=possibleNumber[0];
                        Grid();
                        Colpossibility();
                       Row();
                        unique=1;
                    }
                }
                    
                
                 }//end of column section
                 Possibility();
             }//end of row section
             
         }
     }
     c=0;
     if(unique!=1)
     flag=1;
    }
 }
 posssibiltyInRows();
 console.log(board);
    //  setArray(board);

      //  setShow(true);
       // console.log(array)
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
         
         <button onClick={handleInput}>Start</button>
    </div>
  );
}

export default App;
