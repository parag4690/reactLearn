/*

<div id = "parent">
  <div id = "child">
     <h1> i am h1 tag </h1>
  </div>
</div>


*/

const parent = React.createElement(
    // first argument -> which tag
    "div" , 
    // 2nd argument -> attributes
    {id : "parent"} , 
    // third argument -> children
    React.createElement( 
        "div" , 
        {id:"child"} ,
        React.createElement("h1" , {} , "i am h1 tag")
    )
);
console.log(parent); // it will return object not element

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);