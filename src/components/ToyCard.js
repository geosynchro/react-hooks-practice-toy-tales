import React, {useState} from "react";

function ToyCard({id, image, name, likes, onDeleteToy}) {
  const[likeNum, setLikeNum]= useState({likes})

  function addLikes(){
    
    setLikeNum(likes+1)
  }
  
  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button onClick={addLikes}className="like-btn">Like{"<3"}</button>
      <button onClick={() => onDeleteToy(id)} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
