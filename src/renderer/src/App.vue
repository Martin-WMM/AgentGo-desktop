<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Button from './components/ui/Button.vue'

const appVersion = ref('')

onMounted(async () => {
  const info = await window.api.getAppInfo()
  appVersion.value = info.version
})
</script>

<template>
  <main
    class="flex min-h-screen items-center justify-center bg-background px-6 py-12 text-foreground"
  >
    <section
      class="w-full max-w-2xl rounded-3xl border border-border bg-card p-10 shadow-2xl shadow-black/10"
    >
      <img
        class="mx-auto mb-8 h-28 w-28 rounded-2xl object-contain shadow-lg"
        src="./assets/agentgo-logo.png"
        alt="AgentGo logo"
      />
      <div class="space-y-4 text-center">
        <p class="text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
          AgentGo Desktop
        </p>
        <h1 class="text-4xl font-semibold tracking-tight">Your Agent workspace is ready.</h1>
        <p class="mx-auto max-w-lg text-base leading-7 text-muted-foreground">
          The cross-platform desktop client is initialized and ready to connect to AgentGo Backend.
        </p>
        <div class="flex items-center justify-center gap-3 pt-4">
          <span
            class="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
            >Electron</span
          >
          <span
            class="rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground"
            >Vue</span
          >
          <span
            class="rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground"
            >Tailwind CSS</span
          >
        </div>
        <Button class="mt-4">Connect to AgentGo Backend</Button>
        <p class="pt-5 text-xs text-muted-foreground">Version {{ appVersion || '0.1.0' }}</p>
      </div>
    </section>
  </main>
</template>
