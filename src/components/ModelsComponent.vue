<template>
  <div>
    <div class="__row __pt-2 __pb-3">
      <div class="__col __col-4 __col-offset-3">
        <div class="__card">
          <div class="__form-group __justify-evently">
            <span>Elija un modelo: </span>
            <div class="__form-group">
              <input type="radio" name="model" id="model-q" value="q" v-model="model" checked>
              <label for="model-q"> Modelo Q</label>
            </div>
            <div class="__form-group">
              <input type="radio" name="model" id="model-p" value="p" v-model="model">
              <label for="model-p"> Modelo P</label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="__mx-1">
      <div id="table-container" class="__card __full-width-perc __overflow-scroll-y" style="max-height: 70vh;">
        <table id="table-q" class="__table __full-width-perc __text-center __table-bordered __table-hoverrable">
          <caption>Modelo Q</caption>
          <thead>
            <tr>
              <th>Producto</th>
              <th><abbr title="Nivel actual de inventario">I</abbr></th>
              <th><abbr title="Demanda diaria">d</abbr></th>
              <th><abbr title="Demanda anual">D</abbr></th>
              <th><abbr title="Cantidad que debe ordenarse">Q</abbr></th>
              <th><abbr title="Costo de mantenimiento">H</abbr></th>
              <th><abbr title="Costo de preparación">S</abbr></th>
              <th><abbr title="Costo por unidad">C</abbr></th>
              <th><abbr title="Punto de reorden">R</abbr></th>
              <th><abbr title="Desviación estándar durante el periodo de revisión">σ(L)</abbr></th>
              <th><abbr title="Existencia de Seguridad">z*σ(L)</abbr></th>
              <th><abbr title="Lead Time">L</abbr></th>
              <th>Costo anual Total</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, index) in models.model_q" :key="index">
              <td>{{ row.product }}</td>
              <td>{{ row.i }} uni.</td>
              <td>{{ row.daily_d }} uni.</td>
              <td>{{ row.annual_D }} uni.</td>
              <td>{{ row.q }} uni.</td>
              <td><strong>${{ row.h * row.i }}</strong> (${{ row.h }}/uni.)</td>
              <td><strong>${{ row.s * row.i }}</strong> (${{ row.s }}/uni.)</td>
              <td><strong>${{ row.c * row.i }}</strong> (${{ row.c }}/uni.)</td>
              <td>{{ row.r }} uni.</td>
              <td>{{ row.ol }}</td>
              <td>{{ row.zol }}</td>
              <td>{{ row.l }} días</td>
              <td>${{ row.cta }}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th>Producto</th>
              <th><abbr title="Nivel actual de inventario">I</abbr></th>
              <th><abbr title="Demanda diaria">d</abbr></th>
              <th><abbr title="Demanda anual">D</abbr></th>
              <th><abbr title="Cantidad que debe ordenarse">Q</abbr></th>
              <th><abbr title="Costo de mantenimiento">H</abbr></th>
              <th><abbr title="Costo de preparación">S</abbr></th>
              <th><abbr title="Costo por unidad">C</abbr></th>
              <th><abbr title="Punto de reorden">R</abbr></th>
              <th><abbr title="Desviación estándar durante el periodo de revisión">σ(L)</abbr></th>
              <th><abbr title="Existencia de Seguridad">z*σ(L)</abbr></th>
              <th><abbr title="Lead Time">L</abbr></th>
              <th>Costo anual Total</th>
            </tr>
          </tfoot>
        </table>

        <table id="table-p" class="__table __full-width-perc __text-center __table-bordered __table-hoverrable">
          <caption>Modelo P</caption>
          <thead>
            <tr class="__sticky">
              <th>Producto</th>
              <th><abbr title="Nivel actual de inventario">I</abbr></th>
              <th><abbr title="Demanda diaria">d</abbr></th>
              <th><abbr title="Demanda anual">D</abbr></th>
              <th><abbr title="Cantidad que debe ordenarse">Q</abbr></th>
              <th><abbr title="Número de días transcurridos entre las revisiones">T</abbr></th>
              <th><abbr title="Nivel de servicio deseado">P</abbr></th>
              <th><abbr title="Número de desviación estándar para un nivel de servicio específico">z</abbr></th>
              <th><abbr title="Desviación estándar durante el periodo de revisión y el plazo">σ(T+L)</abbr></th>
              <th><abbr title="Desviación estándar de la demanda durante la revisión y el plazo">z*σ(T+L)</abbr></th>
              <th><abbr title="Desviación estandar de la demanda">σd</abbr></th>
              <th><abbr title="Lead Time">L</abbr></th>
              <th>Costo anual Total</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, index) in models.model_p" :key="index">
              <td>{{ row.product }}</td>
              <td>{{ row.i }} uni.</td>
              <td>{{ row.daily_d }} uni.</td>
              <td>{{ row.annual_D }} uni.</td>
              <td>{{ row.q }} uni.</td>
              <td>{{ row.t }} días</td>
              <td>{{ row.p }}</td>
              <td>{{ row.z }}</td>
              <td>{{ row.otl }}</td>
              <td>{{ row.zotl }}</td>
              <td>{{ row.od }}</td>
              <td>{{ row.l }} días</td>
              <td>${{ row.cta }}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th>Producto</th>
              <th><abbr title="Nivel actual de inventario">I</abbr></th>
              <th><abbr title="Demanda diaria">d</abbr></th>
              <th><abbr title="Demanda anual">D</abbr></th>
              <th><abbr title="Cantidad que debe ordenarse">Q</abbr></th>
              <th><abbr title="Número de días transcurridos entre las revisiones">T</abbr></th>
              <th><abbr title="Nivel de servicio deseado">P</abbr></th>
              <th><abbr title="Número de desviación estándar para un nivel de servicio específico">z</abbr></th>
              <th><abbr title="Desviación estándar durante el periodo de revisión y el plazo">σ(T+L)</abbr></th>
              <th><abbr title="Desviación estándar de la demanda durante la revisión y el plazo">z*σ(T+L)</abbr></th>
              <th><abbr title="Desviación estandar de la demanda">σd</abbr></th>
              <th><abbr title="Lead Time">L</abbr></th>
              <th>Costo anual Total</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  </div>
</template>

<script>
import ModelsService from '@/services/ModelsService'

export default {
  name: 'ModelsComponent',
  data() {
    return {
      model: 'q',
      models: []
    }
  },
  watch: {
    model() {
      this.changeTable()
    }
  },
  methods: {
    changeTable() {
      const table_p = document.getElementById('table-p'),
        table_q = document.getElementById('table-q')

      if (this.model == 'p') {
        table_q.style.display = 'none'
        table_p.style.display = 'table'
      } else if (this.model == 'q') {
        table_p.style.display = 'none'
        table_q.style.display = 'table'
      }
    }
  },
  created() {
    ModelsService.retrieveAll()
      .then(resolve => {
        this.models = resolve
      })
  },
  mounted() {      
    this.changeTable()
  }
}
</script>

