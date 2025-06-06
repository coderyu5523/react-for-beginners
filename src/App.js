import {useState, useEffect} from "react";



function App() {
  const [toDo,setToDo] = useState("");
  const [toDos,setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(toDo);
    if(toDo === ""){
      return ;
    }
    setToDo("");
    setToDos(currentArray => [toDo,...currentArray] );

  };
  console.log(toDos);
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input 
        onChange={onChange} 
        value={toDo} 
        type="text" 
        placeholder="Write youre to do..." />
        <button>Add ToDo</button>
      </form>
  
    </div>
  );
}

export default App;
