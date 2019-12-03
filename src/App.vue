<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">🏰 Home <span>⤵</span></router-link>
      <router-link to="/about">🔮 About <span>⤵</span></router-link>
      <router-link to="/contact">📌 Contact <span>⤵</span></router-link>
    </div>
    <br><br><br>
    <router-view/>
    <div class="footer_">
      <p>
        By Desiré M Carmona©
      </p>
    </div>
  </div>
</template>

<style lang="scss">
@import "./css/main.scss";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2d132c;
}

#nav {
  z-index: 4;
  box-shadow: 2px 2px 18px $solightorange;
  background: $solightorange;
  width: 100%;
  position: fixed;
  padding-top: 30px;
  padding-bottom: 30px;
  font-family: 'Karla', sans-serif;
  font-size: 1.2em;
  text-align: center;
  span{
    display:none;
  }

  a {
    font-weight: bold;
    color: #2d132c;
    text-decoration: none;
    margin: 0.500rem;
    text-align: center;
    &:hover{
      cursor: pointer;
      color: #fc7978;
    }
    &.router-link-exact-active {
      color: #f67280;
      span{
        display: inline-block;
      }
    }
  }
}
</style>
