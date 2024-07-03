<template>
  <!--<img alt="Vue logo" src="./assets/logo.png">-->
  <!--<HelloWorld msg="Welcome to Your Vue.js App" second=11 />-->
  <!--<CalculatorTool/>
  <CurrencyTool />-->

  <router-link to="/calc"> Calculator </router-link> 
  <router-link to="/currency"> Currency Converter </router-link>

  <div>
	<router-view></router-view>
  </div>

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import CalculatorTool from './components/Calc.vue'

export default {
  name: 'App'
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
