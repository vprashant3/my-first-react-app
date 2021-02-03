import React, {useState, userEffect} from "react";
import {Link} from "react-router-dom";

const initMatrix = [];


function HomePage() {

  const [matrix, setMatrix]  = useState(initMatrix);
  const [matrixSize, setMatrixSize] = useState(3);
  const [currentPlayer, setCurrentPlayer] = useState("O");

  React.useEffect(() => {
    const row =  new Array(matrixSize).fill(null);
    const tempMatrix = [];
    for(let i = 0; i < matrixSize; i++) {
      tempMatrix.push([...row]);
    }
  },[]);

  return (
    <div>
      <h1>Tic Tac Home</h1>
      <h3><Link to="/" className='title'>Go To Home</Link></h3>
      <div>
        {
          matrix.map((val,c) =>(
            <div>
            {
              val.map(() => (
                <div>hi</div>  
                
              ))
            }
            </div>
          ))
        }
      </div>
      </div>
  );
}

export default HomePage;
