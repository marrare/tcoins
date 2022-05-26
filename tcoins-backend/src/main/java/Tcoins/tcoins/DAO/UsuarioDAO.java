package Tcoins.tcoins.DAO;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import Tcoins.tcoins.entities.Usuario;

@Repository
public interface UsuarioDAO extends JpaRepository<Usuario, Long> {
	
	public Usuario findByUsuario(Usuario usuario);
	
}
