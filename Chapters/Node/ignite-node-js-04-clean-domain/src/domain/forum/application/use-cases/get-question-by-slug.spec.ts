import { InMemoryQuestionsRepository } from 'test/repositories/in-memory-questions-repository'
import { GetQuestionBySlugUseCase } from './get-question-by-slug'
import { makeQuestion } from 'test/factories/make-question'
import { Slug } from '../../enterprise/entities/value-objects/slug'

let inMemoryQuestionsRepository: InMemoryQuestionsRepository
let sut: GetQuestionBySlugUseCase

describe('Get Question By Slug', () => {
  beforeEach(() => {
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository()
    sut = new GetQuestionBySlugUseCase(inMemoryQuestionsRepository)
  })
  it.only('should be able to get a question by slug', async () => {
    const newQuestion = makeQuestion({
      slug: Slug.create('new-question'),
    })

    await inMemoryQuestionsRepository.create(newQuestion)

    const result = await sut.execute({
      slug: 'new-question',
    })


    expect(result.isRight()).toBe(true)
    expect(inMemoryQuestionsRepository.items[0].id).toEqual(result.value.question.id)
    expect(result.value.question.title).toEqual(newQuestion.title)
  })
})
