export default {
  retrieveAll() {
    return new Promise((resolve, reject) => {
      resolve([
        {
          id: '1',
          name: 'Fruta',
          description: 'Mega super duper description'
        },
        {
          id: '2',
          name: 'Fruta',
          description: 'Mega super duper description'
        },
        {
          id: '3',
          name: 'Fruta',
          description: 'Mega super duper description'
        },
        {
          id: '4',
          name: 'Fruta',
          description: 'Mega super duper description'
        }
      ])
    })
  },
  retrieve(id) {
    return new Promise((resolve, reject) => {
      resolve({
        id: '1',
        name: 'Fruta',
        description: 'Mega super duper description'
      })
    })
  },
  create(category) {
    return new Promise((resolve, reject) => {
      resolve('Categoría agregada existosamente.')
    })
  },
  remove(id) {
    return new Promise((resolve, reject) => {
      resolve('Categoría eliminada.')
    })
  },
  update(category) {
    return new Promise((resolve, reject) => {
      resolve('Categoría modificada existosamente.')
    })
  }
}