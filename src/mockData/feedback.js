import Chance from 'chance'
import hotels from './hotels'
import session from './session'
import questions from './questions'
const chance = new Chance()

const ids = [
  'e5b73d4c-5fbc-5bfb-85e8-ec3f2380503f',
  '37da9793-9e90-5e0d-9bc4-2b64de2143c4',
  'b6c642a3-8c03-58e9-9529-326a48af7116',
  '32e64f60-2b05-5b6c-9777-50c5805dd648',
  '2ca26f64-bbe5-521f-b5fa-964b0228c5b5'
]

export default hotels.map((hotel, i) => ({
  id: ids[i],
  from: { ...hotel },
  for: { ...session.hotel },
  dateCompleted: chance.date(),
  results: questions.map((question) => ({
    answer: generateAnswer(question),
    id: question.id,
    question: question.questionValue,
    type: question.type
  }))
}))

function generateAnswer (question) {
  switch (question.type) {
    case 'scale':
      return { value: chance.integer({ min: 1, max: 10 }) }
    case 'multipleChoice':
      return question.options[chance.integer({ min: 0, max: 2 })]
    case 'text':
      return { value: chance.paragraph({ sentences: 3 }) }
  }
}
