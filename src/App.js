import {useState, useEffect} from "react";


function App() {
  const [counter,setValue] = useState(0);
  const [keyword,setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev +1);
  const onChange = (event) => setKeyword(event.target.value);
  
  useEffect(()=>{
    console.log("i run only once");
   },[]); // []가 비어있으면 아무것도 지켜볼게 없기 때문에 한 번만 실행됨.
   useEffect(()=>{
    console.log("i run when 'keyword' changes")
    },[keyword]); // keyword가 변화할 때 코드를 실행
    useEffect(()=>{
    console.log("i run when 'counter' changes")
    },[counter]);
    useEffect(()=>{
      console.log("i run when keyword & counter changes")
    },[keyword,counter]);
  return (
    <div>
      <input
        value={keyword} 
        onChange={onChange} 
        type="text" 
        placeholer="Search here..." />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
