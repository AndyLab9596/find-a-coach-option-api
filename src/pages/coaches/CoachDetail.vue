<template>
  <div>
    <section>
      <base-card>
        <h2>{{ fullName }}</h2>
        <h3>${{ rate }}/hour</h3>
      </base-card>
    </section>
    <section>
      <base-card>
        <header>
          <h2>Interested? Reach out now!</h2>
          <base-button v-if="!isCoachDetailContactLink" link :to="contactLink">
            Contact
          </base-button>
        </header>
        <router-view></router-view>
      </base-card>
    </section>
    <section>
      <base-card>
        <base-badge
          v-for="area in areas"
          :key="area"
          :type="area"
          :title="area"
        >
        </base-badge>
        <p>{{ description }}</p>
      </base-card>
    </section>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      selectedCoach: null,
    };
  },
  computed: {
    fullName() {
      return this.selectedCoach?.lastName + " " + this.selectedCoach?.firstName;
    },
    contactLink() {
      return this.$route.path + "/contact";
    },
    description() {
      return this.selectedCoach?.description;
    },
    rate() {
      return this.selectedCoach?.hourlyRate;
    },
    areas() {
      return this.selectedCoach?.areas;
    },
    isCoachDetailContactLink() {
      const matchedPath = this.$route.matched;
      if (matchedPath.length > 1) {
        return matchedPath[1]?.path === "/coaches/:id/contact";
      } else {
        return false;
      }
    },
  },

  created() {
    this.selectedCoach = this.$store.getters["coaches/coaches"].find(
      (coach) => coach.id === this.id
    );
  },
};
</script>
