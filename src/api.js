const url = 'https://api.coincap.io/v2'

function getAssets() {
	return fetch (`${url}/assets?limit=15`)
	.then(res => res.json())
	.then (res => res.data)
}

export default {
	getAssets //esta función es la que luego se exporta
}