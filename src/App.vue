<template>
  <div id="app">
    <header>
      <div class="nfrtt-logo-container">
        <NfrttLogo />
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
        <router-view/>
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
import NfrttLogo from '@/components/NfrttLogo';

export default {
  name: 'app',
  components: { NfrttLogo },
};
</script>

<style scoped>
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
