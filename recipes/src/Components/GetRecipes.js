import { useAuth0 } from '@auth0/auth0-react';
import React, {useState, useEffect} from 'react';
import { Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
//https://www.themealdb.com/api.php
// Display the recipe
//meals {}
    //"strMeal - Name
    //"strMealThumb" - Pic
    //"strCategory" - What Kind of dish
    //strArea - more like cat - Itallian
    //strYoutube - A Youtube video of it being made
    //strInstructions - Instructions of how to make it
    //"strIngredient 1-20 - Ingredients 
    //"strMeasure 1-20 - Measurments for those ingredients
const GetRecipes = () => {
    const {isAuthenticated } = useAuth0();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        fetch("http://www.themealdb.com/api/json/v1/1/random.php")
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setMeals(data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
        }, [])
        if (error && isAuthenticated) {
            return <Container><div class="col-lg-6 mx-auto"><p class="lead mb-4">Error: {error.message}</p></div></Container>;
        } 
        else if (!isLoaded&& isAuthenticated) {
            return <Container><div class="col-lg-6 mx-auto"><p class="lead mb-4">Loading...</p></div></Container>;
        }
        else if (isAuthenticated) {  
            return (
                <Container>
                    <div class="row justify-content-md-center">
                        <div class="col-md-6 padding">
                            <div class="h-100 p-5 text-white bg-light rounded-3 lightestcard">
                                {meals.map(meal => (<h2>{meal.strMeal}</h2>))}
                                <img src={meals.map(meal => (<h2>{meal.strMealThumb}</h2>))} alt="meals.strMeal"/>
                            </div>
                        </div>
                    </div>
                    <div class="row align-items-md-stretch">
                        <div class="col-md-9 padding" >
                            <div class="h-100 p-5 text-white bg-light rounded-3 lightestcard">
                                <h2>Instructions</h2>
                                <p>{meals.strInstructions}</p>
                            </div>
                        </div>
                        <div class="col-md-3 padding" >
                            <div class="h-100 p-5 text-white bg-light rounded-3 lightestcard">
                                <h2>Ingredients</h2>
                                <ul>
                                    <li>Item 1 - Amount 1</li>
                                    <li>Item 2 - Amount 2</li>
                                    <li>Item 3 - Amount 3</li>
                                    <li>Item 4 - Amount 4</li>
                                </ul>
                            </div>
                        </div>
                    </div>
            </Container>
        );
    }
}
export default GetRecipes      