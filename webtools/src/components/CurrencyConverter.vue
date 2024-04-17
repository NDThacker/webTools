<template>

	<div id="curc">
		<div id="leftInp">
			<select name="leftCur" v-on:change="changeLeftCur($event)">
				<option v-for="currency in Object.keys(this.AllCurrencies)" :key="currency" v-bind:title="this.AllCurrencies[currency].name">{{ currency }}</option>

			</select>
			<input type="number" name="leftAmt" min="0" v-model="leftAmt" v-on:change="getConvertedAmt('leftAmt')"/>
		</div>
		<div id="rightInp">
			<select name="rightCur" v-on:change="changeRightCur($event)">
				<option v-for="currency in Object.keys(this.AllCurrencies)" :key="currency" v-bind:title="this.AllCurrencies[currency].name">{{ currency }}</option>
			</select>
			<input type="number" name="rightAmt" min="0" v-model="rightAmt" v-on:change="getConvertedAmt('rightAmt')"/>
		</div>
	</div>

</template>vu


<script>
import { getRateForCurrency ,getCurrencies } from '@/utils/api';

export default {
	name: "CurrencyTool",

	data() {
		return {
			leftAmt: 1,
			rightAmt: 1,
			leftCur: "AFN",
			rightCur: "AFN",
			AllCurrencies: {}
		}
	},

	methods: {
		changeLeftAmt(amt) {
			this.leftAmt = amt;
		},

		changeRightAmt(amt) {
			this.rightAmt = amt;
		},

		changeLeftCur(event) {
			this.leftCur = event.target.value;
			this.getConvertedAmt("leftCur");
		},

		changeRightCur(event) {
			this.rightCur = event.target.value;
			this.getConvertedAmt("rightCur");
		},

		async getConvertedAmt(changedBy) {
			try {
				if (changedBy == "leftAmt" || changedBy == "leftCur") {
					this.rightAmt = await getRateForCurrency(this.leftCur, this.leftAmt, this.rightCur);


				}
				else if (changedBy == "rightAmt" || changedBy == "rightCur") {
					this.leftAmt = await getRateForCurrency(this.rightCur, this.rightAmt, this.leftCur);

				}
			}
			catch(err)
			{
				console.log("Error!, requires attention");
			}
		}
	},

	async mounted()
	{
		this.AllCurrencies = await getCurrencies();
		console.log(Object.keys(this.AllCurrencies));
	}

}


</script>

<style scoped>
</style>