Example list to use in the code snippets:

const list = [
  {  
    objectID: 0, //identifier
    title: 'Pajutuija',
    url: 'https://pajutuija.fi',
    author: 'Tuija Paju',
    num_comments: 4,
    points: 3, // popularity...
  },
  {
    ojectID: '1',
    title: 'Sydämelle',
    url: 'https://sydamelle.com',
    author: 'Marjaana',
    num_comments: '5',
    points: 2
  }
]


## Mapping

    {list.map(function (item) {
        return (

        <li key={item.objectID}>{item.author}<br/>
            <span>
            URL: <a href={item.url}>{item.title}</a>
            </span><br/>
            <span>Author: {item.author}</span><br/>
            <span>Comments: {item.num_comments}</span><br/>
            <span>Rating: {item.points}</span>
        </li>          
        )        
    })}

- Use Vanilla JS to map a list of JS objects to HTML elements without any other HTML templating syntax
- Within the map function we have access to each item and its properties
- Assign a key attribuet to each list item's element -> React can identify items if the list changes
- Always use a stable objectID instead of index to make sure the key attribute stays the same if the list changes

## Handler function

- JavaScript in HTML can pass functions to an HTML element's attributes for handling user interactions

  const handleChange = (event) => console.log(event.target.value) 

  <input 
    id="search"
    type="text"
    onChange={handleChange}
  />

- Define a function for the change event (event)handler
- Pass the function to the onChange attribute of HTML input field
- -> Access input value through 'synthetic event': event.target.value
- Synthetic event is a wrapper around the browser's native event, with more functions that are useful to prevent native browser behavior
- ALWAYS pass function to handlers (NOT return value of the function unless it's a function)

## Props

- With props we can pass variables as information from one component to another component. (Down the component tree)
- Props can only be passed from parent to a child component, NOT vice versa

  <Lost list={sites}/>

    ...

  // Using attribute teddybear to underline the connections
  const Lost = (props) => (
    <ul>
      {props.list.map((item) => (
        <Unicorn key={item.objectID} teddybear={item} /> 
      ))}
    </ul>
  )  

    ...

  const Unicorn = (props) => (
    <li>
      <h3>{props.teddybear.title}</h3>
    </li>
  )

- Everything we pass from a parent component to a child component via a component element's HTML attribute can e accessed in the child component.
- The child component receives an object parameter - props - which includes all the passed attributes as properties (props).

## States

- State is used to make applications interactive - state is used to alter information over time
- useState() function tells React that X is a state that changes over time and whenever it changes, React has to re-render (= run component function again) its affected component(s) -> the updateted state becomes the current state
- useState() is a React Hook...

const Search = () => {
  const [searchTerm, setSearchTerm] = React.useState('')
  const handleChange = (event) => {
    setSearchTerm(event.target.value)
  }
}

- -> useState() takes an initial state as an argument. ('') By providin initial state we tell React this state changes
- -> Calling setState() returns an array with two entries:
  - searchTerm => current state
  - setSearchTerm => function to update this state ("state updater function") 

## Callback Handlers in JSX

- Callback Handler is a callback function that is introduced in one place, is used elsewhere but "calls back" to the place it was introduced
- When an (event) handler is passed as props from a parent component to its child component, it becomes a callback handler
- Callback handlers passed as functions in props can be used to communicate up the component hierarchy

- Pass a function from a parent component (App) to a child component (Search) via props
- -> call this function in the child component (Search), but have the actual implementation of the called function in the parent component (App)

## Lifting state

- Always manage state at a component lever where every component that's interested in it is one that either:
  - manages the state - using information directly from state
  - component below the managing component - using information from props 
- If a component below needs to update the state, pass a callback handler down to the component which allows the callback handler to update the state.
- If a component needs to use the state, pass it down as props

## React Controlled Components
- Input field can hold a internal state before givin external value to it
- If we want to start with the initial state in the input field, we need to convert the component with the input field into a so called controlled component
- Pass initial state using props and use it with value attribute in input field -> Now the input field uses the correct initial value when displaying in the browser

### Unidirectional data flow
- A React application and its components start with an initial state. It can be passed down as props to child components. It's rendered on first use.
- When side-effect occurs (user input) or data loading from a remote API, the change is captured in React's state either in the component or by notifying parent components via a callback handler
- Once state has been changed, all components below the component with the modified state are re-rendered (component functions run again)


- Hooks initialize only once when the component renders for the first time, after which React tracks them internally with their most recent values.

