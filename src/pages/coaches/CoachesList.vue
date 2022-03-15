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
        <ul></ul>
      </base-card>
    </section>
  </div>
</template>

<script>
// import CoachItem from "../../components/coaches/CoachItem.vue";
export default {
  components: {
    // CoachItem,
  },
  data() {
    return {
      error: null,
      isLoading: false,
    };
  },
  methods: {
    handleError() {
      this.error = null;
    },
  },
};
</script>

<style lang="scss" scoped>
.controls {
  display: flex;
  justify-content: space-between;
}
</style>
