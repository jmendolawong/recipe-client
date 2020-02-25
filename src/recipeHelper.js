import config from './config'

export const deleteRecipe = (recipeId, callback) => {

  return fetch(`${config.API_ENDPOINT}/catalog/${recipeId}`, {
    method: 'DELETE'
  })
    .then(res => {
      if (!res.ok) {
        res.json().then(err => Promise.reject(err))
      }
    })
    .then(() => {
      callback(parseInt(recipeId))
    })
    .catch(err => {
      console.log(err)
    })
}

export const addRecipe = (callback, name, note, url) => {

  fetch(`${config.API_ENDPOINT}/catalog`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({ name: name, note: note, url: url })
  })
    .then(res => {
      if (!res.ok) {
        return res.json().then(err => Promise.reject(err))
      } return res.json()
    })
    .then(data => {
      callback(data)
    })
}
