  import React from 'react';
  import ReactDOM from "react-dom/client"
const parent = <h1 id="heading">Hello World with JSX</h1>
const Component =  () =>{
  return (
    <>
    <h1>Hellow World with React</h1>
    {parent}
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Component />);
