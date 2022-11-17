
import React, {useState, useReducer, useEffect, useRef, useLayoutEffect, createContext} from 'react';
import logo from './logo.svg';
import Footer from './Footer'
import reducer  from "./reducers";
import './App.css';


const MIN = 0;
export const FooterContext = createContext({footText: ""})


function App(): JSX.Element {
  const [counter, setCounter] = useState(0);
  const [state, dispatch] = useReducer(reducer, {notify: ""})
  const [min, setMin] = useState(0)
  const [sec, setSec] = useState(0)
  const [footText, setFootText] = useState("Learn React")

  const titleRef = useRef<any>(null)
  const formRef = useRef<any>(null)

  const increaseCounter = () => {
    dispatch({type: "INCREMENT"})
    setCounter(counter+1)
  }
  const decreaseCounter = () => {
    if (counter > MIN){
      dispatch({type: "DECREMENT"})
      setCounter(counter-1);
    }
  }

  const setTitle = () => {
    titleRef.current.innerHTML = formRef.current.value
  }

  const changeFooter = () => {
    setFootText("My React App")
  }

  useLayoutEffect(() => {
    // useLayoutEffect runs before the DOM is updated
    console.log("useLayoutEffect")
    }, []);

  useEffect(() => {
    formRef.current.focus()
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (min >= 59 && sec >= 59){
        setMin(0);
        setSec(0);
      }
      else if (sec >= 59){
        setSec(0);
        setMin(min+1);
      }
      else{
        setSec(sec+1);
      }
    }, 1000);
    console.log("useEffect called")
    return () => clearInterval(interval);
  }, [min, sec]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p ref={titleRef}> COUNTER </p>
        <input type="text" className={"form"} onChange={setTitle} ref={formRef}/>
        <h1> {counter}</h1>
        <div className="button">
          <button onClick={increaseCounter}> INCREASE </button>
          <button onClick={decreaseCounter}> DECREASE </button>
        </div>
        <div> {state.notify}</div>
      </header>
      <div className={"timer"}> {min}:{sec} </div>
      <FooterContext.Provider value={{footText}}>
        <div className={"butt"}>
          <Footer/>
          <button onClick={changeFooter}> change </button>
        </div>
      </FooterContext.Provider>
    </div>
  );
}

export default App;
