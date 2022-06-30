<template>
  <div id="home-page" class="page-wrapper home-page">
    <site-hero
      title="Listen & Watch"
      subtitle=""
      video="/uploads/listen-video.mp4"
    ></site-hero>
    <main-section theme="one-column">
      <template v-slot:default>
        <main class="content videos">
          <section>
            <div class="is-ancestor">
              <div class="grid">
                <article class="tile is-child box">
                  <h3 class="title">
                    El Amor de Mi Vida
                  </h3>
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
                <article class="tile is-child box">
                  <h3 class="title">
                    Insecure Troubadour
                  </h3>
                  <hr />
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/0BTGIjZhUt0"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </article>
              </div>
            </div>
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
  },
  computed: {
    // ...mapState(['title', 'subtitle', 'featureImage'])
  },
  fetch({ store, params }) {
    // setPageData(store, { resource: 'page', slug: 'listen-watch' })
  }
}
</script>

<style lang="scss">
.section {
  @media (max-width: 500px) {
    padding: 1rem!important;
  }
}

.videos {
  display: grid;
  place-items: center;
}

iframe[src*='youtube'] {
  width: 560px !important;
  min-height: 315px !important;

  @media (max-width: 500px) {
    min-height: 215px !important;
  }
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
}

.tile.is-child.box {
  margin: 2rem!important;

  @media (max-width: 500px) {
    margin: 1rem 0 !important;
  }
}
</style>
