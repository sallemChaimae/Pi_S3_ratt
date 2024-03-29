package com.example.pi_backend2.Controller;

import com.example.pi_backend2.Entity.Option;
import com.example.pi_backend2.Repository.OptionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/options")
public class OptionController {
    @Autowired

   private  OptionRepository optionRepository;

    public OptionController(OptionRepository optionRepository) {
        this.optionRepository = optionRepository;
    }

    @PostMapping("/post")
    public ResponseEntity<Option> createOption(@RequestBody Option option) {
        System.out.println(option);
        Option createdOption = optionRepository.save(option);
        return new ResponseEntity<>(createdOption, HttpStatus.CREATED);
    }

}
