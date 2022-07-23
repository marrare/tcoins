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

	public Page<UserDTO> getAllUser(Integer page, Integer pageSize){
		Pageable reqPage = page == null ? Pageable.unpaged() : PageRequest.of(page - 1, pageSize);
		return  userRepository.findAllByDeletedFalse(reqPage).map(UserDTO::convertFromUser);

	}

	public User findByEmail(String email) {
		return userRepository.findByEmail(email);
	}
}
