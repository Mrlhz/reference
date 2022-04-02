<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
// @ is an alias to /src
import { mapState, mapActions } from 'vuex'

export default {
  name: 'HomeView',
  components: {},
  computed: {
    ...mapState('app', ['language']),
  },
  mounted() {
    // this.getLanguage('en');
    // ==
    this.$store.dispatch('app/getLanguage', 'en')
  },
  methods: {
    ...mapActions('app', ['getLanguage']),
  },
}
</script>
