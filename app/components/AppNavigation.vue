<template>
  <ul class="flex gap-4">
    <li>
      <NuxtLink
        to="/"
        class="hover:text-blue-600 transition-colors"
        active-class="text-blue-600 font-semibold"
      >
        Home
      </NuxtLink>
    </li>
    <li>
      <NuxtLink
        to="/about"
        class="hover:text-blue-600 transition-colors"
        active-class="text-blue-600 font-semibold"
      >
        About
      </NuxtLink>
    </li>
    <li>
      <NuxtLink
        to="/services"
        class="hover:text-blue-600 transition-colors"
        active-class="text-blue-600 font-semibold"
      >
        Services
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
// Navigation component
// Can be extended with state management if needed
</script>

