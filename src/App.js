import React, { useState } from 'react';
import './App.css';
import TestAxios from './components/TestAxios/TestAxios';

import { Toggle } from './components/Toggle/Toggle';

function App() {
  return (<div className="App">
    <TestAxios />
    {/* <Toggle />  */}
    {/* <div className="box"></div> */}
    <Counter renderProp={(count) => <span>{count}</span>} />
    <Counter renderProp={(count, secondSentance) => <span style={{ fontWeight: "bold" }}>{secondSentance}</span>} />
    {/* <CounterTwo list={["Ori", "Yair", "Shalom"]}
      renderList={list => <li key={Math.random()}>{list}</li>}
    />
    <CounterTwo list={["Ori", "Yair", "Shalom"]}
      renderList={list => <li key={Math.random()} style={{ listStyleType: "none" }}>{list}</li>}
    /> */}
    <Condition
      number={6700}
      goodMessage={<h1>Good Score</h1>}
      badMessage={<h1>You still need to practice</h1>}
    />
    {/* <Itenaray /> */}
    <CounterTwo
    // list={["Ori", "Yair", "Shalom"]}
    />
    <Provider>
      {([count, setCount]) => {
        return <>
          {count}
          <button onClick={() => setCount(count + 1)}>Increment</button>
        </>
      }}
    </Provider>
  </div>);
}
const Itenaray = props => {
  return <div>
    {props.number > 600 ? <h1>Good Score</h1> : <h1>You still need to practice</h1>}
  </div>
}
{/* <h1>Good Score</h1>
<h1>You still need to practice</h1> */}
const Condition = props => <>
  {props.number > 600 ? props.goodMessage : props.badMessage}
</>
Itenaray.defaultProps = {
  number: 700
}
const Provider = props => {
  const counter = useState(0);
  return props.children(counter)
}
const Counter = (props) => {
  const count = 27

  return <div>{props.renderProp('Hello world', 'SecondHello')}</div>
}

const CounterTwo = props => {
  return <ul>{props.list.map(props.renderList)}</ul>
}
CounterTwo.defaultProps = {
  renderList: (list) => <li key={Math.random()} style={{ listStyleType: "none" }}>{list}</li>,
  list: ["Ori", "Yair", "Shalom"]
}

export default App;