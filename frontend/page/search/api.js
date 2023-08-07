const url = "http://localhost:8007/api/search/";


export async function filter(filtrar) {
    try {
        const response = await fetch(`${url}/productos/${filtrar}`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
    }
};

