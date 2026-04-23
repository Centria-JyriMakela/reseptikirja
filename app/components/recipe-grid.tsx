export default function RecipeGrid(){
    return (
        <RecipesGrid />
    )
}
function RecipesGrid(){
    let recipes: any[] = [];
    fetch('http://localhost:8000/recipes',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        recipes = data;
    });
    return (
        <div>
            {recipes.map(recipe => (
                <div key={recipe.id}>
                    <h3>{recipe.name}</h3>
                    <p>{recipe.ingredients}</p>
                    <p>{recipe.instructions}</p>
                    <a href={`/recipes/${recipe.id}`}>Lue Lisää</a>
                </div>
            ))}
        </div>
    )
}