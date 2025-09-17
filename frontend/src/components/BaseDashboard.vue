<template>
  <div>
    <Sidebar v-if="showSidebar" />

    <v-main style="background-color: #FAFAFA;">
      <v-container fluid class="pa-6">
        <!-- Page Header -->
        <div class="page-header mb-6">
          <div class="d-flex align-center justify-space-between">
            <div class="text-h4 font-weight-bold">{{ title }}</div>
            <div class="d-flex align-center ga-3">
              <v-text-field
                v-model="searchQuery"
                placeholder="Search..."
                prepend-inner-icon="mdi-magnify"
                variant="outlined"
                density="comfortable"
                hide-details
                style="max-width: 300px;"
                class="search-field"
              />
              <v-avatar size="40" class="user-avatar">
                <v-icon>mdi-account-circle</v-icon>
              </v-avatar>
            </div>
          </div>
        </div>

        <!-- Loading State -->
        <slot name="loading" v-if="loading">
          <v-card variant="outlined">
            <v-card-title class="d-flex align-center pa-4 header-gradient text-white">
              <v-skeleton-loader type="text" width="200" />
              <v-spacer />
              <v-skeleton-loader type="button" width="120" />
              <v-skeleton-loader type="text" width="200" class="ml-2" />
            </v-card-title>
            <v-divider />
            <v-skeleton-loader class="pa-4" type="table" />
          </v-card>
        </slot>

        <!-- Error State -->
        <slot name="error" v-else-if="error">
          <v-alert
            type="error"
            variant="tonal"
            border="start"
            prominent
            icon="mdi-alert-circle"
            class="mb-6"
          >
            <v-alert-title>Error Loading {{ title }}</v-alert-title>
            {{ error }}
          </v-alert>
        </slot>

        <!-- Main Content -->
        <slot v-else />
      </v-container>
    </v-main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Sidebar from './Sidebar.vue'

defineProps({
  title: {
    type: String,
    required: true,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  error: {
    type: String,
    default: null,
  },
  showSidebar: {
    type: Boolean,
    default: true,
  },
})

const searchQuery = ref('')
</script>

<style scoped>
.page-header {
  padding: 24px 0;
  border-bottom: 1px solid #E0E0E0;
}

.search-field {
  background-color: #FFFFFF;
}

.user-avatar {
  background-color: #E3F2FD;
  color: #1976D2;
}

.text-h4 {
  color: #212121;
  font-weight: 600;
}
</style>
