<template>
  <div>
    <!-- Error modal -->
    <base-dialog :show="!!error" @close="handleError" title="An error occurred">
      <p>{{ error }}</p>
    </base-dialog>
    <!-- Main Section -->
    <section>
      <!-- Filter -->
    </section>
    <section>
      <base-card>
        <div class="controls">
          <base-button mode="outline">Refresh</base-button>
          <base-button link to="/register">
            Login to Register as Coach
          </base-button>
        </div>
        <div v-if="isLoading">
          <base-spinner></base-spinner>
        </div>
        <ul>
          <coach-item
            v-for="coach in filteredCoaches"
            :key="coach.id"
            :lastName="coach.lastName"
            :firstName="coach.firstName"
            :areas="coach.area"
            :rate="coach.hourlyRate"
          ></coach-item>
        </ul>
      </base-card>
    </section>
  </div>
</template>

<script>
import CoachItem from "../../components/coaches/CoachItem.vue";
export default {
  components: {
    CoachItem,
  },
  data() {
    return {
      error: null,
      isLoading: false,
    };
  },
  created() {
    this.loadCoaches();
  },
  computed: {
    filteredCoaches() {
      return this.$store.getters["coaches/coaches"];
    },
  },
  methods: {
    handleError() {
      this.error = null;
    },
    async loadCoaches(refresh = false) {
      this.isLoading = true;
      try {
        await this.$store.dispatch("coaches/loadCoaches", {
          forceRefresh: refresh,
        });
      } catch (error) {
        this.error = error.message || "Something went wrong";
      }
      this.isLoading = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.controls {
  display: flex;
  justify-content: space-between;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
