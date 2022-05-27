package Tcoins.tcoins.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Tcoins.tcoins.DAO.UsuarioDAO;
import Tcoins.tcoins.entities.Usuario;

@Service
public class UserService {

	@Autowired
	UsuarioDAO usuarioDao;
	
	public void createUser(Usuario user) {
		usuarioDao.save(user);
	}
	public void deleteUser(Long id) {
		usuarioDao.deleteById(id);
	}
	
}
