import React, {Component} from 'react';
import Recipe from './Recipe';
import PropTypes from 'prop-types';
import './RecipeList.css';

class RecipeList extends Component{
    
    
    static propTypes = {
        recipes: PropTypes.arrayOf(PropTypes.object)
    }
    
    render(){
        const recipes = this.props.recipes.map((recipe, i) => (
            <Recipe key={recipe.id} title={recipe.title}
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