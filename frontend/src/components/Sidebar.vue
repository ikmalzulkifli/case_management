<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-navigation-drawer
    v-model="drawer"
    :width="256"
    class="owlculus-sidebar"
    permanent
    style="background-color: #F8F9FA; border-right: 1px solid #E0E0E0;"
  >
    <!-- Logo Section -->
    <v-container class="pa-4">
      <div class="d-flex justify-center align-center" style="height: 120px">
        <v-img
          src="/pdrm_logo.png"
          alt="PDRM Logo"
          max-height="120"
          max-width="200"
          contain
        />
      </div>
    </v-container>

    <v-divider />

    <!-- Navigation Items -->
    <v-list nav density="comfortable" class="pt-4">
      <v-list-item
        v-for="item in navigationItems"
        :key="item.name"
        :to="item.href"
        :prepend-icon="item.icon"
        :title="item.name"
        color="primary"
        rounded="lg"
        class="ma-1 nav-item"
        min-height="48"
        :active-class="'nav-item-active'"
      />
    </v-list>

    <!-- Actions Section -->
    <template #append>
      <v-divider />
      <v-container class="pa-2">
        <v-btn
          prepend-icon="mdi-logout"
          text="Logout"
          color="error"
          variant="text"
          block
          size="default"
          class="justify-start"
          @click="handleLogout"
        />
      </v-container>
    </template>
  </v-navigation-drawer>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const drawer = ref(true)
const router = useRouter()
const authStore = useAuthStore()

const navigationItems = computed(() => {
  // Don't show any items until auth is initialized
  if (!authStore.isInitialized) {
    return []
  }

  const items = [
    { name: 'Dashboard', href: '/', icon: 'mdi-view-dashboard' },
    { name: 'Cases', href: '/cases', icon: 'mdi-folder-outline' },
    { name: 'Entities', href: '/entities', icon: 'mdi-account-group' },
    { name: 'Evidence', href: '/evidence', icon: 'mdi-file-document' },
    { name: 'Hunts', href: '/hunts', icon: 'mdi-target' },
    { name: 'Plugins', href: '/plugins', icon: 'mdi-wrench-outline' },
  ]

  // Add Clients for admin users
  if (authStore.requiresAdmin()) {
    items.push({ name: 'Clients', href: '/clients', icon: 'mdi-account-group-outline' })
  }

  // Add Admin settings for admin users
  if (authStore.requiresAdmin()) {
    items.push({ name: 'Admin', href: '/admin', icon: 'mdi-shield-account-outline' })
  } else {
    // Add regular settings for non-admin users
    items.push({ name: 'Settings', href: '/settings', icon: 'mdi-cog-outline' })
  }

  return items
})

const handleLogout = () => {
  authStore.logout()
  router.push('/login')
}
</script>

<style scoped>
/* Fix text clipping in navigation items and increase font size */
.nav-item :deep(.v-list-item-title) {
  line-height: 1.2;
  padding-bottom: 2px;
  font-size: 14px;
  font-weight: 500;
  color: #616161;
}

.nav-item :deep(.v-list-item__prepend) {
  color: #757575;
}

.nav-item:hover {
  background-color: #F5F5F5;
}

.nav-item-active {
  background-color: #E3F2FD !important;
}

.nav-item-active :deep(.v-list-item-title) {
  color: #1976D2 !important;
  font-weight: 600;
}

.nav-item-active :deep(.v-list-item__prepend) {
  color: #1976D2 !important;
}
</style>
