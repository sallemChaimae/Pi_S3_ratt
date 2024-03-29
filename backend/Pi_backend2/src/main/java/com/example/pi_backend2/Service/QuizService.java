package com.example.pi_backend2.Service;

import com.example.pi_backend2.Entity.Cours;
import com.example.pi_backend2.Entity.Quiz;
import com.example.pi_backend2.Repository.QuizRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuizService {
    private final QuizRepository quizRepository;

    @Autowired
    public QuizService(QuizRepository quizRepository) {
        this.quizRepository = quizRepository;
    }

    public List<Quiz> getAllQuizzes() {
        return quizRepository.findAll();
    }

    public Quiz getQuizByName(String name) {
        return quizRepository.findByName(name)
                .orElseThrow(() -> new EntityNotFoundException("Quiz not found with id: " + name));
    }
    public List<Quiz> searchCoursByKeywords(String keywords) {
        return quizRepository.findByNameContainingIgnoreCase(keywords);
    }

    public Quiz createQuiz(Quiz quiz) {
        return quizRepository.save(quiz);
    }

//    public Quiz updateQuiz(Long id, Quiz quiz) {
//        Quiz existingQuiz = getQuizById(id);
//        existingQuiz.setName(quiz.getName());
//        existingQuiz.setDescription(quiz.getDescription());
//        existingQuiz.setQuestions(quiz.getQuestions());
//        return quizRepository.save(existingQuiz);
//    }
//
//    public void deleteQuiz(Long id) {
//        quizRepository.deleteById(id);
//    }
}
