import './Request.css';
export default function Request(props) {
  function clickRemoveRequestHandler() {
    // call the function received from AllRequests
    props.liftRequestToRemoveHandler(props.book);
  }
  
  return (
    <div id="request-card">
      <p id="title">{props.book.title}</p>
      <p id="author">{props.book.author}</p>
      <img src={props.book.img} id="request-img"></img>
      <button onClick={clickRemoveRequestHandler} id="remove-btn">Delete</button>
    </div>
  )
}