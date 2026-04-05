package com.example.exp7.controller;
import com.example.exp7.dto.PatientDTO;
import com.example.exp7.entity.Patient;
import com.example.exp7.service.PatientService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.data.domain.Page;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
@RestController
@RequestMapping("/v1/patient")
public class PatientController {
    PatientService patientService;
    public PatientController(PatientService patientService){
        this.patientService = patientService;
    }
    @PostMapping
    public ResponseEntity<?> createPatient(@Valid @RequestBody PatientDTO patientDTO, BindingResult result){
        if (result.hasErrors()) {
            Map<String, String> errors = new HashMap<>();
            result.getFieldErrors().forEach(error ->
                    errors.put(error.getField(), error.getDefaultMessage())
            );
            return ResponseEntity.badRequest().body(errors);
        }
        PatientDTO dto =  patientService.createPatient(patientDTO);
        return ResponseEntity.ok(dto);
    }
    @GetMapping
    public List<Patient> getAllPatients(){
        return patientService.getAllPatients();
    }
    @GetMapping("/disease")
    public List<Patient> getPatient(@RequestParam String disease){
        return patientService.findByDisease(disease);
    }
    @GetMapping("/offset")
    public ResponseEntity<Page<Patient>> getPatientsPage(
            @RequestParam(value = "pageNo", defaultValue = "0") int pageNo,
            @RequestParam(value = "pageSize", defaultValue = "5") int pageSize,
            @RequestParam(value = "sortBy", defaultValue = "id") String sortBy,
            @RequestParam(value = "sortDir", defaultValue = "ASC") String sortDir
    ) {
        return ResponseEntity.ok(
                patientService.getAllPatientsWithPagination(pageNo, pageSize, sortBy, sortDir)
        );
    }
    @GetMapping("/cursor")
    public ResponseEntity<?> getPatientsCursor(
            @RequestParam(value = "cursor", required = false) Long cursor,
            @RequestParam(value = "pageSize", defaultValue = "5") int pageSize,
            @RequestParam(value = "sortDir", defaultValue = "ASC") String sortDir
    ) {
        List<Patient> data = patientService.getPatientsByCursor(cursor, pageSize,sortDir);
        Map<String, Object> res = new HashMap<>();
        res.put("data", data);
        if (!data.isEmpty()) {
            res.put("nextCursor", data.get(data.size() - 1).getId());
        }
        return ResponseEntity.ok(res);
    }
}
