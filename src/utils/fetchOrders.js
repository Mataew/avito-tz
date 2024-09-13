export const getOrders = async () => {
    try {
        const data = await fetch(`${process.env.BACKEND_API_URL}/orders`);
        return await data.json();
    } catch (e) {
        console.log(e);
    }
};
