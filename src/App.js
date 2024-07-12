//U05721483
import React from "react";
import taskgenerator from "./taskgenerator.js";
import fancytext from "./fancytext.js";
import'.app.css'

export default App () => {
  return(
  <div className="App">
  <header classname="App-Header">
  <fancytext title={'Task Managment and Motivation Application'}/>
  </header>
  <main>
  <taskgenerator/>
  </main>
  <footer>
  <p> Sonoma Stea. 2024</p>
  </footer>
 
 </div>
  );
}