package com.passwordmanager.demo.shared;

import com.passwordmanager.demo.error.ApiError;
import com.passwordmanager.demo.exceptions.CustomNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class ExceptionHandlerAdvice {

    @ExceptionHandler({MethodArgumentNotValidException.class})
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    ApiError handleValidationException(MethodArgumentNotValidException exception, HttpServletRequest request){
        ApiError apiError = new ApiError(400, "Validation Error", request.getServletPath());
        Map<String, String> validationErrors = getValidationErrorsFrom(exception);
        apiError.setValidationErrors(validationErrors);
        return apiError;
    }

    private Map<String, String> getValidationErrorsFrom(MethodArgumentNotValidException exception) {
        BindingResult result = exception.getBindingResult();

        Map<String, String> validationErrors = new HashMap<>();

        for(FieldError fieldError : result.getFieldErrors()){
            validationErrors.put(fieldError.getField(), fieldError.getDefaultMessage());
        }
        return validationErrors;
    }
}
