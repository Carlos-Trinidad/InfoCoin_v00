<template>
    <div>
        <template v-if="asset.id">
            <div class="coin_holder">
                <div class="image">
                    <ul>
                        <li>
                            <img width="40px" :src="`https://static.coincap.io/assets/icons/${asset.symbol.toLowerCase()}@2x.png`">         
                        </li><br>
                        <li>
                            <p>
                                <b>Rank</b>
                                #{{asset.rank}}
                            </p>
                        </li>
                        <li>
                            <p>
                                <b>Name</b>
                                {{asset.name}}
                                <span>
                                    {{asset.symbol}}
                                </span>
                            </p>
                        </li>
                        <li>
                            <p>
                                <b>Price</b>
                                {{asset.priceUsd|dollar}}
                            </p>
                        </li>
                        <li>
                            <p>
                                <b>Percent</b>
                                {{asset.changePercent24Hr|percent}}
                            </p>
                        </li>
                        <li>
                            <p>
                                <b>Minimum Price</b>
                                {{min|dollar}}
                            </p>
                        </li>
                        <li>
                            <p>
                                <b>Maximum Price</b>
                                {{max|dollar}}
                            </p>
                        </li>
                        <li>
                            <p>
                                <b>Average Price</b>
                                {{avg|dollar}}
                            </p>
                        </li>
                    </ul>
                </div>
                <div class="chart">
                    <line-chart class="my-10"
                        :colors="['navy']"
                        :min="min"
                        :max="max"
                        :data="history.map(h => [h.date, parseFloat(h.priceUsd).toFixed(2)])"
                    />
                </div>
            </div>
        </template>
    </div>
</template>

<script>
import api from '@/api'

export default {
    name: 'Detalle',
    data(){
        return {
            asset: {},
			history : []
        }
    },

    created() {
        this.getCoin()
    },

	computed: {
		min(){
			return Math.min (
				...this.history.map(h => parseFloat(h.priceUsd).toFixed(2))
			)
		},
		max(){
			return Math.max (
				...this.history.map(h => parseFloat(h.priceUsd).toFixed(2))
			)
		},
		avg(){
			return Math.abs (
				...this.history.map(h => parseFloat(h.priceUsd).toFixed(2))
			)
		}
	},

    methods: {
		getCoin() {
			const id = this.$route.params.id
			Promise.all([api.getAsset(id), api.getAssetHistory(id)])
			.then(([asset, history]) => {
				this.asset = asset
				this.history = history
			}
			)
		}
	},

}
</script>

<style>

</style>