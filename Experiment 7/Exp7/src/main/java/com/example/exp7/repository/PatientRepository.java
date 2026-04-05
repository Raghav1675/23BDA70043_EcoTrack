package com.example.exp7.repository;
import com.example.exp7.entity.Patient;
import org.springframework.data.domain.*;
import org.springframework.data.jpa.repository.*;
import java.util.List;
public interface PatientRepository extends JpaRepository<Patient, Long> {
    List<Patient> findByDisease(String disease);
    @Query("SELECT p FROM Patient p WHERE p.id > :cursor ORDER BY p.id ASC")
    List<Patient> findNextPatients(Long cursor, Pageable pageable);
}