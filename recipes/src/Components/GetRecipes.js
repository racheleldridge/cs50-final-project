import { useAuth0 } from '@auth0/auth0-react';
import React, {useState, useEffect} from 'react';
// import { Container} from 'react-bootstrap';
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
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/")
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setUsers(data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
        }, [])
        if (error) {
            return <div>Error: {error.message}</div>;
        } 
        else if (!isLoaded) {
            return <div>Loading...</div>;
        }
        else {
            return (
            <ul>
                {users.map(user => (
                <li key={user.id}>
                    {user.name} 
                </li>
                ))}
            </ul>
        );
    }
}
export default GetRecipes      