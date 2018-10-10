const axios = require('axios')

async function reverse({latitude, longitude}) {
    try {
        const geo = await axios({
            method: 'GET',
            url: `https://geocode.xyz/${latitude},${longitude}`,
            params: {
                geoit: 'json'
            },
            responseType: 'json'
        })
        return geo.data
    }
    catch(err) {
        console.log(err)
        return err
    }
}

module.exports = {
    reverse
}