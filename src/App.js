import logo from './logo.svg';
import './App.css';

// Defining variables: I a variable doesn't need anything from within the function component's body
// (e.g. parameters), define it outside the component to avoid redefining it on every function call
const awesomeVariable = 'Awesome';

// Function components are the modern way of using components in React
const App = () => {
  const inTheFunctionVariable = '(Do we really need to run this all the time)'

  return (
    <div>
    <h1>Hello Hello Oh World! {inTheFunctionVariable}</h1>
    </div>
  );  
    
}

export default App;
