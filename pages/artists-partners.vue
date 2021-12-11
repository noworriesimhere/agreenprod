<template>
  <div id="home-page" class="page-wrapper home-page">
    <site-hero :title="title" :subtitle="subtitle" :image="featureImage">
      <button class="button is-primary">
        {{ $route.name }}
      </button>
    </site-hero>
    <main-section theme="one-column">
      <template v-slot:default>
        <markdown :markdown="$store.state.content" />
      </template>
      <template v-slot:sidebar>
        Nothing here
      </template>
    </main-section>
    <news-letter-form-modal />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { setPageData } from '../helper'
import NewsLetterFormModal from '~/components/NewsLetterFormModal'
import Markdown from '~/components/Markdown'

export default {
  name: 'ArtistsPartners',
  head() {
    return {
      title: `Artists & Partners | ${this.$siteConfig.siteName}`
    }
  },
  components: {
    NewsLetterFormModal,
    Markdown
  },
  computed: {
    ...mapState(['title', 'subtitle', 'featureImage'])
  },
  fetch({ store, params }) {
    setPageData(store, { resource: 'page', slug: 'artists-partners' })
  }
}
</script>

<style>
.home-page .under-subtitle {
  border-top: none;
}
</style>