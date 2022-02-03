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


