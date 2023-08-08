const url="http://localhost:8007/api/usuario"

//Read
export const all = async () =>{
    try {
        const data = await fetch(url);
        const jsonData = data.json();
        return jsonData;
    } catch (error) {
        console.log(error);
    }
}
/* login */
export const login = async (datos) => {
    try {
        const response = await fetch(`${url}/login`, {
            method: 'post',
            body: JSON.stringify(datos),
            headers: { 'Content-Type': 'application/json' }
        });

        const data = await response.json();

        if (response.ok) {
            return data;
        }
    } catch (error) {
        console.log(error);
    }
};


