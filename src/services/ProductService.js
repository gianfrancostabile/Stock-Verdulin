export default {
  retrieveAll() {
    return new Promise((resolve, reject) => {
      resolve([
        {
          id: 1,
          name: 'Tomate',
          price: 25,
          cost: 20,
          stock: 300,
          code: 'AA83-2585-5456-1ADP',
          leadtime: 1,
          category: {
            id: '1',
            name: 'Fruta',
            description: 'Mega super duper description'
          },
          provider: {
            id: '1',
            name: 'Tomatela',
            email: 'tomate@la.com',
            phone: '333 444 8888'
          }
        },
        {
          id: 2,
          name: 'Tomate',
          price: 25,
          cost: 20,
          stock: 300,
          code: 'AA83-2585-5456-1ADP',
          leadtime: 1,
          category: {
            id: '1',
            name: 'Fruta',
            description: 'Mega super duper description'
          },
          provider: {
            id: '1',
            name: 'Tomatela',
            email: 'tomate@la.com',
            phone: '333 444 8888'
          }
        },
        {
          id: 3,
          name: 'Tomate',
          price: 25,
          cost: 20,
          stock: 300,
          code: 'AA83-2585-5456-1ADP',
          leadtime: 1,
          category: {
            id: '1',
            name: 'Fruta',
            description: 'Mega super duper description'
          },
          provider: {
            id: '1',
            name: 'Tomatela',
            email: 'tomate@la.com',
            phone: '333 444 8888'
          }
        },
        {
          id: 4,
          name: 'Tomate',
          price: 25,
          cost: 20,
          stock: 300,
          code: 'AA83-2585-5456-1ADP',
          leadtime: 1,
          category: {
            id: '1',
            name: 'Fruta',
            description: 'Mega super duper description'
          },
          provider: {
            id: '1',
            name: 'Tomatela',
            email: 'tomate@la.com',
            phone: '333 444 8888'
          }
        }
      ])
    })
  },
  retrieve(id) {
    return new Promise((resolve, reject) => {
      resolve({
        id: 1,
        name: 'Tomate',
        price: 25,
        cost: 20,
        stock: 300,
        code: 'AA83-2585-5456-1ADP',
        leadtime: 1,
        category: {
          id: '1',
          name: 'Fruta',
          description: 'Mega super duper description'
        },
        provider: {
          id: '1',
          name: 'Tomatela',
          email: 'tomate@la.com',
          phone: '333 444 8888'
        }
      })
    })
  },
  create(product) {
    console.log(product)
    return new Promise((resolve, reject) => {
      resolve('Producto agregado existosamente.')
    })
  },
  remove(id) {
    return new Promise((resolve, reject) => {
      resolve('Producto eliminado.')
    })
  },
  update(product) {
    return new Promise((resolve, reject) => {
      resolve('Producto modificado existosamente.')
    })
  }
}