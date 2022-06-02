package Tcoins.tcoins.DAO;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import Tcoins.tcoins.entities.User;

@Repository
public interface UserDAO extends JpaRepository<User, Long> {
	
	public User findByUser(User user);
	
}
