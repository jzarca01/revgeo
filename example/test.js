const { reverse } = require('../')

async function init() {
    try {
        const geo = await reverse({
            latitude: 51.50354,
            longitude: -0.12768
        })
        console.log(geo)
    }
    catch(err) {
        console.log(err)
    }
}

init()