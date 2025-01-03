  import React from 'react';
  import ReactDOM from "react-dom"
const parent = React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child1"}, [React.createElement("h1",{}, "I am H1 Tag"), React.createElement("h2",{}, "I am H2 Tag")]), 
    React.createElement("div",{id:"child2"}, [React.createElement("h3",{}, "I am H3 Tag"), React.createElement("h4",{}, "I am H4 Tag")])
    ])
   
const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent);
