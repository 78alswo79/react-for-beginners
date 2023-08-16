import { useState, useEffect } from 'react';

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");

  const OnClick = () => setValue((prev) => prev + 1);
  const OnChange = (event) => setKeyword(event.target.value);

  useEffect(() => {
    console.log("I run only once...");
  }, []);

  useEffect(() => {
      console.log("I run when 'keyword' change..");
  }, [keyword]) // keyword가 변화할 때 코드를 실행할 거야!!라는 뜻.
 
  useEffect(() => {
      console.log("I run when 'counter' change..");
  }, [counter]) // counter 변화할 때 코드를 실행할 거야!!라는 뜻.

  useEffect(() => {
    console.log("I run when 'counter' & 'conter' change!")
  })

  return (
    <div>
      <input
        value={keyword}
        onChange={OnChange} 
        type='text' 
        placeholder='Search hrer...' 
      />
      <h1>{counter}</h1>
      <button onClick={OnClick}>Click Me!!!!</button>
    </div>
  );
}

export default App;
