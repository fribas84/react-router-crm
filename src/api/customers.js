export const getCustomers = async () => {
   const response = await fetch(import.meta.env.VITE_API_URL);
   const result = await response.json();

   return(result);
}

export const addCustomer = async (customer) =>{
   try{
      const response = await fetch(import.meta.env.VITE_API_URL,{
         method:'POST',
         body:JSON.stringify(customer),
         headers:{
            'Content-Type': 'application/json'
         }
      })
      await response.json();
   }
   catch(error) {
      console.log(error)
   }
}


export const getCustomer = async (id) => {
   const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`);
   const result = await response.json();

   return(result);
}

export const updateCustomer = async (id,data)=>{
   try{
      const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`,{
         method:'PUT',
         body:JSON.stringify(data),
         headers:{
            'Content-Type': 'application/json'
         }
      })
      await response.json();
   }
   catch(error) {
      console.log(error)
   }
}

export const deleteCustomer = async (id)=>{
   try{
      const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`,{
         method:'DELETE',
         
      })
      await response.json();
   }
   catch(error) {
      console.log(error)
   }
}