<template>
  <div class="min-h-screen flex flex-col">
    <header class="bg-gray-100 border-b">
      <div class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <div class="text-xl font-semibold">
            Logo
          </div>
          <nav>
            <AppNavigation />
          </nav>
        </div>
      </div>
    </header>

    <main class="flex-1 container mx-auto px-4 py-8">
      <slot />
    </main>

    <footer class="bg-gray-100 border-t mt-auto">
      <div class="container mx-auto px-4 py-4">
        <p class="text-center text-sm text-gray-600">
          © 2025 All rights reserved
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
// Layout with header and footer
// State management can be added here using Pinia if needed
</script>

