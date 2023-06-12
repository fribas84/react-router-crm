
const Customer = ({ customer }) => {
    const { name, company, email, phone, id } = customer;

    return (
        <tr>
            <td className='text-center'>{name}</td>
            <td className='text-center'>{email}</td>

        </tr>
    )
}

export default Customer