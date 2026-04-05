package com.example.exp7.dto;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;
@Data
public class PatientDTO {
    private Long id;
    @NotBlank(message = "Name is required")
    private String name;
    @Min(value = 1, message = "Age must be greater than 0")
    private int age;
    @NotBlank(message = "Disease field should not be empty")
    private String disease;
}