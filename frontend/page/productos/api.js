const url = "http://localhost:8007/api/producto";

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

//Insert
export const add = async (registro) => {
    try {
      await fetch(`${url}/`, {
        method: "POST",
        body: JSON.stringify(registro),
        headers: {
          "Content-Type": "application/json",
        },
      });
      window.location = "almacen.html";
    } catch (error) {
        console.log(error);
    }
};

//Delete
export const del = async (id) =>{
    try {
        await fetch(`${url}/${id}`,{
            method: "DELETE",
            headers: {
                "Content-Type":"application/json",
            }
        });
        window.location.href = "almacen.html"
    } catch (error) {
        console.log(error);
    }
};

//Read One
export async function one(id) {
    try {
        const response = await fetch(`${url}/${id}`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
    }
};

//Update
export async function upd(data,id){
    try {
            await fetch(`${url}/${id}`,{
            method: "PUT",
            body: JSON.stringify(data),
            headers:{
                'Content-Type':"application/json",
            },
        });
        window.location.href = "almacen.html"
    } catch (error) {
        console.log(error);
    }
};