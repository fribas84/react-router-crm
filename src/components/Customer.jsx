
import { useNavigate,redirect,Form } from "react-router-dom";
import { deleteCustomer } from "../api/customers";

export const action = async ({params}) =>{
    await deleteCustomer(params.customerId);
    return redirect('/');

}

const Customer = ({ customer }) => {
    const navigate = useNavigate();
    const { name, company, email, phone, id } = customer;

    return (
        <tr className="border-b">
            <td className='p-2 space-x-2'>
                <p className="text-2xl text-gray-800">{name}</p>
                <p>{company}</p>
            </td>
            <td className='p-2'>
                <p className="text-gray-600"><span className="text-gray-800 font-bold">Email: </span>{email}</p>
                <p className="text-gray-600"><span className="text-gray-800 font-bold">Phone: </span>{phone}</p>

            </td>

            <td className='p-2 flex gap-2'> 
                <button type="button" 
                    className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs "
                    onClick={()=>navigate(`/customers/${id}/edit`)}>
                    Edit
                </button>
                <Form
                    method="post"
                    action={`/customers/${id}/delete`}
                    onSubmit={(e)=>{
                        if(!confirm(`Do you want to delete Customer ${name} from ${company}?`)){
                            e.preventDefault();
                        }
                    }}>
                <button type="submit" className="text-red-600 hover:text-red-700 uppercase font-bold text-xs">
                   Delete 
                </button>

                </Form>

            </td>

        </tr>
    )
}

export default Customer