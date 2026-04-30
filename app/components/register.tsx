"use client";
export default function Register() {
    return (
        <RegisterForm />
    )
}

function RegisterForm() {
    let handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        let formData = new FormData(event.currentTarget);
        let username = formData.get('username') as string;
        let displayName = formData.get('displayName') as string;
        let password = formData.get('password') as string;
        fetch('http://localhost:8000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "username": username, "display_name": displayName, "password": password})
        })
        .then(response => {
            if(response.status === 200){
                window.location.href = '/login';
            }
            else{
                alert('Rekisteröinti epäonnistui');
            }
        })


    }
    return (
        <div>
        <div>
            <h3>Rekisteröidy</h3>
        </div>
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Käyttäjänimi:</label>
                    <input type="text" id="username" name="username" required />
                </div>
                <div>
                    <label htmlFor="displayName">Nimimerkki:</label>
                    <input type="text" id="displayName" name="displayName" required />
                </div>
                <div>
                    <label htmlFor="password">Salasana:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit">Rekisteröidy</button>
            </form>
        </div>
        </div>
    )
}