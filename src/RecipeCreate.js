import React, { useState } from "react";

function RecipeCreate({addRecipe}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
    const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  }

  const [formData, setFormData] = useState({...initialFormState});

  const recipeChangeHandler = ({target}) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    })
  }
  
   const handleSubmit = (event) =>{
    event.preventDefault();
    addRecipe(formData)
    setFormData({...initialFormState})
  }
    
    
    
  return (
    <form name="create" className="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input name="name" type="text" required={true} value={formData.name} placeholder="Name" onChange={recipeChangeHandler}></input>
            </td>
            <td>
              <input name="cuisine" type="text" required={true} value={formData.cuisine} placeholder="Cuisine" onChange={recipeChangeHandler}></input>
            </td>
            <td>
              <input name="photo" type="url" required={true} value={formData.photo} placeholder="URL" onChange={recipeChangeHandler}></input>
            </td>
            <td>
              <textarea name="ingredients" type="text" required={true} value={formData.ingredients} placeholder="Ingredients" onChange={recipeChangeHandler}></textarea>
            </td>
            <td>
              <textarea name="preparation" type="text" required={true} value={formData.preparation} placeholder="Preparation" onChange={recipeChangeHandler}></textarea>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
