import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//1.one way-------------------------
// function App() {
//   const [count, setCount] = useState(0)// const [a,b]=[1,2] in js where a stores 1 and b stores 2
//   function buttonfunction(){

//     setCount(count+1); 
//   }
//   return (
//     <>
//       <div>
//        <button onClick={buttonfunction}>Counter {count}</button>
//       </div>

//     </>
//   )
// }

// }
//2.second way-------------------------
function App() {
  const [count, setCount] = useState(0)// const [a,b]=[1,2] in js where a stores 1 and b stores 2

  return (
      <div>
       <CustomButton count={count} setCount={setCount} ></CustomButton>
      </div>
  )
}

function CustomButton(props){
  function buttonfunction(){

  props.setCount(props.count+1); 
  }

  return <button onClick={buttonfunction}>
    Counter {props.count}
  </button>

  
} 





export default App
