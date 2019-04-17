<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <br />
    <div>
      <a href="ui.html">跳转新的页面</a>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  mounted () {
    console.log(this)
    console.log(this.$router)
  }
}

</script>
<style>
  #nav {
    background: cadetblue;
    text-align: center
  }

  #nav>a {
    display: inline;
    padding: 5px 10px;
  }

</style>
