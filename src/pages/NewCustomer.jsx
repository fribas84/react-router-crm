import {useNavigate} from 'react-router-dom';
import CustomerForm from '../components/CustomerForm';
export const NewCustomer = () => {
    const navigate = useNavigate();
  return (
    <>
    <div className='font-black text-4xl text-blue-900'>New Customer</div>
    <p className='mt-3'>Create new Customer:</p>

    <div className='flex justify-end'>
        <button 
        className='bg-blue-800 text-white px-3 py-1 font-bold'
        onClick={() => navigate(-1)}>
            Back
        </button>
    </div>

    <div className='bg-white shadow rounded-sm md:w-3/4 mx-auto px-5 py-10 '>
        <CustomerForm />

    </div>
    </>
  )
}
