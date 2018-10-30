export default {
  retrieveAll() {
    return new Promise((resolve, reject) => {
      resolve([
        {
          id: '1',
          name: 'Tomatela',
          email: 'tomate@la.com',
          phone: '333 444 8888'
        },
        {
          id: '2',
          name: 'Tomatela',
          email: 'tomate@la.com',
          phone: '333 444 8888'
        },
        {
          id: '3',
          name: 'Tomatela',
          email: 'tomate@la.com',
          phone: '333 444 8888'
        },
        {
          id: '4',
          name: 'Tomatela',
          email: 'tomate@la.com',
          phone: '333 444 8888'
        }
      ])
    })
  },
  retrieve(id) {
    return new Promise((resolve, reject) => {
      resolve({
        id: '1',
        name: 'Tomatela',
        email: 'tomate@la.com',
        phone: '333 444 8888'
      })
    })
  },
  create(provider) {
    return new Promise((resolve, reject) => {
      resolve('Proveedor agregado existosamente.')
    })
  },
  remove(id) {
    return new Promise((resolve, reject) => {
      resolve('Proveedor eliminado.')
    })
  },
  update(provider) {
    return new Promise((resolve, reject) => {
      resolve('Proveedor modificado existosamente.')
    })
  }
}