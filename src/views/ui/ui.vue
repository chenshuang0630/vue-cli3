<template>
  <div id="nav">
    <router-link to="/">page1</router-link>
    <router-link to="/page2">page2</router-link>
    <br />
    <div>
      <a href="index.html">跳转新的页面</a>
    </div>
    <router-view />
  </div>
</template>
<style>
  #nav {
    background: violet;
    text-align: center
  }

  #nav>a {
    display: inline;
    padding: 5px 10px;
  }

</style>
