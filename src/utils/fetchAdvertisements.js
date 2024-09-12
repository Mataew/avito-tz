export const getAdvertisements = async () => {
    try {
        let data = await fetch('http://localhost:8000/advertisements');
        return await data.json()
    } catch(e) {
        console.log(e)
    }
}

export const getAdvertisementById = async (id) => {
    try {
        let data = await fetch(`http://localhost:8000/advertisements/${id}`);
        return await data.json()
    } catch(e) {
        console.log(e)
    }
}

export const postAdvertisement = async ({name, price, imageUrl, description}) => {
    try {
        await fetch('http://localhost:8000/advertisements', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                name,
                price,
                imageUrl,
                description
            })
        });

        console.log('создан')

    } catch(e) {
        console.log(e)
    }
}

export const patchAdvertisement = async ({id,name, price, imageUrl, description}) => {
    try {
        await fetch(`http://localhost:8000/advertisements/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                name,
                price,
                imageUrl,
                description
            })
        });

        console.log('создан')

    } catch(e) {
        console.log(e)
    }
}

