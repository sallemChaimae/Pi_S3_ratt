package com.example.pi_backend2.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;

import lombok.Data;
import lombok.NoArgsConstructor;
@Table(name = "option_entity")
@Entity
@Data
@NoArgsConstructor

public class Option {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "question_id" ,referencedColumnName = "id")
    @JsonIgnore
    private Question question;
    private String name;
    @JsonIgnore
    private boolean isAnswer;

    public Option( Question question, String name, boolean isAnswer) {

        this.question = question;
        this.name = name;
        this.isAnswer = isAnswer;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Question getQuestion() {
        return question;
    }

    public void setQuestion(Question question) {
        this.question = question;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
    @JsonProperty("isAnswer")
    public boolean getIsAnswer() {
        return this.isAnswer;
    }

    public void setIsAnswer(boolean isAnswer) {
        this.isAnswer = isAnswer;
    }
}
