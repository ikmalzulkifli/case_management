<template>
  <BaseDashboard title="Cases">
    <!-- Empty State -->
    <div v-if="!cases || cases.length === 0" class="empty-state">
      <div class="text-center">
        <v-icon
          icon="mdi-folder-outline"
          size="64"
          class="mb-4"
          style="color: #BDBDBD;"
        />
        <div class="text-h6 mb-2" style="color: #616161;">No cases found</div>
        <div class="text-body-1 mb-6" style="color: #757575;">
          Create your first case to start managing investigations
        </div>
        <v-btn
          color="primary"
          size="large"
          prepend-icon="mdi-plus"
          @click="createNewCase"
        >
          Create Case
        </v-btn>
      </div>
    </div>

    <!-- Cases Content (when cases exist) -->
    <div v-else>
      <div class="d-flex justify-space-between align-center mb-4">
        <div class="text-h6">Your Cases</div>
        <v-btn
          color="primary"
          prepend-icon="mdi-plus"
          @click="createNewCase"
        >
          Create Case
        </v-btn>
      </div>

      <!-- Cases Grid -->
      <div class="cases-grid">
        <v-card
          v-for="case_item in cases"
          :key="case_item.id"
          variant="outlined"
          class="case-card"
          @click="viewCase(case_item.id)"
        >
          <v-card-title class="pa-4">
            <div class="d-flex align-center">
              <v-icon
                icon="mdi-folder"
                color="primary"
                size="24"
                class="me-2"
              />
              <div>
                <div class="text-subtitle-1 font-weight-medium">
                  {{ case_item.case_number }}
                </div>
                <div class="text-caption text-medium-emphasis">
                  {{ case_item.title }}
                </div>
              </div>
            </div>
          </v-card-title>
          <v-card-text class="pa-4 pt-0">
            <div class="text-body-2 text-medium-emphasis">
              {{ case_item.description }}
            </div>
            <div class="d-flex align-center mt-2">
              <v-chip
                :color="getCaseStatusColor(case_item.status)"
                size="small"
                variant="outlined"
              >
                {{ case_item.status }}
              </v-chip>
              <div class="text-caption text-medium-emphasis ms-auto">
                {{ formatDate(case_item.created_at) }}
              </div>
            </div>
          </v-card-text>
        </v-card>
      </div>
    </div>
  </BaseDashboard>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import BaseDashboard from '../components/BaseDashboard.vue'
import { caseService } from '../services/case'

const router = useRouter()
const cases = ref([])
const loading = ref(false)
const error = ref(null)

const createNewCase = () => {
  router.push('/cases/new')
}

const viewCase = (caseId) => {
  router.push(`/cases/${caseId}`)
}

const getCaseStatusColor = (status) => {
  switch (status) {
    case 'open':
      return 'success'
    case 'closed':
      return 'grey'
    case 'in_progress':
      return 'primary'
    default:
      return 'grey'
  }
}

const formatDate = (dateString) => {
  if (!dateString) return 'N/A'
  const date = new Date(dateString)
  return date.toLocaleDateString()
}

const loadCases = async () => {
  try {
    loading.value = true
    error.value = null
    cases.value = await caseService.getCases()
  } catch (err) {
    error.value = `Error loading cases: ${err.message}`
    console.error('Error loading cases:', err)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  loadCases()
})
</script>

<style scoped>
.empty-state {
  padding: 60px 20px;
  background-color: #FAFAFA;
  border-radius: 8px;
  border: 1px solid #E0E0E0;
}

.cases-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
}

.case-card {
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid #E0E0E0;
}

.case-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.case-card:active {
  transform: translateY(0);
}
</style>