<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { addCollection, Icon } from '@iconify/vue'
import { icons as lucideIcons } from '@iconify-json/lucide'
import Button from './components/ui/Button.vue'
import logoDark from './assets/logo-dark.png'
import logoLight from './assets/logo-light.png'

addCollection(lucideIcons)

type Locale = 'en' | 'zh'
type Theme = 'system' | 'light' | 'dark'

const appVersion = ref('')
const locale = ref<Locale>((localStorage.getItem('agentgo-locale') as Locale) || 'zh')
const theme = ref<Theme>((localStorage.getItem('agentgo-theme') as Theme) || 'dark')
const showSettings = ref(false)
const email = ref('')
const password = ref('')
const resolvedTheme = ref<'light' | 'dark'>('light')
const copy = computed(() =>
  locale.value === 'zh'
    ? {
        welcome: '欢迎回来',
        subtitle: '登录 AgentGo，继续你的智能工作流。',
        brandTitle: '让每一次工作，都更智能。',
        brandDescription: '连接你的 Agent 工作空间，专注于真正重要的事情。',
        secure: '安全可靠的智能工作空间',
        auth: '登录认证',
        email: '邮箱地址',
        emailPlaceholder: 'name@company.com',
        password: '密码',
        passwordPlaceholder: '请输入密码',
        forgot: '忘记密码？',
        signIn: '登录',
        noAccount: '还没有账号？',
        create: '创建账号',
        settings: '设置',
        settingsTitle: '应用设置',
        language: '语言',
        theme: '主题',
        system: '跟随系统',
        light: '浅色',
        dark: '深色',
        close: '关闭',
        footer: '安全、专注的 Agent 工作空间',
        remember: '记住我'
      }
    : {
        welcome: 'Welcome back',
        subtitle: 'Sign in to AgentGo and continue your intelligent workflow.',
        brandTitle: 'Make every workflow intelligent.',
        brandDescription: 'Connect to your Agent workspace and focus on what matters most.',
        secure: 'A secure intelligent workspace',
        auth: 'AUTHENTICATION',
        email: 'Email address',
        emailPlaceholder: 'name@company.com',
        password: 'Password',
        passwordPlaceholder: 'Enter your password',
        forgot: 'Forgot password?',
        signIn: 'Sign in',
        noAccount: "Don't have an account?",
        create: 'Create one',
        settings: 'Settings',
        settingsTitle: 'App settings',
        language: 'Language',
        theme: 'Theme',
        system: 'System',
        light: 'Light',
        dark: 'Dark',
        close: 'Close',
        footer: 'A secure, focused Agent workspace',
        remember: 'Remember me'
      }
)
const applyTheme = (): void => {
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  resolvedTheme.value = theme.value === 'system' ? (systemDark ? 'dark' : 'light') : theme.value
  document.documentElement.dataset.theme = resolvedTheme.value
}
const logoSrc = computed(() => (resolvedTheme.value === 'dark' ? logoDark : logoLight))
const systemThemeChanged = (): void => {
  if (theme.value === 'system') applyTheme()
}
watch(locale, (value) => localStorage.setItem('agentgo-locale', value))
watch(theme, (value) => {
  localStorage.setItem('agentgo-theme', value)
  applyTheme()
})
onMounted(async () => {
  const info = await window.api.getAppInfo()
  appVersion.value = info.version
  applyTheme()
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', systemThemeChanged)
})
onUnmounted(() =>
  window
    .matchMedia('(prefers-color-scheme: dark)')
    .removeEventListener('change', systemThemeChanged)
)
</script>

<template>
  <main class="login-shell">
    <div class="ambient ambient-one" />
    <div class="ambient ambient-two" />
    <header class="topbar">
      <div class="brand-mark"><Icon icon="lucide:sparkles" aria-hidden="true" /> AgentGo</div>
      <button
        class="settings-button"
        type="button"
        :aria-label="copy.settings"
        @click="showSettings = true"
      >
        <Icon icon="lucide:settings-2" aria-hidden="true" /><span>{{ copy.settings }}</span>
      </button>
    </header>
    <div class="split-layout">
      <aside class="brand-panel">
        <div class="brand-logo"><img :src="logoSrc" alt="AgentGo" /></div>
        <div class="eyebrow">AGENTGO DESKTOP</div>
        <h2>{{ copy.brandTitle }}</h2>
        <p>{{ copy.brandDescription }}</p>
        <div class="brand-trust">
          <Icon icon="lucide:shield-check" aria-hidden="true" />{{ copy.secure }}
        </div>
      </aside>
      <section class="login-card">
        <div class="eyebrow">{{ copy.auth }}</div>
        <h1>{{ copy.welcome }}</h1>
        <p class="subtitle">{{ copy.subtitle }}</p>
        <form class="login-form" @submit.prevent>
          <label class="field-label"
            ><span><Icon icon="lucide:mail" aria-hidden="true" />{{ copy.email }}</span
            ><input
              v-model="email"
              type="email"
              :placeholder="copy.emailPlaceholder"
              autocomplete="email"
              required
          /></label>
          <label class="field-label"
            ><span><Icon icon="lucide:lock-keyhole" aria-hidden="true" />{{ copy.password }}</span
            ><input
              v-model="password"
              type="password"
              :placeholder="copy.passwordPlaceholder"
              autocomplete="current-password"
              required
          /></label>
          <div class="form-row">
            <label class="remember"
              ><input type="checkbox" />
              <span><Icon icon="lucide:check" aria-hidden="true" />{{ copy.remember }}</span></label
            ><a class="text-action" href="#"
              ><Icon icon="lucide:key-round" aria-hidden="true" />{{ copy.forgot }}</a
            >
          </div>
          <Button class="submit-button"
            >{{ copy.signIn }} <Icon icon="lucide:arrow-right" aria-hidden="true"
          /></Button>
        </form>
        <p class="signup">
          {{ copy.noAccount }}
          <a class="text-action" href="#"
            ><Icon icon="lucide:user-plus" aria-hidden="true" />{{ copy.create }}</a
          >
        </p>
      </section>
    </div>
    <footer>
      <Icon icon="lucide:shield-check" aria-hidden="true" />{{ copy.footer }} ·
      {{ appVersion || '0.1.0' }}
    </footer>
    <div v-if="showSettings" class="modal-backdrop" @click.self="showSettings = false">
      <section
        class="settings-panel"
        role="dialog"
        aria-modal="true"
        :aria-label="copy.settingsTitle"
      >
        <div class="settings-heading">
          <div>
            <div class="eyebrow">AGENTGO</div>
            <h2>{{ copy.settingsTitle }}</h2>
          </div>
          <button
            class="close-button"
            type="button"
            :aria-label="copy.close"
            @click="showSettings = false"
          >
            <Icon icon="lucide:x" aria-hidden="true" />
          </button>
        </div>
        <div class="setting-group">
          <span class="setting-label"
            ><Icon icon="lucide:languages" aria-hidden="true" />{{ copy.language }}</span
          >
          <div class="segmented">
            <button type="button" :class="{ active: locale === 'en' }" @click="locale = 'en'">
              <Icon icon="lucide:languages" aria-hidden="true" />
              English</button
            ><button type="button" :class="{ active: locale === 'zh' }" @click="locale = 'zh'">
              <Icon icon="lucide:languages" aria-hidden="true" />
              中文
            </button>
          </div>
        </div>
        <div class="setting-group">
          <span class="setting-label"
            ><Icon icon="lucide:palette" aria-hidden="true" />{{ copy.theme }}</span
          >
          <div class="segmented theme-options">
            <button type="button" :class="{ active: theme === 'system' }" @click="theme = 'system'">
              <Icon icon="lucide:monitor-cog" aria-hidden="true" /> {{ copy.system }}</button
            ><button type="button" :class="{ active: theme === 'light' }" @click="theme = 'light'">
              <Icon icon="lucide:sun" aria-hidden="true" /> {{ copy.light }}</button
            ><button type="button" :class="{ active: theme === 'dark' }" @click="theme = 'dark'">
              <Icon icon="lucide:moon" aria-hidden="true" /> {{ copy.dark }}
            </button>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>
