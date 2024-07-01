import axios from 'axios';


const fxUrl = "https://api.fxratesapi.com";
const authToken = "Bearer " + "fxr_live_09c4e18f7006db306e7d8f056b3f379a129a";
axios.defaults.headers.common['Authorization'] = authToken;

export const getRateForCurrency = (inputCur, inputAmt, outputCur) => {
	return axios.get(fxUrl + `/convert?from=${inputCur}&to=${outputCur}&amount=${inputAmt}`).then(response => {
		if(response.data.success)
			return response.data.result;
		else
		{
			let err = new Error();
			err.message = "Conversion Error!";
		}
	}).catch(error => {
		let err = new Error();
		if(err.message)
			err.message = error.response.data.message;
		else
			err.message = "API Server Down!";
	})
}

export const getCurrencies = () => {
	return axios.get(fxUrl + "/currencies").then(response => {
		return response.data;
	}).catch(error => {
		let err = new Error();
		if(err.message)
			err.message = error.response.data.message;
		else
			err.message = "API Server Down!";
	})

}