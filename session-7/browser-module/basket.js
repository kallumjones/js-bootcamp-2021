import { getCourierByKey } from "./courier-utils.js";
import { getCustomerById } from "./customer-utils.js";

const transactionDetails = {
    courier: 'DHL',
    products: {
        name: 'Jean',
        price: 12.99,},
    customerId: 1
};

const courierAddress = getCourierByKey(transactionDetails.courier);
const customer = getCustomerById(transactionDetails.customerId);

console.log(courierAddress);
console.log(customer);