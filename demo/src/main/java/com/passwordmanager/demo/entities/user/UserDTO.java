package com.passwordmanager.demo.entities.user;

public class UserDTO {

    private long id;
    private String username;

    public UserDTO(User user){
        this.setId(user.getId());
        this.setUsername(user.getUsername());
    }

    public UserDTO() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}