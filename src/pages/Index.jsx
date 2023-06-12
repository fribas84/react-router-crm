import React from 'react';
import { useLoaderData } from 'react-router-dom';

export const loader = ()=>{
  const customers = [
    {
      "name": "John Doe",
      "company": "Company 1",
      "email": "mail@maiol.com",
      "phone": "+112341234",
      "id": 1
    },
    {
      "name": "John Doe2",
      "company": "Company 2",
      "email": "mail@mail2.com",
      "phone": "+1123412342",
      "id": 2
    },
    {
      "name": "John Doe3",
      "company": "Company 3",
      "email": "mail@mail3.com",
      "phone": "+1123412343",
      "id": 3
    },
    {
      "name": "John Doe4",
      "company": "Company 4",
      "email": "mail@mail4.com",
      "phone": "+1123412344",
      "id": 4
    },
    {
      "name": "John Doe 5",
      "company": "Company 5",
      "email": "mail@mail5.com",
      "phone": "+1123412345",
      "id": 5
    }
 ]
  return customers;
}


export const Index = () => {

  const customers = useLoaderData();
  console.log(customers);

  return (
    <>
    <div className='font-black text-4xl text-blue-900'>Customers</div>
    <p className='mt-3'>Customer CRUD</p>
    </>
    
  )
}

