package br.ifpe.tcoins.service;

import br.ifpe.tcoins.model.User;
import br.ifpe.tcoins.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

@Service
public class UserService {

	@Autowired
    UserRepository userRepository;
	

	public void createUser(User user) {
		userRepository.save(user);
	}
	public void deleteUser(Long id) {
		userRepository.deleteById(id);
	}

	public void updateUser(User user){
		userRepository.save(user);
	}

	public User getUserById(Long id){
		return userRepository.findById(id).get();
	}

	public Page<User> getAllUser(int page, int pageSize){
		return  userRepository.findAll(PageRequest.of(page - 1 ,pageSize));

	}

	public User findByEmail(String email) {
		return userRepository.findByEmail(email);
	}
}
