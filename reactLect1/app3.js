/*


<div id = "parent">
  <div id = "child">
     <h1> i am h1 tag </h1>
     <h2> i am h2 tag </h2>
  </div>
   <div id = "child2">
     <h1> i am h1 tag </h1>
     <h2> i am h2 tag </h2>
  </div>
</div>


 */

const parent = React.createElement(
    "div" , 
    {id : "parent"} , 
    [
        React.createElement(
            "div" , 
            {id : "child1"},
            [React.createElement("h1" , {} , "i am h1 tag") , React.createElement("h2" , {} , "i am h2 , tag")]
        ) , 
        React.createElement(
            "div" , 
            {id : "child2"} , 
            [React.createElement("h1" , {} , "i am h1 tag") , React.createElement("h2" , {} , "i am h2 , tag")]
        )
    ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

// you can clearly see that how messy the code is ? 
// to solve this problem we will write our js code in JSX , allow write html directly into js , it is extension of es6
// we just did this just to know that we can write react code without jsx


/**
 
// will 

 */
