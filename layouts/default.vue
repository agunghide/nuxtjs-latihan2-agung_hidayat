<template>
  <div 
    class="
      w-screen 
      h-screen 
      bg-gray-300
    "
    >
    <nav 
      class="
      bg-white 
        flex 
        justify-between 
        py-4
        px-8
      "
    >
      <div class="flex items-center font-medium text-3xl px-3">
        ᮔᮊ᮪ᮞ᮪<span class="text-green-500">ᮏ᮪ᮞ᮪</span>
      </div>
      <ul 
        class="
          flex 
          text-green-700 
          space-x-6 
          font-medium
        "
      >
        <nuxt-link class="nav-item" v-for="(menu, index) in menus" :class="{'active' : $nuxt.$route.path === menu.route }" :to="menu.route" :key="`menu-${index}`">
          {{ menu.title }}
        </nuxt-link>
      </ul>
    </nav>
    <div>
      <nuxt />
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      menus: [
        { title: 'Home', route: '/' },
        { title: 'Profile', route: '/profile' },
        { title: 'Contact', route: '/contact' },
      ]
    }
  },
}
</script>
