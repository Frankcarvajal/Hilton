const questions = [
  {
    id: 'q01',
    type: 'scale',
    required: true,
    questionValue: 'How much do you trust this hotel to deliver a high quality experience?'
  },
  {
    id: 'q02',
    type: 'multipleChoice',
    required: true,
    questionValue: 'Is this hotel up to date with the latest expectations?',
    options: [
      {
        id: 'q02-a1',
        value: 1,
        label: 'Not fully. This hotel should work on trying to stay more up to date with modern expectations.'
      },
      {
        id: 'q02-a2',
        value: 2,
        label: 'Yes, this hotel is reasonably up to date with modern expectations.'
      },
      {
        id: 'q02-a3',
        value: 3,
        label: 'Yes, this hotel are the one I look to when I need to make a reservation.'
      }
    ]
  },
  {
    id: 'q03',
    type: 'scale',
    required: true,
    questionValue: 'How well does this hotel understand the domain of customer service?'
  },
  {
    id: 'q04',
    type: 'text',
    required: false,
    questionValue: 'Have there been any situations where this hotel could have managed their your experience better? What happened?'
  },
  {
    id: 'q05',
    type: 'multipleChoice',
    required: true,
    questionValue: 'Does this hotel care about our customers and treat customer support as a high priority?',
    options: [
      {
        id: 'q05-a1',
        value: 1,
        label: 'Not always - you should work on this aspect'
      },
      {
        id: 'q05-a2',
        value: 2,
        label: 'Yes, they go out of our way to help customers and improve their experience'
      },
      {
        id: 'q05-a3',
        value: 3,
        label: 'Yes, their understanding of customer experience and demonstration is second to none'
      }
    ]
  },
  {
    id: 'q06',
    type: 'text',
    required: true,
    questionValue: 'What would you like this hotel to work on the most during the next month, to enable their continued growth?'
  },
  {
    id: 'q07',
    type: 'multipleChoice',
    required: true,
    questionValue: 'How transparent and clear are this hotel\'s service and work tasks?',
    options: [
      {
        id: 'q07-a1',
        value: 1,
        label: 'I frequently feel uncomfortable with the level of service, please work with me to raise visibility & improvement'
      },
      {
        id: 'q07-a2',
        value: 2,
        label: 'I almost always know what to expect of the hotel, but not always the service experience, the outcomes are unpredictable.'
      },
      {
        id: 'q07-a3',
        value: 3,
        label: 'Hilton\'s customer service intentions are clear and staff is readily available to assist, and I always know what service I will receive if I book.'
      }
    ]
  },
  {
    id: 'q08',
    type: 'scale',
    required: true,
    questionValue: 'How well does the manager understand business and management of staff from an outside perspective?'
  },
  {
    id: 'q09',
    type: 'text',
    required: false,
    questionValue: 'Is there anything else you\'d like to share with this Hotel?'
  }
]

export default questions.map((question, i) => ({
  ...question,
  order: i
}))
