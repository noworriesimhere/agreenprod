<template>
  <div class="page-wrapper home-page">
    <site-hero
      title="Events and Show Dates"
      subtitle="See our latest events"
      image="/uploads/Bryan_El_Amor.jpg"
    >
      <!-- <button class="button is-primary" @click="$router.push('categories')">
        View Categories
      </button> -->
    </site-hero>
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
