
import './App.css';
import Props2 from './Components/Props2';

function App() {
  const data = [
    {id:1,
     name :'Ayush'},

    {id:2,
    name :"Nishu"
  }
]

console.log("Ayush")

  return (
    <div className="App">
      <Props2 naam={data}/>
    </div>
  );
}

export default App;
