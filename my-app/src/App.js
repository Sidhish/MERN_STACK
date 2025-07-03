// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import "./App.css";
// import React from "react";

// import Greet from "./components/Greet";

// function App() {
//   const name = "Sidhish";
//   return (
//     <div className="App">
//       <Greet studentName={name} college={"Lpu"} branch={"CSE"} />
//     </div>
//   );
// }

// export default App;

// import "./App.css";
// import React from "react";

// import Counter from "./components/counter";

// function App() {
//   const name = "Sidhish";
//   return (
//     <div className="App">
//       <Counter />
//     </div>
//   );
// }

// export default App;

// import React, { useState } from 'react';
// import Greet from './components/Greet.js';

// function Conditional() {
//     const [showGreet, setShowGreet] = useState(false);

//     return (
//         <main>
//             {!showGreet && (
//                 <button onClick={() => setShowGreet(true)}>Show Greet</button>
//             )}
//             {showGreet && <Greet />}
//         </main>
//     );
// }

// export default Conditional;

 
// import "./App.css";
// import React, { use, useState } from "react";

// import Greet, { Greet1 } from "./components/Greet";
// import Counter from "./components/counter.js";
// import Timer from "./components/Timer";
// import Conditional from "./components/conditional.js";

// function App() {
//   const [is, setIs] = useState(false);

//   return (
//     <div className="App">
//       {/* <Greet studentName={"Munit"} college={"Lpu"} branch={"CSE"} /> */}
//       {/* <Counter /> */}
//       {/* <Timer /> */}

//       <Conditional handleParent={(state) => setIs(state)} />
//       {is ? <h1>Hello LPU</h1> : <h3>Hello students</h3>}
//     </div>
//   );
// }

// export default App;


// import "./App.css";
// import React from "react";
// import Form from "./components/Form";
// function App(){
//   return (
//     <div className="App">
//       <Form />
//     </div>
//   );
// }
// export default App;
// import "./App.css";
// import React from "react";
// import Uncontrolled from "./components/uncontrolled";
// function App(){
//   return (
//     <div className="App">
//       <Uncontrolled />
//     </div>
//   );
// }
// export default App;

// import "./App.css";
// import React from "react";
// import List from "./components/lifecycle/ClassComponent";
// function App(){
//   return (
//     <div className="App">
//       <List />
//     </div>
//   );
// }
// export default App;
// import "./App.css";
// import React from "react";
// import List from "./components/lifecycle/Listner";
// function App(){
//   return (
//     <div className="App">
//       <List />
//     </div>
//   );
// }
// export default App;
// import "./App.css";
// import React from "react";
// import List from "./components/lifecycle/CounterWithHook";
// function App(){
//   return (
//     <div className="App">
//       <List />
//     </div>
//   );
// }
// export default App;
// import "./App.css";
// import React from "react";
// import List from "./components/lifecycle/UserSearch";
// function App(){
//   return (
//     <div className="App">
//       <List />
//     </div>
//   );
// }
// export default App;
// import "./App.css";
// import React, {useState}from "react";
// import List from "./components/lifecycle/TimeWithEffect";
// import TimeWithEffect from "./components/lifecycle/TimeWithEffect";
// import { useState } from "react";
// function App(){
//   const [is,set] = useState();
//   return (
//     <div className="App">
//       {/* <List /> */}
//       {is && <TimeWithEffect/>}
//       <button onClick={()=> StyleSheetList((prev) => !prev)}>Update</button>
//     </div>
//   );
// }
// export default App;

// import React from 'react';
// import CheatingDetection from './components/lifecycle/cheating';

// const App = () => {
//   return (
//     <div>
//       <CheatingDetection />
//     </div>
//   );
// };

// export default App;
import React from 'react';
// import CheatingDetection from './components/lifecycle/StopWatch';
import Stopwatch from './components/lifecycle/StopWatch';

const App = () => {
  return (
    <div>
      <Stopwatch />
    </div>
  );
};

export default App;
