export default function Recipe(){
    return (
        <RecipePage id="1" />
    )
}

function RecipePage(id: string){
    let recipeData: any;
    fetch(`http://localhost:8000/recipes/${id}`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        recipeData = data;
    });
    return (
        <div>
            <h3>{recipeData.name}</h3>
            <p>{recipeData.ingredients}</p>
            <p>{recipeData.instructions}</p>
        </div>
    )
}