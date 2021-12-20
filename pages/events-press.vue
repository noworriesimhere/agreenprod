<template>
  <div class="page-wrapper home-page">
    <site-hero
      title="Keep up to date with us"
      subtitle="AGreen Production"
      image="/uploads/Bryan_El_Amor.jpg"
    ></site-hero>
    <button
      v-if="$siteConfig.newsletter.on"
      class="button is-primary"
      @click="$eventBus.$emit('modal-triggered', 'newsletter-modal')"
    >
      Subscribe To Newsletter
    </button>
    <main-section theme="one-column">
      <template v-slot:default>
        <!-- All Posts -->
        <posts-grid />
      </template>
      <template v-slot:sidebar>
        Nothing here
      </template>
    </main-section>
    <news-letter-form-modal />
  </div>
</template>

<script>
// import { mapState } from 'vuex'
// import { setPageData } from '../helper'
// import NewsLetterFormModal from '~/components/NewsLetterFormModal'
// import Markdown from '~/components/Markdown'

export default {
  name: 'EventsShowdates',
  head() {
    return {
      title: `Events & Show Dates | ${this.$siteConfig.siteName}`
    }
  },
  components: {
    // NewsLetterFormModal,
    // Markdown
  },
  computed: {
    // ...mapState(['title', 'subtitle', 'featureImage'])
  },
  fetch({ store, params }) {
    // setPageData(store, { resource: 'page', slug: 'events-showdates' })
  }
}
</script>

<style>
.home-page .under-subtitle {
  border-top: none;
}
</style>
