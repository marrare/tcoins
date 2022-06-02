package Tcoins.tcoins.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Tcoins.tcoins.DAO.UsuarioDAO;
import Tcoins.tcoins.entities.User;

@Service
public class UserService {

	@Autowired
	UsuarioDAO usuarioDao;
	
	public void createUser(User user) {
		usuarioDao.save(user);
	}
	public void deleteUser(Long id) {
		usuarioDao.deleteById(id);
	}

	public void updateUser(User user){
		usuarioDao.save(user);
	}
	public User getUserById(Long id){
		return usuarioDao.findById(id).get();
	}
}
