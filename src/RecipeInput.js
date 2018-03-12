import React from 'react';
import './RecipeInput.css';

class RecipeInput extends React.Component {
  static defaultProps = { 
    onClose() {},
    onSave(){}, 
  }
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      instructions: '',
      ingredients: [''],
      img: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleNewIngredient = this.handleNewIngredient.bind(this);
    this.handleChangeIng = this.handleChangeIng.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit(e) { 
    e.preventDefault();
    this.props.onSave({...this.state});
    this.setState({
      title: '',
      instructions: '',
      ingredients: [''],
      img: '',
    });
  }

  handleChangeIng(e) {
    const index = Number(e.target.name.split('-')[1]);
    const ingredients = this.state.ingredients.slice();
    ingredients[index] = e.target.value;
    this.setState({ ingredients: ingredients })
  }

  handleNewIngredient() {
    const { ingredients } = this.state;
    this.setState({ ingredients: [...ingredients, ''] });
  }

  render() {
    const { title, instructions, img, ingredients } = this.state;
    const { onClose } = this.props;
    let ingredientInputs = ingredients.map((ing, i) => (
      <div
        className="recipe-form-line"
        key={`ingredient-${i}`}
      >
        <label htmlFor={`ingredient-${i}`}> {i + 1}

        </label>
        <input
          type="text"
          id={`ingredient-${i}`}
          name={`ingredient-${i}`}
          value={ing}
          size={45}
          autoComplete="off"
          placeholder="Ingredient"
          onChange={this.handleChangeIng}
        />
      </div>
    ));

    return (
      <div className="recipe-form-container">
        <form className="recipe-form" onSubmit={this.handleSubmit}>
          <button
            type="button"
            className="close-button"
            onClick={onClose}
          >
            X
          </button>
          <div className="recipe-form-line">
            <label htmlFor="recipe-title-input">Title</label>
            <input
              id="recipe-title-input"
              key="title"
              name="title"
              type="text"
              value={title}
              size={42}
              autoComplete="off"
              onChange={this.handleChange}
            />
          </div>
          <label
            htmlFor="recipe-instructions-input"
            style={{ marginTop: "5px" }}
          >
            instructions
          </label>
          <textarea
            key="instructions"
            id="recipe-instructions-input"
            type="Instructions"
            name="instructions"
            rows="8"
            cols="50"
            autoComplete="off"
            value={instructions}
            onChange={this.handleChange}
          />
          {ingredientInputs}
          <button
            type="button"
            onClick={this.handleNewIngredient}
            className="buttons"
            style={{alignSelf:"flex-end", marginRight:0}}
          >
            +
          </button>
          <div className="recipe-form-line">
            <label htmlFor="recipe-img-input">Image Url</label>
            <input
              id="recipe-img-input"
              type="text"
              placeholder=""
              name="img"
              value={img}
              size={36}
              autoComplete="off"
              onChange={this.handleChange}
            />
          </div>
          <button
            type="submit"
            className="buttons"
            style={{ alignSelf: 'flex-end', marginRight: 0 }}
          >
            SAVE
          </button>
        </form>
      </div>
    )
  }
}

export default RecipeInput;