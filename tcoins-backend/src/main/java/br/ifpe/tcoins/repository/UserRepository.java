package br.ifpe.tcoins.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.ifpe.tcoins.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

}