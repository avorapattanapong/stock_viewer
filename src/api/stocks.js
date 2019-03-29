const axios = require("axios");

const BASE_URL = "https://api.iextrading.com/1.0";
const BASE_STOCK_URL = BASE_URL + "/stock";



export function getCompanyInfo(symbol, successHandlerFunc, failHandlerFunc, alwaysHandlerFunc) {
    axios.get(BASE_STOCK_URL + "/" + symbol + "/company")
        .then(function (response) {
            // handle success
            if(successHandlerFunc) {
                //Convert to our own data structure to keep iextrading data separated from ours
                let data = {
                    name: response.data.companyName,
                    description: response.data.description
                };
                successHandlerFunc(data);
            }
        })
        .catch(function (error) {
            if(failHandlerFunc) {
                failHandlerFunc(error);
            }
        })
        .then(function () {
            // always executed
            if(alwaysHandlerFunc) {
                alwaysHandlerFunc();
            }
        });
}

export function getStockPrice(symbol, successHandlerFunc, failHandlerFunc, alwaysHandlerFunc) {
    axios.get(BASE_STOCK_URL + "/" + symbol + "/price")
        .then(function (response) {
            // handle success
            if(successHandlerFunc) {
                //Convert to our own data structure to keep iextrading data separated from ours
                let data = {
                    price: response.data
                };
                successHandlerFunc(data);
            }
        })
        .catch(function (error) {
            if(failHandlerFunc) {
                failHandlerFunc(error);
            }
        })
        .then(function () {
            // always executed
            if(alwaysHandlerFunc) {
                alwaysHandlerFunc();
            }
        });
}
