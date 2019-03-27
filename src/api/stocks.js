const axios = require("axios");

const BASE_URL = "https://api.iextrading.com/1.0";
const GET_COMPANY_URL = BASE_URL + "/stock/aapl/company";



export default function getCompanyInfo(companyName, successHandlerFunc, failHandlerFunc, alwaysHandlerFunc) {
    axios.get(GET_COMPANY_URL)
        .then(function (response) {
            // handle success
            console.log(response);
            if(successHandlerFunc) {
                successHandlerFunc();
            }
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            if(failHandlerFunc) {
                failHandlerFunc();
            }
        })
        .then(function () {
            // always executed
            if(alwaysHandlerFunc) {
                alwaysHandlerFunc();
            }
        });
}
