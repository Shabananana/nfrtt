<template>
  <div>
    <header>
      <div id="nfrtt-logo" class="nfrtt-logo-container">
        <NfrttLogo ></NfrttLogo>
      </div>
      <nav class="navigation">
        <ul>
          <li>
            <router-link to="/helloworld">Go to Bar</router-link>
          </li>
        </ul>
      </nav>
    </header>
    <main class="main">
      <div class="content">
        <h1 class="headline">This is a headline</h1>
      </div>
    </main>
    <footer>
      <ul>
        <li>
          <router-link to="/helloworld">Hello World!</router-link>
        </li>
        <li>
          <router-link to="/helloworld">Hello World!</router-link>
        </li>
        <li>
          <router-link to="/helloworld">Hello World!</router-link>
        </li>
        <li>
          <router-link to="/helloworld">Hello World!</router-link>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      msg: 'Welcome to da NFRTT',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  color: #262828;
  font-family: 'Roboto Condensed', sans-serif;
  background-color: #f1f1f1;
  background-image: url('../assets/asfalt-dark.png');
}

h1 {
  font-size: 48px;
}

h2 {
  font-size: 36px;
}

h3 {
  font-size: 28px;
}

h4 {
  font-size: 20px;
}

.headline {
  font-family: 'Bungee', cursive;
}

header, footer {
  width: 100%;
}

.main {
  width: 80%;
  margin: 0 auto;
}
</style>
