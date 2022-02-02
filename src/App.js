import logo from './logo.svg';
import './App.css';

// Defining variables: I a variable doesn't need anything from within the function component's body
// (e.g. parameters), define it outside the component to avoid redefining it on every function call
const awesomeVariable = 'Awesome';

// Using JS Object
const welcome = {
  greeting: 'Helloooo',
  title: 'Stranger',
}

const getTitle = (title) => title;

// Function components are the modern way of using components in React
const App = () => {
  const inTheFunctionVariable = '(Do we really need to run this all the time)'

  return (
    <div>
      <h1>Hello Hello Oh World! {inTheFunctionVariable}</h1>
      <h2>Or maybe just {welcome.greeting} {welcome.title}</h2>
      <h3>Go get the title: {getTitle('Clown')}</h3>
      <p>{awesomeVariable}</p>
    

      <label htmlFor="search">Search: </label>
      <input if="search" type="text" />

    </div>
  );  
    
}

export default App;


/**
 * Comments:
 * 
 * CamelCase naming convention!
 * 
 * htmlFor attribute reflects the for attribute in HTML
 * -> Expect to come across more JSX specific attributes
 *    - class -> className
 *    - onclick -> onClick
 * 
 * Essentially everything in curly braces in JSX can be used for JS
 * 
 */