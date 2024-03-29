package com.example.pi_backend2.Repository;

import com.example.pi_backend2.Entity.Prof;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TeacherRepository  extends JpaRepository<Prof,Long> {
    Prof findByCodeProf(String CodeProf);
}
