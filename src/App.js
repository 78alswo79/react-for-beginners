// import { useState, useEffect } from 'react';
// import Movie from "./components/Movie";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

// function Hello () {
//   // const byFn = () => {
//   //   console.log("bte :(")
//   // }
//   // const hiFn = () => {
//   //   console.log("created :)");
//   //   return byFn;
//   // }
//   // useEffect(
//   //   // clean up Function
//   //   // return () => console.log("destoryed :(")
//   //   hiFn, []);
  
//   // 화살표 함수방식
//   useEffect(() => {
//     console.log("hi :)");
//     return () => console.log("bye :(");
//   }, [])

//   // 기본 함수 방식
//   useEffect(function () {
//     console.log("hi :)");
//     return function () {
//       console.log("bye :(");
//     };
//   }, [])
//   return <h1>Hello!!</h1>
// }

function App() {
  /** (S) 리액트 useEffect  */
  // const [counter, setValue] = useState(0);
  // const [keyword, setKeyword] = useState("");

  // const OnClick = () => setValue((prev) => prev + 1);
  // const OnChange = (event) => setKeyword(event.target.value);

  // useEffect(() => {
  //   console.log("I run only once...");
  // }, []);

  // useEffect(() => {
  //     console.log("I run when 'keyword' change..");
  // }, [keyword]) // keyword가 변화할 때 코드를 실행할 거야!!라는 뜻.
 
  // useEffect(() => {
  //     console.log("I run when 'counter' change..");
  // }, [counter]) // counter 변화할 때 코드를 실행할 거야!!라는 뜻.

  // useEffect(() => {
  //   console.log("I run when 'counter' & 'conter' change!")
  // })
  /** (E) 리액트 useEffect  */

  



  // const [showing, setShowing] = useState(false);
  // const onClick = () => {
  //   setShowing((prev) => !prev)
  // }





  // useState주의점!!. 절대로 스테이트 값으로 변경을 하지않는다. 함수로 값을 변경한다!
  // const [toDo, setToDo] = useState("");
  // const [toDos, setToDos] = useState([]);

  // const onChange = (event) => {
  //   setToDo(event.target.value);
  //   console.log(toDo)
  // }

  // const onSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(toDo);
  //   if (toDo === "") {
  //     return;
  //   }
  //   setToDos((curVal) => [toDo, ...curVal]);
  //   setToDo("");
  // }
  // console.log(toDos);





  

  // const [coins, setCoins] = useState([]);
  // 신버전
  // const getCoins = async () => {
  //   const response = await fetch(
  //     "https://api.coinpaprika.com/v1/tickers"
  //   );
  //   const json = await response.json();
  //   setCoins(json);
  //   setLoading(false);
  // }

  // useEffect(() => {
  //   getCoins();
  //   // 구버전
  //   // fetch("https://api.coinpaprika.com/v1/tickers")
  //   // .then((response) => response.json())
  //   // .then((json) => {
  //   //   setCoins(json);
  //   //   setLoading(false);
  //   // });
  // }, [])


  
    /** (S) 리액트 useEffect  */
    // <div>
    //   <input
    //     value={keyword}
    //     onChange={OnChange} 
    //     type='text' 
    //     placeholder='Search hrer...' 
    //   />
    //   <h1>{counter}</h1>
    //   <button onClick={OnClick}>Click Me!!!!</button>
    // </div>
    /** (E) 리액트 useEffect  */





    // <div>
    //   {showing ? <Hello /> : null}
    //   <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    // </div>





    /* <form>안에 버튼 한개 있다면 submit기능을 자동으로 가진다. */
    // <div>
    //   <h1>My TO Dos({toDos.length})</h1>
    //   <form onSubmit={onSubmit}> 
    //     <input 
    //       onChange={onChange}
    //       value={toDo}
    //       type='text' 
    //       placeholder='Write your to do...'
    //     />
    //     <button>Add To Do</button>
    //   </form>
    //   <hr />
    //   <ul>
    //     {toDos.map((item, idx) => 
    //       <li key={idx}>{item}</li>
    //     )}
    //   </ul>
    // </div>




    // <div>
    //   <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
    //   {loading ? (
    //     <span>Loading...</span>
    //     ) : (
    //       <select>
    //         {coins.map((coin,idx) => 
    //           <option key={idx}>{coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD</option>
    //         )}
    //       </select>
    //     )}
    // </div>
    return (
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/movie/:id' element={<Detail />}></Route>
        </Routes>
      </Router>
    )
}

export default App;
