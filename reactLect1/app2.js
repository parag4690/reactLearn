//  add siblings

/*


<div id = "parent">
  <div id = "child">
     <h1> i am h1 tag </h1>
     <h2> i am h2 tag </h2>
  </div>
</div>


*/

const parent = React.createElement(
    "div" , 
    {id : "parent"} , 
    React.createElement(
        "div" , 
        {id : "child"} , 
        // for siblings use array
        [React.createElement("h1" , {} , "i am h1 tag") ,
         React.createElement("h2" , {} , "i am h2 tag")]
    )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

// it will give me this error -> Warning: Each child in a list should have a unique "key" prop.