package com.passwordmanager.demo.configuration;

import com.passwordmanager.demo.entities.user.User;
import com.passwordmanager.demo.entities.user.UserRepository;
import com.passwordmanager.demo.exceptions.CustomNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationUserService implements UserDetailsService {

    @Autowired
    UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(s);
        if (user == null){
            throw new CustomNotFoundException("User with this username not found");
        }
        return user;
    }
}
