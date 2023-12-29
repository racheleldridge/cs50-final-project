import http from "./http"

const getRandomRecipe = () => http.get("/random.php");


export default {
    getRandomRecipe
}