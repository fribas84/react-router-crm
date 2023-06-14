import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Customer from '../components/Customer';
import { getCustomers } from '../api/customers';

export const loader = ()=>{
  const customers = getCustomers();
  return customers;
}


export const Index = () => {

  const customers = useLoaderData();

  return (
    <>
    <div className='font-black text-4xl text-blue-900'>Customers</div>
    <p className='mt-3'>Customer CRUD</p>

    {customers.length ? (
      <table className='w-full bg-white shadow mt-5 table-auto'> 
        <thead className='bg-blue-800 text-white'>
          <tr>
            <th className='p-2'>Customer</th>
            <th className='p-2'>Contact</th>
            <th className='p-2'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map(customer =>(
            <Customer 
              customer={customer}
              key = {customer.id}
            />
          ))}
        </tbody>
      </table>
    ) 
    :(
      <p className='text-centered mt-10'> No customer data</p>
    )}
    </>
    
  )
}

