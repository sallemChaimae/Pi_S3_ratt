package com.example.pi_backend2.Controller;

import com.example.pi_backend2.Entity.Option;
import com.example.pi_backend2.Entity.Question;
import com.example.pi_backend2.Repository.OptionRepository;
import com.example.pi_backend2.Repository.QuestionRepository;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/questions")
public class QuestionController {

    private QuestionRepository questionRepository;
    private OptionRepository optionRepository;

    public QuestionController(QuestionRepository questionRepository, OptionRepository optionRepository) {
        this.questionRepository = questionRepository;
        this.optionRepository = optionRepository;
    }


    @GetMapping("/get")
    public List<Question> getAllQuestions() {
        return questionRepository.findAll();
    }
//
//    // Récupérer une question par son ID
//    @GetMapping("/{id}")
//    public ResponseEntity<Question> getQuestionById(@PathVariable Long id) {
//        Optional<Question> questionOptional = questionRepository.findById(id);
//        return questionOptional.map(question -> new ResponseEntity<>(question, HttpStatus.OK))
//                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
//    }

    // Ajouter une nouvelle question
    @PostMapping("/post")
    public ResponseEntity<Question> addQuestion(@RequestBody Question question) {
        Question  qst=new Question();
        qst.setQuestionType(question.getQuestionType());
        qst.setOptions(question.getOptions());
        qst.setName(question.getName());


        Question savedQuestion = questionRepository.save(qst);

        return new ResponseEntity<>(savedQuestion, HttpStatus.CREATED);
    }

    // Mettre à jour une question existante
//    @PutMapping("/{id}")
//    public ResponseEntity<Question> updateQuestion(@PathVariable Long id, @RequestBody Question questionDetails) {
//        Optional<Question> optionalQuestion = questionRepository.findById(id);
//        if (optionalQuestion.isPresent()) {
//            Question question = optionalQuestion.get();
//            question.setName(questionDetails.getName());
//            question.setTypeId(questionDetails.getTypeId());
//            question.setOptions(questionDetails.getOptions());
//            question.setQuestionType(questionDetails.getQuestionType());
//            question.setQuiz(questionDetails.getQuiz());
//            Question updatedQuestion = questionRepository.save(question);
//            return new ResponseEntity<>(updatedQuestion, HttpStatus.OK);
//        } else {
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }
//    }
//
//    // Supprimer une question
//    @DeleteMapping("/{id}")
//    public ResponseEntity<Void> deleteQuestion(@PathVariable Long id) {
//        Optional<Question> optionalQuestion = questionRepository.findById(id);
//        if (optionalQuestion.isPresent()) {
//            questionRepository.deleteById(id);
//            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//        } else {
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }
//    }
}
