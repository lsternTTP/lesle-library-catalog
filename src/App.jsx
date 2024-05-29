// import "./App.css";
import Header from './Components/Catalog/Header.jsx';
import AllBooks from "./Components/Catalog/AllBooks.jsx";
import AllRequests from "./Components/Requests/AllRequests.jsx";
import database from "../BookData.json";
import {useState} from 'react';

export default function App() {
  // initialize request list state
  const [myRequests, setMyRequests] = useState([]);
 // console.log("requests", myRequests);

  // initalize book list state
  const [myBooks, setMyBooks] = useState(database.catalog);
 // console.log("books list", myBooks);

  function addToRequestListHandler(bookToAdd) {
    const isThere = myRequests.find((currentBook) => bookToAdd.id === currentBook.id);
console.log(isThere);
    if (isThere == undefined) {
      
    setMyRequests( () => {
      return [...myRequests, bookToAdd];
    })
      }

  }

  function removeFromRequestListHandler(bookToRemove) {
    // filter out the bookToRemove from myRequests
    setMyRequests(() => {
      // filter out bookToRemove
      return myRequests.filter((thisRequest) => thisRequest.id != bookToRemove.id);
    })
  }

  function filterBooksHandler(searchTerm) {
    // console.log(searchTerm);
    setMyBooks(() => {
      // filter out 
      return myBooks.filter((thisBook) => thisBook.title.toLowerCase() == searchTerm.toLowerCase());
    })

  }
  
  return (
    <main>
      <Header search={filterBooksHandler}></Header>
      <section id='books-and-requests'>
      <AllBooks bookList={myBooks} addToRequestListHandler={addToRequestListHandler}></AllBooks>
      <AllRequests requestList={myRequests} removeFromRequestListHandler={removeFromRequestListHandler}></AllRequests>
        </section>
    </main>
  );
}
