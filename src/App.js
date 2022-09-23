import { useEffect, useState } from 'react';
import './App.css';
import Article from './components/Article/Article';

function App() {

  const [data, setData] = useState({});


  useEffect(() => {
    fetch("data.json")
      .then(res => res.json())
      .then(data => setData(data))
  }, [])



  return (
    <div className="App">
      <h1>Welcome to my chugri bugri app</h1>
      <Article data={data} />

    </div>
  );
}




export default App;
