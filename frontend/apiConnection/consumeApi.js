const url = "http://localhost:5000/api/categorias"

export const obtainCategories = async () => {

    try{

        const result = await fetch(url)
        const categorias = await result.json()
        return categorias

    }
    catch(error){
        console.log(error)
    }

}

