import React, {Component} from 'react';
import './Recipe.css'

class Recipe extends Component{
    

    

    render(){
        //common to destructure objects and arrays passed to props
        const {id, img, title, instructions, onDelete} = this.props;
        const ingredients = this.props.ingredients.map((ing, i) => {
            return <li key={i}> {ing}</li>
        });
        return (
            
                <div className="recipe-card">
                    <div className="recipe-card-image">
                        <img src={img} alt={title} />
                    </div>
                    <div className="recipe-card-content">
                        <h3 className="recipe-card-title">{title}</h3>
                        <h4>Ingredients:</h4>
                        <ul>
                            {ingredients}
                        </ul>
                        <h4>Instructions</h4>
                        <p>{instructions}</p>
                    </div>

                    <button 
                        className="recipe-card-button"
                        onClick={()=>onDelete(id)}
                        >
                            Delete
                        </button>
                </div>
            
            
        );
    }
}

export default Recipe;