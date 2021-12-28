<template>
  <div id="home-page" class="page-wrapper home-page">
    <site-hero
      title="Listen & Watch"
      subtitle=""
      image="/uploads/iphone-camera.jpg"
    ></site-hero>
    <main-section theme="one-column">
      <template v-slot:default>
        <main class="content">
          <section>
            <div class="is-ancestor">
              <div class="tile is-parent">
                <article class="tile is-child box">
                  <h2 class="title">
                    El Amor de Mi Vida
                  </h2>
                  <hr />
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/tpRdnNZrsUI"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </article>
              </div>
            </div>
          </section>
          <section>
            <p>StepKids - Insecure Troubadour</p>
          </section>
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

iframe[src*='youtube'] {
  width: 560px !important;
  height: 315px !important;
}
</style>
