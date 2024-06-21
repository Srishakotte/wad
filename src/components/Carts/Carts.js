import React from 'react';
import "./Carts.css";

function Carts() {
  return (
    <div className="list-of-items">
      <div className="item">
        <h3>Television</h3>
        <img src="https://netstorage-tuko.akamaized.net/images/e9b3c228b796844e.jpg?imwidth=900" alt="Television" />
        <p>Description of the television.</p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGXfiWvx0nVCis8k-28zz4NbrCDpeBBtqKkw&s" alt="sofa"/>
        <p>Description of the sofa.</p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9ZuCLpXm0CwKY3E_qLEIUmr39fw7sueuDdQ&s" alt="light"/>
        <p>Description of the light.</p>


      </div>
      {/* Add more items here */}
    </div>
  );
}

export default Carts;
