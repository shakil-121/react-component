
import './App.css';

function App() {  
  //option 2 for daynamic data show on web UI array 
// const Developers=['Shakil','Rabbi','Debu','Samiul'] 

//option 03 array with object for daynamic data show on Web UI 
const Developers=[
  {name:'Shakil', proffesion:'Front-end Developer' },
  {name:'Rabbi Mia', proffesion:'Front-end Developer' },
  {name:'Debu', proffesion:'Front-end Developer' },
  {name:'Samiul', proffesion:'Wordpress Expert' },
  {name:'Jumman', proffesion:'Digital Marketing Expert' }
]
  return (
    <div className="App"> 
    <h1>Simple React Component practice </h1> 
{ 
   //option 2 for daynamic data show on web UI array 
  // Developers.map(developer=><Person name={developer}></Person>) 
  Developers.map(developer=><Person name={developer.name} proffesion={developer.proffesion}></Person>)
} 

      {
      //option 01 for daynamic data show on web UI in an array using map 
      /* <Person name="MD.Shakil" proffesion="Front-end Developer"></Person>
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

export default App;
