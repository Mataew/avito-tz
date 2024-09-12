export const getOrders = async () => {
    try {
        let data = await fetch(`http://localhost:8000/orders`);
        return await data.json()
    } catch (e) {
        console.log(e)
    }
}