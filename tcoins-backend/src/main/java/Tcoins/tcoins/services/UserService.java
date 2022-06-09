package Tcoins.tcoins.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Tcoins.tcoins.DAO.UserDAO;
import Tcoins.tcoins.entities.User;

import java.util.List;

@Service
public class UserService {

	@Autowired
    UserDAO userDao;
	
	public void createUser(User user) {
		userDao.save(user);
	}
	public void deleteUser(Long id) {
		userDao.deleteById(id);
	}

	public void updateUser(User user){
		userDao.save(user);
	}
	public User getUserById(Long id){
		return userDao.findById(id).get();
	}

	public List<User> getAllUser(){
		return  userDao.findAll();
	}
}
