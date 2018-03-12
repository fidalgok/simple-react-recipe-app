import React, { Component } from 'react';
import Recipe from './Recipe';
import Navbar from './Navbar';
import RecipeList from './RecipeList';
import RecipeInput from './RecipeInput';
import './RecipeApp.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      recipes: [
        {
          id:0,
          title: "Pasta",
          ingredients: ['Flour', 'Water'],
          instructions: "Mix Ingredients",
          img: "https://images.unsplash.com/photo-1462618521524-07d259ab774a",
        },
        {
          id:1,
          title: "Milkshake",
          ingredients: ['Vanilla Ice Cream', 'Ice Cream Cone', 'Mini Marshmallows', 'Caramel Corn', 'Caramel Drizzle', 'Milk'],
          instructions: "Blend 1 pint ice cream, 1/4 cup milk and 1/4 cup of caramel Drizzle until combined. " +
            "Pour mixture into cup and top with ice cream and a cone flipped upside down. Drizzle " +
            "caramel topping on top and then finish with adding caramel corn and marshmallows",
          img: "https://images.unsplash.com/photo-1507750809133-76dfbb107d68",
        },
        {
          id:2,
          title: "Autumn Soup",
          ingredients: ["Butternut Squash", "Coconut Milk", "Vegetable Stock", "Shallots"],
          instructions: "Peel, cut, then bake the butternut squash in the oven at 375F for 45 minutes. " +
            "In a large pot, add diced shallots with coconut oil and sautee until browned. " +
            "Add squash to large pot with the coconut milk and vegetable stock and simmer for 45 minutes. " +
            "Blend mixture and add salt and pepper to taste.",
          img: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a",
        }
      ],
      nextRecipeId: 3,
      showForm: false,
    }

    this.handleSave = this.handleSave.bind(this);
  }
  
  handleSave(recipe){
    
    this.setState((prevState, props) => {
      const newRecipe = {...recipe, id: this.state.nextRecipeId}
      const recipes = this.state.recipes.slice();
      recipes.push(newRecipe);
      return {
        nextRecipeId: prevState.nextRecipeId + 1,
        recipes: recipes,
      }
  });
  }
  render() {
    const {showForm} = this.state;
    return (
      <div className="App">
        <Navbar onNewRecipe = {() => this.setState({showForm: true})}/>
        { showForm ? 
          <RecipeInput 
            onSave={this.handleSave}
            onClose={() => this.setState({showForm: false})}
          /> : 
          null }
        <RecipeList recipes={this.state.recipes}/>
        
      </div>
    );
  }
}

export default App;
