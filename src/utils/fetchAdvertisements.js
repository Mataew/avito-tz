export const getAdvertisements = async (limit = 0, search = '') => {
    try {
        const data = await fetch(`${process.env.BACKEND_API_URL}/advertisements?_limit=${limit}&_page=1`);
        return await data.json();
    } catch (e) {
        console.log(e);
    }
};

export const getAdvertisementById = async (id) => {
    try {
        const data = await fetch(`${process.env.BACKEND_API_URL}/advertisements/${id}`);
        return await data.json();
    } catch(e) {
        console.log(e);
    }
};

export const postAdvertisement = async ({name, price, imageUrl, description}) => {
    try {
        await fetch(`${process.env.BACKEND_API_URL}/advertisements`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            },
            body: JSON.stringify({
                name,
                price,
                imageUrl,
                description
            })
        });

    } catch(e) {
        console.log(e);
    }
};

export const patchAdvertisement = async ({id,name, price, imageUrl, description}) => {
    try {
        await fetch(`${process.env.BACKEND_API_URL}/advertisements/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            },
            body: JSON.stringify({
                name,
                price,
                imageUrl,
                description
            })
        });
    } catch(e) {
        console.log(e);
    }
};

