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
        if (user == null)
            throw new ResourceNotFoundException("Usuario não encontrado");

        Long valorAtual = user.getTcoins();

        if (tcoins > valorAtual)
            throw new ResourceNotFoundException("Não há moedas sufucientes");

        user.setTcoins(valorAtual - tcoins);
        userRepository.save(user);

    }

    public void addTcoins(Long userId, Integer quantidade){

    User user = userRepository.findByIdAndDeletedFalse(userId);
        if (user == null)
            throw new ResourceNotFoundException("Usuario não encontrado");
    Long valorAtual = user.getTcoins();

        if (quantidade < 0)
            return;

        user.setTcoins(valorAtual + quantidade);
        userRepository.save(user);
    }
}
