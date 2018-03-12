import React, {Component} from 'react';
import Recipe from './Recipe';
import PropTypes from 'prop-types';
import './RecipeList.css';

class RecipeList extends Component{
    static defaultProps = {

        recipes: [
            {
                title: "Pasta",
                ingredients: ['Flour', 'Water'],
                instructions: "Mix Ingredients",
                img: "https://images.unsplash.com/photo-1462618521524-07d259ab774a"
            },
            {
                title: "Milkshake",
                ingredients: ['Vanilla Ice Cream', 'Ice Cream Cone', 'Mini Marshmallows', 'Caramel Corn', 'Caramel Drizzle', 'Milk'],
                instructions: "Blend 1 pint ice cream, 1/4 cup milk and 1/4 cup of caramel Drizzle until combined. " +
                    "Pour mixture into cup and top with ice cream and a cone flipped upside down. Drizzle " +
                    "caramel topping on top and then finish with adding caramel corn and marshmallows",
                img: "https://images.unsplash.com/photo-1507750809133-76dfbb107d68"
            },
            {
                title: "Autumn Soup",
                ingredients: ["Butternut Squash", "Coconut Milk", "Vegetable Stock", "Shallots"],
                instructions: "Peel, cut, then bake the butternut squash in the oven at 375F for 45 minutes. " +
                    "In a large pot, add diced shallots with coconut oil and sautee until browned. " +
                    "Add squash to large pot with the coconut milk and vegetable stock and simmer for 45 minutes. " +
                    "Blend mixture and add salt and pepper to taste.",
                img: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a"
            }
        ]
    }
    
    static propTypes = {
        recipes: PropTypes.arrayOf(PropTypes.object)
    }
    
    render(){
        const recipes = this.props.recipes.map((recipe, i) => (
            <Recipe key={i} title={recipe.title}
                ingredients={recipe.ingredients}
                img={recipe.img}
                instructions={recipe.instructions}
            /> //could use the rest operator here to shorten this up
            //just be careful if you use this <Recipe key={i} {...recipe}/>
        ));

        return(
            <div className="recipe-list">
                {recipes}
            </div>
        )
            
        
    }

    
}

export default RecipeList;