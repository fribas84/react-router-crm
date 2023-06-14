import { getCustomer } from "../api/customers";

export const loader = async ({params})=>{
    const customer = await getCustomer(params.customerId);
    console.log(customer);
    return null;
}
export const EditCusomer = () => {
  return (
    <div>EditCusomer</div>
  )
}
