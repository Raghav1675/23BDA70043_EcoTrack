package com.example.patient.service;

import com.example.patient.entity.Patient;
import com.example.patient.repository.PatientRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PatientService {

    private final PatientRepository repo;

    public PatientService(PatientRepository repo) {
        this.repo = repo;
    }

    public Patient create(Patient patient) {
        return repo.save(patient);
    }

    public List<Patient> getAll() {
        return repo.findAll();
    }

    public Patient getById(Long id) {
        return repo.findById(id).orElseThrow();
    }

    public Patient update(Long id, Patient patient) {
        Patient existing = getById(id);
        existing.setName(patient.getName());
        existing.setAge(patient.getAge());
        existing.setDisease(patient.getDisease());
        existing.setContact(patient.getContact());
        return repo.save(existing);
    }

    public void delete(Long id) {
        repo.deleteById(id);
    }
}