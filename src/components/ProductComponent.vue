<template>
  <div class="__row __full-height-perc">
    <div id="form-container" class="__col __col-3 __align-self-center">
      <div class="__card" v-if="loading">
        <header class="__form-header">
          <h2 class="__title">Producto</h2>
        </header>
        <div class="__form-body">
          <div class="__loading-container __text-center">
            <i class="fas fa-spinner fa-spin"></i> Loading
          </div>
        </div>
      </div>
      <div v-else>
        <form action="" class="__card" v-if="form == 'create'">
          <header class="__form-header">
            <h2 class="__title">Producto</h2>
            <p class="__description">Agrega un nuevo producto</p>
          </header>
          <div class="__form-body">
            <div class="__form-group">
              <label for="product_name">Nombre: </label>
              <input id="product_name" type="text" required placeholder=" " v-model.trim="name">
            </div>
            <div class="__form-group">
              <label for="product_price">Precio: </label>
              <input id="product_price" type="number" required placeholder=" " v-model.number="price">
            </div>
            <div class="__form-group">
              <label for="product_cost">Costo: </label>
              <input id="product_cost" type="number" required placeholder=" " v-model.number="cost">
            </div>
            <div class="__form-group">
              <label for="product_amount">Cantidad actual: </label>
              <input id="product_amount" type="number" required placeholder=" " v-model.number="stock">
            </div>
            <div class="__form-group">
              <label for="product_code">Código: </label>
              <input id="product_code" type="text" required placeholder=" " v-model.trim="code">
            </div>
            <div class="__form-group">
              <label for="product_leadtime">Lead Time: </label>
              <input id="product_leadtime" type="number" required placeholder=" " v-model.number="leadtime">
            </div>
            <div class="__form-group">
              <label for="product_category">Categoría: </label>
              <select id="product_category" required v-model="category">
                <option value="" selected disabled>Elige una</option>
                <option :value="categoryUnit" v-for="(categoryUnit, index) in categories" :key="index">{{ categoryUnit.name }}</option>
              </select>
            </div>
            <div class="__form-group">
              <label for="product_provider">Proveedor: </label>
              <select id="product_provider" required v-model="provider">
                <option value="" selected disabled>Elige una</option>
                <option :value="providerUnit" v-for="(providerUnit, index) in providers" :key="index">{{ providerUnit.name }}</option>
              </select>
            </div>
          </div>
          <footer class="__form-footer">
            <div class="__message __message-success __mb-1" v-if="success">
              {{ success }}
            </div>
            <div class="__message __message-danger __mb-1" v-else-if="error">
              {{ error }}
            </div>
            <div class="__form-group-buttons">
              <button class="__button __button-success" @click.prevent="create">Agregar</button>
              <button class="__button __button-secondary" @click.prevent="clean">Limpiar campos</button>
            </div>
          </footer>
        </form>

        <form action="" class="__card" v-else-if="form == 'update'">
          <header class="__form-header">
            <h2 class="__title">Producto</h2>
            <p class="__description">Modifica un producto existente</p>
          </header>
          <div class="__form-body __my-0">
            <div class="__form-group">
              <label for="category_id">ID: </label>
              <input id="category_id" type="number" required placeholder=" " v-model.number="id" disabled>
            </div>
            <div class="__form-group">
              <label for="product_name">Nombre: </label>
              <input id="product_name" type="text" required placeholder=" " v-model.trim="name">
            </div>
            <div class="__form-group">
              <label for="product_price">Precio: </label>
              <input id="product_price" type="number" required placeholder=" " v-model.number="price">
            </div>
            <div class="__form-group">
              <label for="product_cost">Costo: </label>
              <input id="product_cost" type="number" required placeholder=" " v-model.number="cost">
            </div>
            <div class="__form-group">
              <label for="product_amount">Cantidad actual: </label>
              <input id="product_amount" type="number" required placeholder=" " v-model.number="stock">
            </div>
            <div class="__form-group">
              <label for="product_code">Código: </label>
              <input id="product_code" type="text" required placeholder=" " v-model.trim="code">
            </div>
            <div class="__form-group">
              <label for="product_leadtime">Lead Time: </label>
              <input id="product_leadtime" type="number" required placeholder=" " v-model.number="leadtime">
            </div>
            <div class="__form-group">
              <label for="product_category">Categoría: </label>
              <select id="product_category" required v-model="category">
                <option value="" selected disabled>Elige una</option>
                <option :value="categoryUnit" v-for="(categoryUnit, index) in categories" :key="index">{{ categoryUnit.name }}</option>
              </select>
            </div>
            <div class="__form-group">
              <label for="product_provider">Proveedor: </label>
              <select id="product_provider" required v-model="provider">
                <option value="" selected disabled>Elige una</option>
                <option :value="providerUnit" v-for="(providerUnit, index) in providers" :key="index">{{ providerUnit.name }}</option>
              </select>
            </div>
          </div>
          <div class="__form-footer">
            <div class="__message __message-success __mb-1" v-if="success">
              {{ success }}
            </div>
            <div class="__message __message-danger __mb-1" v-else-if="error">
              {{ error }}
            </div>
            <div class="__form-group-buttons">
              <button class="__button __button-warning" @click.prevent="update">Modificar</button>
              <button class="__button __button-secondary" @click.prevent="clean">Limpiar campos</button>
            </div>
          </div>
          <div class="__form-footer __mt-1">
            <div class="__form-group-buttons">
              <button class="__button __button-success" @click.prevent="triggerForm" value="-1">Quiero crear</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="__col __col-7">
      <div id="table-container" class="__card __max-full-height-perc">
        <table id="table" class="__table __full-width-perc __text-center __table-bordered __table-hoverrable">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Stock</th>
              <th>Precio</th>
              <th>Costo</th>
              <th>Código</th>
              <th>Lead Time</th>
              <th>Categoría</th>
              <th>Proveedor</th>
              <th colspan="2">Extra</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(product, index) in products" :key="index">
              <td> {{ product.id }} </td>
              <td> {{ product.name }} </td>
              <td> {{ product.stock }} </td>
              <td> {{ product.price }} </td>
              <td> {{ product.cost }} </td>
              <td> {{ product.code }} </td>
              <td> {{ product.leadtime }} </td>
              <td> {{ product.category.name }} </td>
              <td> {{ product.provider.name }} </td>
              <td>
                <button class="__button __button-warning __button-rounded fas fa-pencil-alt" @click="triggerForm" :value="product.id"></button>
              </td>
              <td>
                <button class="__button __button-danger __button-rounded fas fa-times" @click="remove" :value="product.id"></button>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Stock</th>
              <th>Precio</th>
              <th>Costo</th>
              <th>Código</th>
              <th>Lead Time</th>
              <th>Categoría</th>
              <th>Proveedor</th>
              <th colspan="2">Extra</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import CategoryService from '@/services/CategoryService'
import ProviderService from '@/services/ProviderService'
import ProductService from '@/services/ProductService'

export default {
  name: 'ProviderComponent',
  data() {
    return {
      id: 0,
      name: '',
      price: 0,
      cost: 0,
      stock: 0,
      code: '',
      leadtime: 0,
      category: '',
      provider: '',
      success: '',
      error: '',
      loading: false,
      form: 'create',
      providers: [],
      categories: [],
      products: []
    }
  },
  methods: {
    create() {
      if ( this.name.trim() && this.price >= 0 && this.cost >= 0 && this.stock >= 0 && this.code.trim() && this.leadtime >= 0 && this.category && this.provider ) {
        const product = {
          name: this.name,
          price: this.price,
          cost: this.cost,
          stock: this.stock,
          code: this.code,
          leadtime: this.leadtime,
          category: this.category,
          provider: this.provider
        }
        ProductService.create(product)
          .then(resolve => {
            this.success = resolve

            setTimeout(() => {
              this.success = undefined
            }, 2500)
            this.clean()
          })
          .catch(reject => {
            this.error = reject

            setTimeout(() => {
              this.error = undefined
            }, 2500)
          }) 
      } else {
        this.error = 'Llene todos los campos.'

        setTimeout(() => {
          this.error = undefined
        }, 2500)
      }
    },
    remove(e) { 
      const target = e.target
      target.disabled = true
      target.classList.remove('fa-times')
      target.classList.add('fa-sync')
      target.classList.add('fa-spin')

      ProductService.remove(target.value)
        .then(resolve => {
          target.classList.remove('fa-sync')
          target.classList.remove('fa-spin')
          target.classList.add('fa-times')
          target.disabled = false
        })
    },
    update() {
      if ( this.id > 0 && this.price >= 0 && this.cost >= 0 && this.stock >= 0 && this.code.trim() && this.leadtime >= 0 && this.category && this.provider ) {
        const product = {
          id: this.id,
          name: this.name,
          price: this.price,
          cost: this.cost,
          stock: this.stock,
          code: this.code,
          leadtime: this.leadtime,
          category: this.category,
          provider: this.provider
        }

        ProductService.update(product)
          .then(resolve => {
            this.success = resolve

            setTimeout(() => {
              this.success = undefined
            }, 2500)
          })
          .catch(reject => {
            this.error = reject

            setTimeout(() => {
              this.error = undefined
            }, 2500)
          }) 
      } else {
        this.error = 'Llene todos los campos.'

        setTimeout(() => {
          this.error = undefined
        }, 2500)
      }
    },
    triggerForm(e) {
      const target = e.target

      if (target.value == -1) {
        this.loading = true
        this.form = 'create'
        this.clean()
        this.loading = false

      } else {
        target.disabled = true
        target.classList.remove('fa-pencil-alt')
        target.classList.add('fa-sync')
        target.classList.add('fa-spin')

        ProductService.retrieve(target.value)
          .then(resolve => {
            this.id = resolve.id
            this.name = resolve.name
            this.price = resolve.price
            this.cost = resolve.cost
            this.stock = resolve.stock
            this.code = resolve.code
            this.leadtime = resolve.leadtime
            this.category = resolve.category
            this.provider = resolve.provider
            
            target.classList.remove('fa-sync')
            target.classList.remove('fa-spin')
            target.classList.add('fa-pencil-alt')
            target.disabled = false

            this.form = 'update'
            this.loading = false
          })
      }
    },
    clean() {
      this.name = ''
      this.price = 0
      this.cost = 0
      this.stock = 0
      this.code = ''
      this.leadtime = 0
      this.category = ''
      this.provider = ''
    },
  },
  created() {
    CategoryService.retrieveAll()
      .then(resolve => {
        this.categories = resolve
      })
    
    ProviderService.retrieveAll()
      .then(resolve => {
        this.providers = resolve
      })

    ProductService.retrieveAll()
      .then(resolve => {
        this.products = resolve
      })
  },
  mounted() {
    const table_container = document.getElementById('table-container'),
      table = document.getElementById('table'),
      table_container_height = table_container.clientHeight,
      table_height = table.clientHeight
      
    if (table_container_height <= table_height) {
      table_container.parentElement.classList.remove('__align-self-center')
      table_container.classList.add('__overflow-scroll-y')
    } else {
      table_container.parentElement.classList.add('__align-self-center')
      table_container.classList.remove('__overflow-scroll-y')
    }
  }
}
</script>