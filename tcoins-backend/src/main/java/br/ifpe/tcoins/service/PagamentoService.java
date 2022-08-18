package br.ifpe.tcoins.service;

import br.ifpe.tcoins.dto.request.CardPaymentDTO;
import br.ifpe.tcoins.dto.response.PaymentResponseDTO;
import com.mercadopago.MercadoPagoConfig;
import com.mercadopago.client.common.IdentificationRequest;
import com.mercadopago.client.payment.*;
import com.mercadopago.exceptions.MPApiException;
import com.mercadopago.exceptions.MPException;
import com.mercadopago.resources.payment.Payment;
import org.springframework.stereotype.Service;

@Service
public class PagamentoService {


    public PaymentResponseDTO processPayment(CardPaymentDTO cardPaymentDTO) throws MPException {
            try {

                MercadoPagoConfig.setAccessToken("TEST-8731198856613850-081813-af82bd2486355b4b2dc01da08ee2d903-59274521");
                PaymentClient paymentClient = new PaymentClient();
                PaymentCreateRequest paymentCreateRequest =
                        PaymentCreateRequest.builder()
                                .transactionAmount(cardPaymentDTO.getValor())
                                .token(cardPaymentDTO.getToken())
                                .description(cardPaymentDTO.getProductDescription())
                                .installments(cardPaymentDTO.getParcelas())
                                .paymentMethodId(cardPaymentDTO.getBandeiraCartao())
                                .payer(
                                        PaymentPayerRequest.builder()
                                                .email(cardPaymentDTO.getClienteDTO().getEmail())
                                                .identification(
                                                        IdentificationRequest.builder()
                                                                .type(cardPaymentDTO.getClienteDTO().getIdentification().getType())
                                                                .number(cardPaymentDTO.getClienteDTO().getIdentification().getNumber())
                                                                .build())
                                                .build())
                                .build();

                Payment createdPayment = paymentClient.create(paymentCreateRequest);

                return new PaymentResponseDTO(
                        createdPayment.getId(),
                        String.valueOf(createdPayment.getStatus()),
                        createdPayment.getStatusDetail());
            } catch (MPApiException apiException) {
                System.out.println(apiException.getApiResponse().getContent());
                throw new MPException(apiException.getApiResponse().getContent());
            } catch (MPException exception) {
                System.out.println(exception.getMessage());
                throw new MPException(exception.getMessage());
            }
    }


}



