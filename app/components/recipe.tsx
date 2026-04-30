

export default function Recipe({params}:any){
    return (
        <RecipePage params={params} />
    )
}

function RecipePage({params}:any){
    let recipeData: any;
    console.log(params);
    let {id} = params.value;
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
    if(!recipeData){
        return <div>Reseptiä ei löytynyt</div>
    }else{
        return (
        <div>
            <h3>{recipeData.name}</h3>
            <p>{recipeData.ingredients}</p>
            <p>{recipeData.instructions}</p>
        </div>
    )
    }
    
}