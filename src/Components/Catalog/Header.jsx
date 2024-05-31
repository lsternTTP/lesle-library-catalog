import './Header.css';
import {useState} from 'react';

export default function Header(props) {
  
  const [search, setSearch] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();
    props.search(search);
    // alert(`The search you entered was: ${search}`)
  }
  
  return (
    <div>
<div className="scrolling-text-container">
  <div className="scrolling-text-inner">
      <div className="scrolling-text">
          <div className="scrolling-text-item">&#128721; &#128721; &#128721; &#128721; &#128721; </div>
        <div className="scrolling-text-item"> JOIN OUR CAMPAIGN TO STOP THE STEAL!!!</div>
        <div className="scrolling-text-item">&#128721; &#128721; &#128721; &#128721; &#128721; &#128721; &#128721;</div>
        <div className="scrolling-text-item">A LIBRARY IS A TERRIBLE THING TO WASTE!!!</div> 
        <div className="scrolling-text-item">&#128721; &#128721; &#128721; &#128721; &#128721;</div>
        
          <div className="scrolling-text-item">TELL MAYOR "SMADA" -- NO MORE CUTS TO MPL!!!</div>
        <div className="scrolling-text-item">&#128721; &#128721; &#128721; &#128721; &#128721;</div>
    <div className="scrolling-text-item">MAKE LIBRARIES GREAT AGAIN!!!</div>
        <div className="scrolling-text-item">&#128721; &#128721; &#128721; &#128721; &#128721;</div>
    <div className="scrolling-text-item">A MIND IS A TERRIBLE THING TO WASTE!!!</div> 
        <div className="scrolling-text-item">&#128721; &#128721; &#128721; &#128721; &#128721;</div>
  </div>
    </div>
    </div>
{/* <h1>Library Catalog</h1> */}
{/* logo component */}
{/* // Links and searchbar components */}
  {/* scrolling bar */}
<div className="logo">
<img id="img" src="https://github.com/lsternTTP/lesle-library-catalog/blob/main/src/img/behnam-norouzi-FusPlf972j8-unsplash.jpg?raw=true" alt="Library logo"></img>
<h2>&#40;M&#41;ETROPOLITAN <br></br>&#40;P&#41;UBLIC<br></br>&#40;L&#41;IBRARY</h2>
{/* <input type="text" placeholder="Search..."></input> 
*/}
<form className="search">
  <input type="text" placeholder="Search the catalog..." name="search" onChange={(e) => {setSearch(e.target.value); 
  console.log(search);}}>
  </input>
  <button type="submit" onClick={handleSubmit}><i className="fa fa-search"></i></button>
</form>
</div>
<nav>
<ul>
  <li>About</li>
  <li>Visit</li>
  <li>Books & more</li>
  <li>Services</li>
  <li>Learning & Research</li>
  <li>Events</li>
  <li>Support the MPL</li>
  <li>Work at the MPL</li>
</ul>
</nav>
      </div>
  );
  }

      