<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld :msg="$frontmatter.title" />

      <div id="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </div>
    </div>
  </header> -->
  <section class="default" min-h-screen flex flex-col>
    <TheHeader p-4 mb-8 />
    <main p-4 lg:p-0 w-full max-w-prose m-auto flex-grow>
      <slot />
    </main>
    <TheFooter p-4 min-h-30 />
  </section>
</template>

<style lang="sass">
* 
  box-sizing: border-box 
html,body
  width: 100vw 
  overflow-x: hidden 
h1,h2,h3
  @apply font-serif 
body 
  margin-left: 0 
  margin-right: 0 
  margin-bottom: 0
</style>
