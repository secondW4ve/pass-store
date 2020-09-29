package com.passwordmanager.demo.entities.password;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PasswordRepository extends JpaRepository<Password, Long> {

    Password findByPlace(String place);
}
