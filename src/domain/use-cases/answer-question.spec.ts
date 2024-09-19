import { it, describe, expect } from 'vitest'
import { AnswerQuestionUseCase } from './answer-question'

describe("AnswerQuestion [Unit Test]", () => {
    it('should be possible create an answer', () => {
        const answerQuestion = new AnswerQuestionUseCase(); 

        const answer = answerQuestion.execute({
            instructorId: "1",
            questionId: "1",
            content: "Mock Content"
        })

        expect(answer.content).toEqual("Mock Content")
    })
})