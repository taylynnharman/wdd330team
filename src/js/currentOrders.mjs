import { getOrders } from "./externalServices.mjs";

export default async function currentOrders(id, token) {
    try {
        const orders = await getOrders(token);
        const orderContainer = document.getElementById(id);
        orderContainer.innerHTML = orders.map(orderTemplate).join("");
    } catch (error) {
        console.error(error);
    }



    function orderTemplate(order) {
        if (order.items && order.items.length != "NaN" && order.items.length != "undefined") {
            return `<tr><td>${order.id}</td>
            <td>${new Date(order.orderDate).toLocaleDateString("en-US")}</td>
            <td>${order.items.length}</td>
            <td>${order.orderTotal}</td></tr>`;
        }
    }
}