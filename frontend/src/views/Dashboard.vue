<template>
  <BaseDashboard title="Dashboard">
    <!-- Welcome Section -->
    <v-row class="mb-6">
      <v-col cols="12">
        <v-card variant="outlined">
          <v-card-title class="d-flex align-center pa-6">
            <v-icon icon="mdi-home" color="primary" size="large" class="me-3" />
            <div>
              <div class="text-h5 font-weight-bold">Welcome to PDRM Case Management</div>
              <div class="text-body-1 text-medium-emphasis">
                Manage your investigations, cases, and evidence from one central location
              </div>
            </div>
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>

    <!-- Quick Stats -->
    <v-row class="mb-6">
      <v-col cols="12" sm="6" md="3">
        <v-card variant="outlined" class="stat-card">
          <v-card-text class="text-center">
            <v-icon icon="mdi-folder" color="primary" size="48" class="mb-2" />
            <div class="text-h4 font-weight-bold">{{ stats.cases }}</div>
            <div class="text-body-2 text-medium-emphasis">Total Cases</div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-card variant="outlined" class="stat-card">
          <v-card-text class="text-center">
            <v-icon icon="mdi-account-group" color="success" size="48" class="mb-2" />
            <div class="text-h4 font-weight-bold">{{ stats.entities }}</div>
            <div class="text-body-2 text-medium-emphasis">Entities</div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-card variant="outlined" class="stat-card">
          <v-card-text class="text-center">
            <v-icon icon="mdi-file-document" color="warning" size="48" class="mb-2" />
            <div class="text-h4 font-weight-bold">{{ stats.evidence }}</div>
            <div class="text-body-2 text-medium-emphasis">Evidence Files</div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-card variant="outlined" class="stat-card">
          <v-card-text class="text-center">
            <v-icon icon="mdi-target" color="info" size="48" class="mb-2" />
            <div class="text-h4 font-weight-bold">{{ stats.hunts }}</div>
            <div class="text-body-2 text-medium-emphasis">Active Hunts</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Recent Activity -->
    <v-row>
      <v-col cols="12" md="8">
        <v-card variant="outlined">
          <v-card-title class="d-flex align-center pa-4">
            <v-icon icon="mdi-clock" color="primary" size="24" class="me-2" />
            <div class="text-h6 font-weight-bold">Recent Activity</div>
          </v-card-title>
          <v-divider />
          <v-card-text class="pa-4">
            <div v-if="recentActivity.length === 0" class="text-center py-8">
              <v-icon icon="mdi-information" size="48" color="grey-lighten-1" class="mb-4" />
              <div class="text-body-1 text-medium-emphasis">No recent activity</div>
            </div>
            <div v-else>
              <div v-for="activity in recentActivity" :key="activity.id" class="mb-3">
                <div class="d-flex align-center">
                  <v-icon :icon="activity.icon" :color="activity.color" size="20" class="me-2" />
                  <div class="flex-grow-1">
                    <div class="text-body-2">{{ activity.description }}</div>
                    <div class="text-caption text-medium-emphasis">{{ activity.time }}</div>
                  </div>
                </div>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card variant="outlined">
          <v-card-title class="d-flex align-center pa-4">
            <v-icon icon="mdi-lightning-bolt" color="warning" size="24" class="me-2" />
            <div class="text-h6 font-weight-bold">Quick Actions</div>
          </v-card-title>
          <v-divider />
          <v-card-text class="pa-4">
            <div class="d-flex flex-column gap-2">
              <v-btn
                color="primary"
                prepend-icon="mdi-plus"
                variant="outlined"
                block
                @click="$router.push('/cases')"
              >
                New Case
              </v-btn>
              <v-btn
                color="secondary"
                prepend-icon="mdi-account-plus"
                variant="outlined"
                block
                @click="$router.push('/entities')"
              >
                Add Entity
              </v-btn>
              <v-btn
                color="info"
                prepend-icon="mdi-upload"
                variant="outlined"
                block
                @click="$router.push('/evidence')"
              >
                Upload Evidence
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </BaseDashboard>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import BaseDashboard from '../components/BaseDashboard.vue'

const stats = ref({
  cases: 0,
  entities: 0,
  evidence: 0,
  hunts: 0,
})

const recentActivity = ref([])

const loadDashboardData = async () => {
  // Mock data for now - replace with actual API calls
  stats.value = {
    cases: 12,
    entities: 48,
    evidence: 156,
    hunts: 3,
  }

  recentActivity.value = [
    {
      id: 1,
      description: 'New case "Investigation-2024-001" created',
      time: '2 hours ago',
      icon: 'mdi-folder-plus',
      color: 'primary',
    },
    {
      id: 2,
      description: 'Evidence uploaded to case "Investigation-2024-001"',
      time: '4 hours ago',
      icon: 'mdi-file-upload',
      color: 'success',
    },
    {
      id: 3,
      description: 'Entity "John Doe" added to case',
      time: '6 hours ago',
      icon: 'mdi-account-plus',
      color: 'info',
    },
  ]
}

onMounted(() => {
  loadDashboardData()
})
</script>

<style scoped>
.stat-card {
  height: 100%;
  transition: transform 0.2s ease;
}

.stat-card:hover {
  transform: translateY(-2px);
}

.gap-2 > * {
  margin-top: 8px;
}
</style>