package com.passwordmanager.demo.controllers;

import com.passwordmanager.demo.entities.password.Password;
import com.passwordmanager.demo.entities.user.User;
import com.passwordmanager.demo.services.PasswordService;
import com.passwordmanager.demo.shared.CurrentUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/1.0")
public class PasswordController {

    @Autowired
    PasswordService passwordService;

    @PostMapping("/user")
    void savePassword(@Valid @RequestBody Password password, @CurrentUser User user){

    }
}
