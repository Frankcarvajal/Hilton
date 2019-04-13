import Hawaii from './assets/hilton-hawaii.png'
import Mexico from './assets/hilton-mexico.png'
import Caribbean from './assets/hilton-caribbean.png'
import London from './assets/hilton-london.png'
import Japan from './assets/hilton-japan.png'

const hotels = ['Hilton Hawaii', 'Hilton Mexico', 'Hilton Caribbean', 'Hilton London', 'Hilton Japan']

export default hotels.map((hotel, i) => {
  const prefixName = hotel.split(' ')[0]
  const hotelName = hotel.split(' ')[1]
  const initials = prefixName[0] + hotelName[0]

  const addressLookup = {
    Hawaii: {
      city: 'Honolulu',
      state: 'HI',
      street: '2005 Kalia Rd',
      unitNumber: '',
      zipCode: '96815'
    },
    Mexico: {
      city: 'Colonia Centro',
      state: 'Mexico',
      street: 'Av. Juárez 70',
      unitNumber: '06010',
      zipCode: ''
    },
    Caribbean: {
      city: 'Noord',
      state: 'Aruba',
      street: 'J.E. Irausquin Blvd 81',
      unitNumber: '',
      zipCode: ''
    },
    London: {
      city: 'London',
      state: ' United Kingdom',
      street: '5 More London Place',
      unitNumber: 'SE1 2BY',
      zipCode: ''
    },
    Japan: {
      city: 'Shinjuku City',
      state: 'Tokyo',
      street: '〒160-0023',
      unitNumber: '',
      zipCode: ''
    }
  }

  const phoneNumberLookup = {
    Hawaii: '+1 808 949 4321',
    Mexico: '+52 55 5130 5300',
    Caribbean: '+297 586 6555',
    London: '+44 20 3002 4300',
    Japan: '+81 3-3344-5111'
  }

  const imageLookup = {
    Hawaii,
    Mexico,
    Caribbean,
    London,
    Japan
  }

  return {
    address: addressLookup[hotelName],
    prefixName,
    hotelName,
    initials,
    id: `hotel-${initials}-${i}`,
    img: imageLookup[hotelName],
    number: phoneNumberLookup[hotelName]
  }
})
