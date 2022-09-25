import * as React from
"https://cdn.skypack.dev/react@17.0.1";
import * as ReactDOM from
"https://cdn.skypack.dev/react-dom@17.0.1";

import './App.css';


function App() {
  return (
    <>
  <h1 className="heading">Reviews of our Happy Customers !!</h1>

   <div className="wrapper">
     <Card 
    // img="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80" */}
    title="Parakh P"
    desc=" One of the finest automobile designs ever found with such ease.
    Everything about this website is just up to the mark ,the service ,the speed ,the quality ,the lovely people.
    This project should be applauded!!! "/>

 <Card 
// img="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" */}
    title="Devang M"
    desc=" One of the finest automobile designs ever found with such ease.
    Everything about this website is just up to the mark ,the service ,the speed ,the quality ,the lovely people.
    This project should be applauded!!! "/>

 <Card 
// img="https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80" */}
    title="Aman P"
    desc=" One of the finest automobile designs ever found with such ease.
    Everything about this website is just up to the mark ,the service ,the speed ,the quality ,the lovely people.
    This project should be applauded!!! "/>

 <Card 
// img="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=399&q=80" */
    title="Sahil S"
    desc=" One of the finest automobile designs ever found with such ease.
    Everything about this website is just up to the mark ,the service ,the speed ,the quality ,the lovely people.
    This project should be applauded!!! "/>
   

   </div>
   </>
  );}

  function Card(props){
    return(
      <div className="card">
        <div className="card_body">
          {/* <img src={props.img} class="card_img"  className="card_img"/> */}
          <h2 className="card_title">{props.title}</h2>
          <p classNmae="card_des">
           {props.desc}
          

          </p>
        </div>
        <button classNmae="card_btn">Stars

        </button>
      </div>
    )
  }

ReactDOM.render(<App />, document.getElementById("root"))
export default App;
