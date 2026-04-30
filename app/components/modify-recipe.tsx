"use client";
export default function ModifyRecipe(){
    return (
        <ModifyRecipePage />
    )
}

function ModifyRecipePage(){
    let handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        let formData = new FormData(event.currentTarget);
        let name = formData.get('name') as string;
        let ingredients = formData.get('ingredients') as string;
        let instructions = formData.get('instructions') as string;
        let id = JSON.parse(atob(localStorage.getItem('token')?.split('.')[1] || '')).user_id;
        fetch('http://localhost:8000/recipes/add', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({ "name": name, "ingredients": ingredients, "instructions": instructions, "acc_id": id})
        })
        .then(response => {
            if(response.status === 200){
                //window.location.href = '/recipes';
            }
            else{
                alert('Reseptin lisääminen epäonnistui');
            }
        })
    }
    return (
        <div>
            <h3>Lisää Resepti</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Reseptin Nimi:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div>
                    <label htmlFor="ingredients">Ainesosat:</label>
                    <textarea id="ingredients" name="ingredients" required></textarea>
                </div>
                <div>
                    <label htmlFor="instructions">Ohjeet:</label>
                    <textarea id="instructions" name="instructions" required></textarea>
                </div>
                <button type="submit">Lisää Resepti</button>
            </form>
        </div>
    )
}