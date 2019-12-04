<template>
  <div>
    <div class="logs">
      <p class="log_info">
        Crypto-coin current values (connected to Coincap API).<br>
        <b>Click on each coin</b> to see more information.
      </p>
      <div class="search">
        <input type="text" placeholder="Search..." v-model="filter">
      </div>
      <div class="coinLog" v-for="a in filteredAssets" :key="a.id">
          <img width="40px" :src="`https://static.coincap.io/assets/icons/${a.symbol.toLowerCase()}@2x.png`">
          <p class="info">
            <span>
              Rank:
            </span>
            #{{ a.rank }}
          </p>
            <p class="info">
              <span>
                Name:
              </span>
                {{a.name}}
            </p>
          <p class="info">
            {{a.symbol}}
          </p>
          <p class="info">
            <span>
              Price
            </span>
            {{a.priceUsd|dollar}}
          </p>
          <p class="info">
            <span>
              Market
            </span>
            {{a.marketCapUsd|dollar}}
          </p>
          <p class="info"
          :class="a.changePercent24Hr.includes('-') ? 'red' : 'green'">
            {{a.changePercent24Hr|percent}}
          </p>
          <p>
            <router-link class="rlink" :to="{ name: 'detalle', params: {id: a.id}}">
              <button class="btn_link">
                Details
              </button>
            </router-link>
          </p>
      </div>
      <div class="btn_log">
        <button>
          You don't see your coin?
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tabla',
	data() {
    return {
      filter: ''
    }
  },
  computed : {
    filteredAssets() {
      if(!this.filter) {return this.assets}
      return this.assets.filter(a =>
       a.symbol.toLowerCase().includes(this.filter.toLowerCase()) ||
       a.name.toLowerCase().includes(this.filter.toLowerCase())
       )
    }
  },
	props: {
		assets: {
			type: Array,
			default: () => []
		}
	}
}
</script>

<style lang="scss">
  .red{
    color: #f88020;
  }
  .green{
    color: #91bd3a;
  }
</style>
