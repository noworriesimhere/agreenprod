<template>
  <div class="page-wrapper home-page">
    <site-hero
      title="Featured Artists"
      subtitle="AGreen Production"
      image="/uploads/open-mic.jpg"
    ></site-hero>
    <main-section theme="one-column">
      <template v-slot:default>
        <!-- <markdown :markdown="$store.state.content" /> -->
        <main class="content">
          <section class="grid artists">
            <generic-card title="Chip Green" image="/uploads/chip.jpg">
              <strong>(aka GreenGo, HipsterG and other characters)</strong>
              <br />
              Singer-Songwriter-Producer
              <br />
              Chip plays mostly private gigs and smaller venues * Link to music
              samples
            </generic-card>
            <!-- <generic-card title="Mike Golembeski" image="/uploads/image1.png">
              <strong>(aka MikeyG, Mike Francis)</strong>
              <br />
              Songwriter-Musician-Producer
              <br />
              Mike plays mostly private gigs with a variety of acts * Link to
              music samples Wes Malkin (with The Folk Weasels) *
              Musician-Producer * Videography, Graphics, Editing * Wes supports
              a wide range of for-profit and not-for-profit projects with a
              ‘can-do’ spirit * Link to music samples
            </generic-card>
            <generic-card title="Andrea Preston" image="/uploads/image1.png">
              Singer-Songwriter
              <br />
              Graphic artist, instructor * music samples
            </generic-card>
            <generic-card title="Brayan Perez" image="/uploads/image1.png">
              Trombone Cuban-born, ‘fresh’
              <br />
              Link to music samples
            </generic-card> -->
            <generic-card title="You?" image="/uploads/image1.png">
              Ready to JOIN the AGreen team?
            </generic-card>
          </section>
          <div class="alternate-content">
            <h2 class="title">
              Our Partners
            </h2>
            <hr />
            <div class="grid-content">
              <div class="grid-items">
                <figure class="image is-4by3">
                  <opti-image
                    :src="require('~/assets/uploads/logogreen.png').src"
                    :srcset="require('~/assets/uploads/logogreen.png').srcSet"
                  />
                </figure>
                <p class="description">
                  When the budget allows for that extra ‘corporate’
                  sophistication for your video or other media project.
                </p>
              </div>
            </div>
          </div>
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
import GenericCard from '~/components/cards/GenericCard'

export default {
  name: 'ArtistsPartners',
  head() {
    return {
      title: `Artists & Partners | ${this.$siteConfig.siteName}`
    }
  },
  components: {
    // NewsLetterFormModal,
    // Markdown
    GenericCard
  },
  computed: {
    GenericCard // ...mapState(['title', 'subtitle', 'featureImage'])
  },
  fetch({ store, params }) {
    // setPageData(store, { resource: 'page', slug: 'artists-partners' })
  }
}
</script>

<style lang="scss" scoped>
.content .grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 2em;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
}
.alternate-content {
  padding: 4rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }

  .grid-content {
    display: grid;
    place-items: center;
    /* grid-template-columns: 1fr 1fr 1fr; */

    @media (max-width: 768px) {
      /* grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1fr; */
    }

    .grid-items {
      padding: 1rem;
      max-width: 30%;
    }
  }
}
</style>
<style>
.content figure {
  margin: 0;
}

.artists a {
  cursor: default;
}
</style>
