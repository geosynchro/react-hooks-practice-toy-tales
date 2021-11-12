import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const URL = "http://localhost:3001/toys"
  const [showForm, setShowForm] = useState(false);
  const [toys, setToysList] = useState([])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  useEffect(() =>{
    fetch(URL)
    .then(res => res.json())
    .then(setToysList)
  }, [])

  function handleAddToy(newToy){
    const config = {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(newToy)
    }
    fetch(URL,config)
    .then(res => res.json())
    .then(resToy =>setToysList([...toys, resToy ]))
  }

  function handleDeleteToy(id){
    fetch(URL + `/${id}`, {method:"DELETE"})
    const newToyArr = toys.filter(toy => toy.id !== id)
    setToysList(newToyArr)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToy={handleAddToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} onDeleteToy={handleDeleteToy}/>
    </>
  );
}

export default App;
