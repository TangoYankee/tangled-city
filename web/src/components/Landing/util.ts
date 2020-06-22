export const getWelcome = () => {
  const options = {
    method: 'GET'
  }
  return fetch('http://localhost:3000', options)
}
