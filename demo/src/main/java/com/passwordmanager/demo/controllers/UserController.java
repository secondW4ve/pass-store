package com.passwordmanager.demo.controllers;

import com.passwordmanager.demo.entities.user.User;
import com.passwordmanager.demo.services.UserService;
import com.passwordmanager.demo.shared.GenericResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/1.0")
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping(path = "/users", consumes = "application/json")
    GenericResponse createUser(@Valid @RequestBody User user){
        System.out.println(user.getUsername());
        boolean userSaved = userService.save(user);
        if (!userSaved){
            return new GenericResponse("User with this username already exist");
        }

        return new GenericResponse("User saved");
    }


}
