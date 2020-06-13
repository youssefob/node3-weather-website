const request = require('request')

const forecast = (langtitude,longtitude,callback) =>{

    const url = 'http://api.weatherstack.com/current?access_key=dce5e201b90a47c991cadc5a39349bf0&query='+longtitude+','+langtitude
    request({ url, json: true }, (error, {body}) => {
        if(error){
            callback ('Could not connect to forcast serviecs',undefined)
        }
        else if(body.error){
            callback ('request is bad',undefined)
        }else{
            callback (undefined,{
                location:body.location.timezone_id,
                tempreture:body.current.temperature,
                precipe:body.current.precip
            })
        }
    })
}

module.exports = forecast