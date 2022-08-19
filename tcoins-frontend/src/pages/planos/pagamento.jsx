// import React, { useEffect, useState } from 'react';
// function Pagamento() {
//
//     const mp = new MercadoPago("YOUR_PUBLIC_KEY");
//
//     const cardForm = mp.cardForm({
//         amount: "100.5",
//         iframe: true,
//         form: {
//             id: "form-checkout",
//             cardNumber: {
//                 id: "form-checkout__cardNumber",
//                 placeholder: "Número do cartão",
//             },
//             expirationDate: {
//                 id: "form-checkout__expirationDate",
//                 placeholder: "MM/YY",
//             },
//             securityCode: {
//                 id: "form-checkout__securityCode",
//                 placeholder: "Código de segurança",
//             },
//             cardholderName: {
//                 id: "form-checkout__cardholderName",
//                 placeholder: "Titular do cartão",
//             },
//             issuer: {
//                 id: "form-checkout__issuer",
//                 placeholder: "Banco emissor",
//             },
//             installments: {
//                 id: "form-checkout__installments",
//                 placeholder: "Parcelas",
//             },
//             identificationType: {
//                 id: "form-checkout__identificationType",
//                 placeholder: "Tipo de documento",
//             },
//             identificationNumber: {
//                 id: "form-checkout__identificationNumber",
//                 placeholder: "Número do documento",
//             },
//             cardholderEmail: {
//                 id: "form-checkout__cardholderEmail",
//                 placeholder: "E-mail",
//             },
//         },
//         callbacks: {
//             onFormMounted: error => {
//                 if (error) return console.warn("Form Mounted handling error: ", error);
//                 console.log("Form mounted");
//             },
//             onSubmit: event => {
//                 event.preventDefault();
//
//                 const {
//                     paymentMethodId: payment_method_id,
//                     issuerId: issuer_id,
//                     cardholderEmail: email,
//                     amount,
//                     token,
//                     installments,
//                     identificationNumber,
//                     identificationType,
//                 } = cardForm.getCardFormData();
//
//                 fetch("localhost:8080/process_payment", {
//                     method: "POST",
//                     headers: {
//                         "Content-Type": "application/json",
//                     },
//                     body: JSON.stringify({
//                         token,
//                         issuer_id,
//                         payment_method_id,
//                         transaction_amount: Number(amount),
//                         installments: Number(installments),
//                         description: "Descrição do produto",
//                         payer: {
//                             email,
//                             identification: {
//                                 type: identificationType,
//                                 number: identificationNumber,
//                             },
//                         },
//                     }),
//                 });
//             },
//             onFetching: (resource) => {
//                 console.log("Fetching resource: ", resource);
//
//                 // Animate progress bar
//                 const progressBar = document.querySelector(".progress-bar");
//                 progressBar.removeAttribute("value");
//
//                 return () => {
//                     progressBar.setAttribute("value", "0");
//                 };
//             }
//         },
//     });
//
//
//     const form = document.getElementById(cardForm);
//     form.appendChild(script);
//
//
//
//     return(
//
//     <form id="form-checkout">
//         <div id="form-checkout__cardNumber" className="container"/>
//         <div id="form-checkout__expirationDate" className="container"/>
//         <div id="form-checkout__securityCode" className="container"/>
//         <input type="text" id="form-checkout__cardholderName"/>
//         <select id="form-checkout__issuer"/>
//         <select id="form-checkout__installments"/>
//         <select id="form-checkout__identificationType"/>
//         <input type="text" id="form-checkout__identificationNumber"/>
//         <input type="email" id="form-checkout__cardholderEmail"/>
//
//         <button type="submit" id="form-checkout__submit">Pagar</button>
//         <progress value="0" className="progress-bar">Carregando...</progress>
//     </form>
// )
// }
//
// export default Pagamento;