package br.ifpe.tcoins.service;

import br.ifpe.tcoins.dto.response.PlanosDTO;
import br.ifpe.tcoins.exception.ResourceNotFoundException;
import br.ifpe.tcoins.model.Planos;
import br.ifpe.tcoins.model.User;
import br.ifpe.tcoins.model.UserPlano;
import br.ifpe.tcoins.repository.PlanosRepository;
import br.ifpe.tcoins.repository.UserPlanoRepository;
import br.ifpe.tcoins.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class PlanoService {

    @Autowired
    private PlanosRepository planosRepository;
    @Autowired
    private UserRepository userRepository;

    @Autowired
    UserPlanoRepository userPlanoRepository;

    public List<PlanosDTO> getPlanos(){

       return planosRepository.findAll().stream().map(PlanosDTO::convertFromPlano).collect(Collectors.toList());

    }

    public void atualizarPlanoUsuario(Long userId, Long planoId, Integer duracao ) {
        User user = userRepository.findByIdAndDeletedFalse(userId);
        if (user == null)
            throw new ResourceNotFoundException("Usuario não encontrado");

        Planos planos = planosRepository.findById(planoId).orElseThrow(
                () -> new ResourceNotFoundException("Plano não encontrado")
        );



        UserPlano userPlano = new UserPlano();
        userPlano.setPlano(planos);
        Calendar data = Calendar.getInstance();
        data.add(Calendar.MONTH, duracao);
        userPlano.setDataExpiracao(data.getTime());

        userPlano.setPrecoPago(planos.getPreco());
        userPlano.setUserId(user);
        user.setPlanoVigente(userPlano);

        userPlanoRepository.save(userPlano);
        userRepository.save(user);

    }
}
