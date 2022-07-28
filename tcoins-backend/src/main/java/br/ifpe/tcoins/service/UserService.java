package br.ifpe.tcoins.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.ifpe.tcoins.exception.ResourceNotFoundException;
import br.ifpe.tcoins.model.User;
import br.ifpe.tcoins.repository.UserPlanoRepository;
import br.ifpe.tcoins.repository.UserRepository;

@Service
public class UserService {

	@Autowired
    UserRepository userRepository;
	@Autowired
	UserPlanoRepository userPlanoRepository;
	

	public void createUser(User user) {
		userRepository.save(user);
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

	public User findByEmail(String email) {
		return userRepository.findByEmail(email);
	}
}
