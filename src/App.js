import * as React from 'react';
import ReactDom from 'react-dom';
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

// Data is usually fetched from a remote API in a list mode
/* const list = [
  {  
    objectID: 0, //identifier
    title: 'Pajutuija',
    url: 'https://pajutuija.fi',
    author: 'Tuija Paju',
    num_comments: 4,
    points: 3, // popularity...
  },
  {
    objectID: '1',
    title: 'Sydämelle',
    url: 'https://sydamelle.com',
    author: 'Marjaana',
    num_comments: '5',
    points: 2
  }
]
 */

// Function components are the modern way of using components in React
const App = () => {
  const inTheFunctionVariable = '(Do we really need to run this all the time)'

  const sites = [
    {  
      objectID: 0, //identifier
      title: 'Pajutuija',
      url: 'https://pajutuija.fi',
      author: 'Tuija Paju',
      num_comments: 4,
      points: 3, // popularity...
    },
    {
      objectID: '1',
      title: 'Sydämelle',
      url: 'https://sydamelle.com',
      author: 'Marjaana',
      num_comments: '5',
      points: 2
    }
  ]
  
  // Initial state
  // first argument: this state will change
  // second argument: function to update the state 
  const [searchTerm, setSearchTerm] = React.useState('Unicorn')
 
  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  const searchedSites = sites.filter((site) => 
   // always use loverCase versions when comparing text!!!
    site.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <h1>Hello Hello Oh World! {inTheFunctionVariable}</h1>
      <h2>Or maybe just {welcome.greeting} {welcome.title}</h2>
      <h3>Go get the title: {getTitle('Clown')}</h3>
      <p>{awesomeVariable}</p>
      <p>Search term: {searchTerm}</p>
      <hr />
      
      <Search search={searchTerm} onSearch={handleSearch} gummybear={searchTerm} />
      
      <Lost list={searchedSites} />
      </div>
  );  
}

// Search component
// Use search term from input field to filter sites by title in the App component
// Share Search component's state accross multiple components -> List state up to App component
// -> Search comp. passes up the event to App comp. via callback handler
const Search = (props) => (
    <div>
      <label htmlFor="search">Search: </label>
      <input 
        id="search" 
        type="text"
        value={props.search}
        onChange={props.onSearch} 
      /> 
      <p>See how the state changes: <strong>{props.gummybear}</strong></p>
      <p>It is passed down as props. Input field content is thrown up to the state handler using a callback function</p>   
    </div>
)
    
// Create another component that can be used in the Application
const Lost = (props) => (
  <div>
    <ul>        
    {props.list.map((item) => (
      <Item key={item.objectID} item={item} />
    ))}
    </ul>
  </div>
)  
      
const Item = (props) => (
        
  <li key={props.item.objectID}>{props.item.author}<br/>
    <span>
      URL: <a href={props.item.url}>{props.item.title}</a>
    </span><br/>
    <span>Author: {props.item.author}</span><br/>
    <span>Comments: {props.item.num_comments}</span><br/>
    <span>Rating: {props.item.points}</span>
  </li>          
) 

const Unicorn = (props) => (
  <li>
    <h3>{props.teddybear.title}</h3>
  </li>
)


export default App;


/**
 * Comments:
 * 
 * App is the Peak of the pyramid component (Parent or Root component), uppermost entry point component
 * -> spans a tree of components below it
 * 
 * Components that don't render any other components are called leaf components 
 * 
 * Once we have defined a component it can be used as an HTML element anywhere in JSX -> The element produces a component instance of the component (component gets instantiated)
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
 * Use Vanilla JS to map a list of JS objects to HTML elements without any other HTML templating syntax
 * 
 * By assigning a KEY to each list item's element React can identify items if the list changes
 * -> Avoid using the index of the item in the array to make sure the key attribute is STABLE identifier
 * 
 * Return null if you want to render nothing
 */