import Chance from 'chance'
import hotels from './hotels'

const chance = new Chance()
const ids = [
  '3f577279-3fc8-5e5c-9e75-b85dc7f79620',
  '06f486da-806e-5040-a889-439c87e45cfb',
  '7c971a9d-25f7-5655-99a8-9996cf499a19',
  'a05217f9-7ec9-5396-8c0b-3103fcfd8eae',
  'b1c07b3a-f258-52c8-b794-db9d371b2301'
]
export default hotels.map((hotel, i) => ({
  id: ids[i],
  hotel: { ...hotel },
  dateRequested: chance.date(),
  dateCompleted: null
}))
