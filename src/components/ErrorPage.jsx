import { useRouteError } from "react-router-dom";

export const ErrorPage = () =>{
    const error = useRouteError();

    return(
        <div className="space-y-8">
            <div className='font-black text-4xl text-blue-900'>Customers</div>
            <div className="text-center my-4 bg-red-600 text-white font-bold p-3" >
                <p className="text-center">An error ocurred: </p>
                <p className="text-center">{error.statusText || error.message}</p>
            </div>


        </div>

    )


}