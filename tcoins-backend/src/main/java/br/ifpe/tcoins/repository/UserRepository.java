package br.ifpe.tcoins.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import br.ifpe.tcoins.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

    public Page<User> findAll(Pageable pageable);

    public  User findByEmail(String email);
}