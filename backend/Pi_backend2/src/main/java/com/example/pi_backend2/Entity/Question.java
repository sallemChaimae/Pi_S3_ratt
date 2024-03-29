package com.example.pi_backend2.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Column(name = "type_id")
    private Long questionTypeId;

    @OneToMany( cascade = CascadeType.ALL)
    private List<Option> options;
    @ManyToOne
    @JoinColumn(name = "question_type_id")
    private QuestionType questionType;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "quiz_id",referencedColumnName = "id")
    @JsonIgnore
    private Quiz quiz;

    public Question(Long id, String name, Long questionTypeId, QuestionType questionType, Quiz quiz) {
        this.id = id;
        this.name = name;
        this.questionTypeId = questionTypeId;

        this.questionType = questionType;
        this.quiz = quiz;
    }
}
