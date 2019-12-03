<template>
  <div class="home">
    <div v-if="loading" class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    <Tabla v-if="!loading" :assets="assets" />
  </div>
</template>

<script>
// @ is an alias to /src
import api from '@/api'
import Tabla from '@/components/Tabla.vue'

export default {
  name: 'home',
  components: {
    Tabla
  },
	data () {
		return {
      assets: [],
      loading: false
		}
	},
	created () {
    this.loading = true
    api.getAssets().then(assets => (this.assets = assets))
    .finally(() => this.loading = false)
	}
}
</script>
