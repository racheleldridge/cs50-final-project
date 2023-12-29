import React, {useState, useEffect} from 'react';
import { Container} from 'react-bootstrap';
import '../recipe.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import recipes_api from "../api/recipes";
import { useNavigate } from 'react-router';
import LoggedInTitleContainer from '../components/LoggedInTitleContainer';

//https://www.themealdb.com/api.php
// Display the recipe
    //strYoutube - A Youtube video of it being made
    //strInstructions - Instructions of how to make it
    //"strIngredient 1-20 - Ingredients 
    //"strMeasure 1-20 - Measurments for those ingredients

const RandomRecipes = (props) => {
    const Navigate = useNavigate()
    const [meal, setMeal] = useState(null);

    useEffect(() => {
        if (!props.isAuthenticated) Navigate("/home")
        GetRandomRecipe()
    }, [props.isAuthenticated])

    const GetRandomRecipe = () => {
        let response = recipes_api.getRandomRecipe();
        response.then (
            response => {
                let meal_info = response.data.meals[0]
                setMeal(meal_info)
                
            }
        ).catch((err) => {
            console.log(err)
        })
    }

    const NewItem = () => {
        GetRandomRecipe()
    }

    return (
        <>
            <LoggedInTitleContainer retry={NewItem.bind(this)} />
            <Container>
                <div className="row justify-content-md-center">
                    <div className="col-md-6 padding">
                        <div className="h-100 p-5 rounded-3 lightestcard">
                            <center>
                                <h2>
                                    {meal && meal.strMeal}
                                </h2>
                            </center>
                            {meal && meal ?
                                <img className="recipe-image" src={meal && meal.strMealThumb ? meal.strMealThumb : null} alt={meal && meal.strMeal ? meal.strMeal : ""}/> 
                                : null }
                        </div>
                    </div>
                </div>
                <div className="row align-items-md-stretch">
                    <div className="col-md-9 padding" >
                        <div className="h-100 p-5 rounded-3 lightestcard">
                            <h2 className='label'>Instructions</h2>
                            <p>{meal && meal.strInstructions}</p>
                            <a target='_blank' href={meal && meal.strYoutube}>{meal && meal.strYoutube}</a>
                        </div>
                    </div>
                    <div className="col-md-3 padding" >
                        <div className="h-100 p-5 rounded-3 lightestcard">
                            <h2 className='label'>Ingredients</h2>
                            <ul>
                                {Array(20).fill(false).map((item, idx) => {
                                    return (
                                        <>
                                            {meal && meal["strIngredient" + (idx + 1)] !== "" && meal && meal["strIngredient" + (idx + 1)] !== null 
                                                ? <li>{meal && meal["strMeasure" + (idx + 1)]} {meal && meal["strIngredient" + (idx + 1)]}</li> 
                                                : null
                                            }
                                        </>
                                        
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default RandomRecipes      