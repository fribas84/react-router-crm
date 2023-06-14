export const getCustomers = async () => {
   const response = await fetch(import.meta.env.VITE_API_URL);
   const result = await response.json();

   return(result);
}

export const addCustomer = async (customer) =>{

   console.log(customer);
}