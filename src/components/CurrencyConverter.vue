<template>

	<div id="curc">
		<div id="leftInp">
			<select name="leftCur" v-on:change="changeLeftCur($event)" id="leftCur">
				<option v-for="currency in Object.keys(this.AllCurrencies)" :key="currency" v-bind:title="this.AllCurrencies[currency].name">{{ currency }}</option>

			</select>
			<input type="number" name="leftAmt" min="0" id="leftAmt" v-model="leftAmt" v-on:change="getConvertedAmt('leftAmt')"/>
		</div>
		<div id="equals">
			=
		</div>
		<div id="rightInp">
			<select name="rightCur" v-on:change="changeRightCur($event)" id="rightCur">
				<option v-for="currency in Object.keys(this.AllCurrencies)" :key="currency" v-bind:title="this.AllCurrencies[currency].name">{{ currency }}</option>
			</select>
			<input type="number" name="rightAmt" min="0" id="rightAmt" v-model="rightAmt" v-on:change="getConvertedAmt('rightAmt')"/>
		</div>
	</div>

</template>


<script>
import { getRateForCurrency ,getCurrencies } from '@/utils/api';

export default {
	name: "CurrencyTool",

	data() {
		return {
			leftAmt: 1,
			rightAmt: 1,
			leftCur: "",
			rightCur: "",
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
		this.leftCur = this.AllCurrencies[Object.keys(this.AllCurrencies)[0]].code;
		this.rightCur = this.AllCurrencies[Object.keys(this.AllCurrencies)[0]].code;

	}

}


</script>

<style scoped>

#curc {
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1.5rem;
	height: 60vh;
}

/* #rightInp{
	width: 50%;
}

#leftInp {
	width: 50%;
} */


#rightCur{
	font-size: 1rem;
	border-radius: 6px;

}

#rightAmt{
	font-size: 1.5rem;
	margin-left: 0.5rem;
	border-radius: 6px;

}

#leftCur {
	font-size: 1rem;
	border-radius: 6px;

}

#leftAmt {
	font-size: 1.5rem;
	margin-left: 0.5rem;
	border-radius: 6px
}

#equals{
	font-size: 1rem;
}

</style>