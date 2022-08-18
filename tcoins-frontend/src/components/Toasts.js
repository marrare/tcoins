import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

const Toasts = {
    //TOASTS
    sucesso(message){
        toast.success(message, {
            position: "top-right",
            autoClose: 6000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    },
    erro(message){
        toast.error(message, {
            position: "top-right",
            autoClose: 6000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    } 
   
}
export default Toasts;