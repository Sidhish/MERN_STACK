import React,{useState} from 'react'

const Listner = () => {
    const [change, setChange] = useState(false);
    console.log("Listner component Rendered../");
    window.addEventListener("resize",() => {
        console.log("Window Resize");
    });
  return (
    <main>
    <div>
        Listner
    </div>
    <button onClick={() => setChange(prev => !prev)}>Add</button>
    </main>
  );
}

export default Listner
