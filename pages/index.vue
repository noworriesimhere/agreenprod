<template>
  <div id="home-page" class="page-wrapper home-page">
    <site-hero :title="title" :subtitle="subtitle" :image="featureImage">
      <!-- <button
        v-if="$siteConfig.newsletter.on"
        class="button is-primary"
        @click="$eventBus.$emit('modal-triggered', 'newsletter-modal')"
      >
        Subscribe To Newsletter
      </button> -->
    </site-hero>
    <main-section theme="one-column">
      <template v-slot:default>
        <!-- All Posts -->
        <markdown :markdown="$store.state.content" />
      </template>
      <template v-slot:sidebar>
        Nothing here
      </template>
    </main-section>
    <!-- <news-letter-form-modal /> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { setPageData } from '../helper'
// import NewsLetterFormModal from '~/components/NewsLetterFormModal'
import Markdown from '~/components/Markdown'

export default {
  name: 'HomePage',
  // head() {
  //   return {
  //     title: `Home | ${this.$siteConfig.siteName}`
  //   }
  // },
  components: {
    // NewsLetterFormModal,
    Markdown
  },
  computed: {
    ...mapState(['title', 'subtitle', 'featureImage'])
  },
  fetch({ store, params }) {
    setPageData(store, { resource: 'page', slug: 'home' })
  }
}
</script>

<style>
.home-page .under-subtitle {
  border-top: none;
}

/* .section {
  text-align: center;
  max-width: 600px;
} */
</style>
