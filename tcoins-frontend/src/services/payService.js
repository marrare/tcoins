// import { useMercadopago } from 'react-sdk-mercadopago';
//
// import React, { useEffect, useState } from 'react';
// import { useParams } from "react-router-dom";
//
// const FORM_ID = 'payment-form';
//
// export default function PayService() {
//     const { id } = useParams(); // id de producto
//     const [preferenceId, setPreferenceId] = useState(null);
//
//
//     useEffect(() => {
//             // con el preferenceId en mano, inyectamos el script de mercadoPago
//             const script = document.createElement('script');
//             script.type = 'text/javascript';
//             script.src =
//                 'https://www.mercadopago.cl/integrations/v1/web-payment-checkout.js';
//             script.c
//
//     }, [preferenceId]);
//
//     return (
//         <form id={FORM_ID} method="GET" />
//
//
//
//     );
// }
