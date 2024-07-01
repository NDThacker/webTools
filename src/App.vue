<template>
  <!--<img alt="Vue logo" src="./assets/logo.png">-->
  <!--<HelloWorld msg="Welcome to Your Vue.js App" second=11 />-->
  <!--<CalculatorTool/>-->
  <CurrencyTool />

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import CalculatorTool from './components/Calc.vue'
import CurrencyTool from './components/CurrencyConverter.vue'; 

export default {
  name: 'App',
  components: {
    // HelloWorld,
	// CalculatorTool,
	CurrencyTool
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
