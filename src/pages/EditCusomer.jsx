import { getCustomer } from "../api/customers";

export const loader = async ({params})=>{
    const customer = await getCustomer(params.customerId);
    if(Object.values(customer).length===0){
        throw new Response('',{
            status:404,
            statusText: 'Invalid Customer Id'
        })
    }

    return customer;
}
export const EditCusomer = () => {

  return (
    <div>EditCusomer</div>
  )
}
