import './Book.css';

export default function Book(props) {
  // handle add request button click
  function clickRequestHandler() {
    props.liftBookToAppHandler(props.book);
  }
  
  return (
    <div className="book-card">
      <img id="book-image"src={props.book.img}></img>
      <h2>{props.book.title}</h2>
      <h3>{props.book.author}</h3>
      <p>Published {props.book.yearPublished} in {props.book.language}</p>
      <p>{props.book.description}</p>
      <button onClick={clickRequestHandler} id="request-btn">Request Book</button>
    </div>
  )
}