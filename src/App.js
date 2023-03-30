import logo from './logo.svg';
import './App.css';

function App() { 
const Developers=['Shakil','Rabbi','Debu','Samiul']

  return (
    <div className="App"> 
    <h1>Simple React Component practice </h1> 
{
  Developers.map(developer=><Person name={developer}></Person>)
}
      {/* <Person name="MD.Shakil" proffesion="Front-end Developer"></Person>
      <Friend name="MD.Rabbi " proffesion="Front-end Developer"></Friend>
      <Person name="Debu" proffesion="Front-end Developer"></Person>
      <Person name="Debu" proffesion="Front-end Developer"></Person> */}
    </div>
  );
}
 
function Person(props){ 
  return( 
    <div className='personalInfo'>
      <h1>{props.name}</h1> 
      <p>{props.proffesion}</p>
    </div>
  )
}

function Friend(props){ 
  return( 
    <div className='friendsInfo'>
      <h1>{props.name}</h1> 
      <p>{props.proffesion}</p>
    </div>
  )
}
export default App;
