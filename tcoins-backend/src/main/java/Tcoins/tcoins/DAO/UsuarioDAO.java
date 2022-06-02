package Tcoins.tcoins.DAO;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import Tcoins.tcoins.entities.User;

@Repository
public interface UsuarioDAO extends JpaRepository<User, Long> {
	
	public User findByUsuario(User user);
	
}
