const session = {}

if (window.location.pathname !== '/login') {
  session.user = {
    firstName: 'Jane',
    lastName: 'Smith',
    initials: 'JS',
    id: 'user-js-1'
  }
}

export default session
