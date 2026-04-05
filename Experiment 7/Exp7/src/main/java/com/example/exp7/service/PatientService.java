package com.example.exp7.service;
import com.example.exp7.dto.PatientDTO;
import com.example.exp7.entity.Patient;
import com.example.exp7.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;
import java.util.List;
@Service
public class PatientService {
    @Autowired
    PatientRepository patientRepository;
    public PatientDTO createPatient(PatientDTO patientDTO) {
        Patient patient = mapToEntity(patientDTO);
        Patient savedPatient = patientRepository.save(patient);
        PatientDTO savedDto = mapToDto(savedPatient);
        return savedDto;
    }
    public Patient mapToEntity(PatientDTO patientDTO){
        Patient patient = new Patient();
        patient.setName(patientDTO.getName());
        patient.setAge(patientDTO.getAge());
        patient.setDisease(patientDTO.getDisease());
        return patient;
    }
    public PatientDTO mapToDto(Patient patient){
        PatientDTO dto = new PatientDTO();
        dto.setId(patient.getId());
        dto.setName(patient.getName());
        dto.setAge(patient.getAge());
        dto.setDisease(patient.getDisease());
        return dto;
    }
    public List<Patient> getAllPatients() {
        return patientRepository.findAll();
    }
    public List<Patient> findByDisease(String disease){
        return patientRepository.findByDisease(disease);
    }
    public Page<Patient> getAllPatientsWithPagination(int pageNo, int pageSize, String sortBy, String sortDir) {
        Sort sort = sortDir.equalsIgnoreCase("ASC")
                ? Sort.by(sortBy).ascending()
                : Sort.by(sortBy).descending();
        Pageable pageable = PageRequest.of(pageNo, pageSize, sort);
        return patientRepository.findAll(pageable);
    }
    public List<Patient> getPatientsByCursor(Long cursor, int pageSize, String sortDir) {
        Sort sort = sortDir.equalsIgnoreCase("ASC")
                ? Sort.by("id").ascending()
                : Sort.by("id").descending();
        Pageable pageable = PageRequest.of(0, pageSize, sort);
        if (cursor == null) {
            return patientRepository.findAll(pageable).getContent();
        }
        return patientRepository.findNextPatients(cursor, pageable);
    }
}