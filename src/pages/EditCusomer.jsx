import { useNavigate, Form, useLoaderData, useActionData, redirect} from 'react-router-dom';
import CustomerForm from '../components/CustomerForm';
import Error from '../components/Error';
import { getCustomer,updateCustomer } from "../api/customers";

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

export const action = async ({request, params}) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    const errors = [];
    let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
    const email = formData.get('email');
    if(Object.values(data).includes('')){
        errors.push('All fields are mandatory!');
    }
    if(!regex.test(email)){
        errors.push('Invalid email!');
    }

    if(errors.length){
        return errors;
    }

    await updateCustomer(params.customerId,data);
    return redirect('/');
}
export const EditCusomer = () => {
    const navigate = useNavigate();
    const customer = useLoaderData();
    const errors = useActionData();

  return (
    <>

            <div className='font-black text-4xl text-blue-900'>Edit Customer</div>
       
            <div className='flex justify-end'>
                <button
                    className='bg-blue-800 text-white px-3 py-1 font-bold'
                    onClick={() => navigate(-1)}>
                    Back
                </button>
            </div>

            <div className='bg-white shadow rounded-sm md:w-3/4 mx-auto px-5 py-10 mt-20'>
                <Form
                    method='post'
    
                >

                    {errors?.length && errors.map( (error,i)=><Error key={i}>{error}</Error>)}
                    <CustomerForm 
                        customer={customer}
                    />
                    <input
                        type='submit'
                        className='mt-5 w-full bg-blue-800 p-3  font-bold text-white text-lg'
                        value='Save Changes'
                    />
                </Form>


            </div>
    </>
  )
}
