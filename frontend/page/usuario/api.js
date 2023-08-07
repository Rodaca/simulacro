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


