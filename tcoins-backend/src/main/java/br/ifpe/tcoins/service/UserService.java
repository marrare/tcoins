package br.ifpe.tcoins.service;

import br.ifpe.tcoins.dto.response.UserDTO;
import br.ifpe.tcoins.exception.ResourceNotFoundException;
import br.ifpe.tcoins.model.User;
import br.ifpe.tcoins.repository.UserPlanoRepository;
import br.ifpe.tcoins.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.Random;

@Service
public class UserService {

	@Autowired
    UserRepository userRepository;
	@Autowired
	UserPlanoRepository userPlanoRepository;
	

	public void createUser(User user) {
		String code = this.generateCodigoUser();
		User usuario = this.userRepository.findByCodigoUser(code);
		if (usuario == null) {
			user.setCodigoUser(code);
			userRepository.save(user);
		}else
			this.createUser(user);
	}
	public void deleteUser(Long id) throws Exception {
			User user = userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Usuario não existe"));
			user.setDeleted(true);
			userRepository.save(user);
	}

	public void updateUser(User user){
		userRepository.save(user);
	}

	public User getUserById(Long id){
		return userRepository.findByIdAndDeletedFalse(id);
	}

	public Page<UserDTO> getAllUser(Integer page, Integer pageSize){
		Pageable reqPage = page == null ? Pageable.unpaged() : PageRequest.of(page - 1, pageSize);
		return  userRepository.findAllByDeletedFalse(reqPage).map(UserDTO::convertFromUser);

	}

	public User findByEmail(String email) {
		return userRepository.findByEmail(email);
	}

	public String generateCodigoUser(){
		// 48 == qualquer digito Alphanumeric (filtro aplicado para apenas letras e numeros)
		// 97 == apenas letras
		Random random = new Random();
		return random.ints(48, 122)
				.filter(i -> (i <= 57 || i >= 65) && (i <= 90 || i >= 97))
				.limit(4) // tamanho do retorno
				.collect(StringBuilder::new, StringBuilder::appendCodePoint, StringBuilder::append)
				.toString().toUpperCase();
	}
}
