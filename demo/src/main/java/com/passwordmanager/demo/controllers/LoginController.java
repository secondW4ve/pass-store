package com.passwordmanager.demo.controllers;

import com.passwordmanager.demo.entities.user.User;
import com.passwordmanager.demo.entities.user.UserDTO;
import com.passwordmanager.demo.shared.CurrentUser;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {

    @PostMapping(path = "/api/1.0/login")
    UserDTO handleLogin(@CurrentUser User loggedInUser){
        return new UserDTO(loggedInUser);
    }
}
