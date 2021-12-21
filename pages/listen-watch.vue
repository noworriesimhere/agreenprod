<template>
  <div id="home-page" class="page-wrapper home-page">
    <site-hero
      title="Listen & Watch"
      subtitle="subtitle here"
      image="/uploads/iphone-camera.jpg"
    ></site-hero>
    <main-section theme="one-column">
      <template v-slot:default>
        <main class="content">
          <p>El Amor de Mi Vida</p>

          <p>Chariots (Steve)</p>

          <p>StepKids - Insecure Troubadour</p>
        </main>
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
  name: 'ListenWatch',
  head() {
    return {
      title: `Listen & Watch | ${this.$siteConfig.siteName}`
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
    // setPageData(store, { resource: 'page', slug: 'listen-watch' })
  }
}
</script>

<style>
.home-page .under-subtitle {
  border-top: none;
}
</style>
