package com.passwordmanager.demo.services;

import com.passwordmanager.demo.entities.password.Password;
import com.passwordmanager.demo.entities.password.PasswordRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class PasswordService {

    PasswordRepository passwordRepository;

    PasswordEncoder passwordEncoder;

    public PasswordService(PasswordRepository passwordRepository, PasswordEncoder passwordEncoder) {
        this.passwordRepository = passwordRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public Page<Password> getAllRecord(Pageable pageable){
        return passwordRepository.findAll(pageable);
    }
}
