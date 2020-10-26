package com.passwordmanager.demo.exceptions;

public class CustomNotFoundException extends RuntimeException {

    private String errorMessage;

    public CustomNotFoundException(String errorMessage){
        super();
        this.errorMessage = errorMessage;
    }

    public String getErrorMessage() {
        return errorMessage;
    }

    public void setErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
    }
}