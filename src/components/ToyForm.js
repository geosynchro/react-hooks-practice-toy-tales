import React, {useState} from "react";

function ToyForm({onAddToy}) {
  const [toyFormData, setToyFormData] = useState({
    name: "",
    image: "",
    likes: 0
  })

  function handleChange(e){
    setToyFormData({
      ...toyFormData,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e){
    e.preventDefault();
    onAddToy(toyFormData)
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={toyFormData.name}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={toyFormData.image}
          onChange={handleChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
