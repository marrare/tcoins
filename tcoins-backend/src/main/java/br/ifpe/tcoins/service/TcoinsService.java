package br.ifpe.tcoins.service;

import br.ifpe.tcoins.exception.ResourceNotFoundException;
import br.ifpe.tcoins.model.User;
import br.ifpe.tcoins.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TcoinsService {

    @Autowired
    UserRepository userRepository;


    public void usarTcoins(Long userId, Integer tcoins) {
        User user = userRepository.findByIdAndDeletedFalse(userId);
        Long valorAtual = user.getTcoins();

        if (tcoins > valorAtual)
            throw new ResourceNotFoundException("Não há moedas sufucientes");

        user.setTcoins(valorAtual - tcoins);
        userRepository.save(user);

    }
}
