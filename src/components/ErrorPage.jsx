import { useRouteError } from "react-router-dom";

export const ErrorPage = () =>{
    const error = useRouteError();

    return(
        <div className="space-y-8">
            <div className='font-black text-4xl text-blue-900'>Customers</div>
            <p className="text-center">An error ocurred</p>
            <p className="text-center">{error.message}</p>



        </div>

    )


}