<template>
<div id="calc">
	<input id="calcDisplay" v-bind:value="displayText"  readonly/>
	<div id="calcKeys">
		<button v-on:click="addToDisplay('7')">7</button>
		<button v-on:click="addToDisplay('8')">8</button>
		<button v-on:click="addToDisplay('9')">9</button>
		<button v-on:click="addToDisplay('+')" class="operatorButton">+</button>
		<button v-on:click="addToDisplay('4')">4</button>
		<button v-on:click="addToDisplay('5')">5</button>
		<button v-on:click="addToDisplay('6')">6</button>
		<button v-on:click="addToDisplay('-')" class="operatorButton">-</button>
		<button v-on:click="addToDisplay('1')">1</button>
		<button v-on:click="addToDisplay('2')">2</button>
		<button v-on:click="addToDisplay('3')">3</button>
		<button v-on:click="addToDisplay('*')" class="operatorButton">*</button>
		<button v-on:click="addToDisplay('0')">0</button>
		<button v-on:click="clearDisplay()" class="operatorButton">C</button>
		<button v-on:click="calculate()" class="operatorButton">=</button>
		<button v-on:click="addToDisplay('/')" class="operatorButton">/</button>
		<button v-on:click="addToDisplay('.')">.</button>
		
	</div>

</div>


</template>

<script>

export default {
	name: "CalculatorTool",

	data() {
		return {
			displayText: " "
		}
	},

	methods: {
		addToDisplay(input)
		{
			this.displayText += input;

		},

		calculate()
		{
			try
			{
				this.displayText = eval(this.displayText);
			}
			catch(error)
			{
				this.displayText = "Invalid Expr";
			}

		},

		clearDisplay()
		{
			this.displayText = "";

		}
	}
}

</script>

<style scoped>

	button {
		width: 100px;
		height: 100px;
		border-radius: 50px;
		border: none;
		background-color: darkgray;
		color: white;
		font-size: 3rem;
		font-weight: bold;
		cursor: pointer;
	}
	button:hover{
		background-color: lightgray;
	}
	button:active{
		background-color: white;;
	}
	.operatorButton{
		background-color: coral;
	}

	.operatorButton:hover{
		background-color: lightcoral;
	}

	.operatorButton:active{
		background-color: white;
	}
	
	#calcKeys{
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 10px;
		padding: 25px;

	}

	#calc{
		font-family: Arial, Helvetica, sans-serif;
		background-color: black;
		border-radius: 15px;
		max-width: 500px;
		overflow: hidden;
	}
	
	#calcDisplay{
		width: 100%;
		padding: 20px;
		font-size: 5rem;
		text-align: left;
		border: none;
		color: white;
		background-color: gray;
	}



</style>