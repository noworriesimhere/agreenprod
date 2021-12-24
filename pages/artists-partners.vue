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
          <section class="grid">
            <generic-card
              title="Chip Green"
              image="/uploads/chip-308.jpg"
              image-dimensions="2x1"
            >
              Chip Green (aka GreenGo, HipsterG and other characters) *
              Singer-Songwriter-Producer * Chip plays mostly private gigs and
              smaller venues * Link to music samples
            </generic-card>
            <generic-card
              title="Mike Golembeski"
              image="/uploads/chip-308.jpg"
              image-dimensions="2x1"
            >
              (aka MikeyG, Mike Francis) * Songwriter-Musician-Producer * Mike
              plays mostly private gigs with a variety of acts * Link to music
              samples Wes Malkin (with The Folk Weasels) * Musician-Producer *
              Videography, Graphics, Editing * Wes supports a wide range of
              for-profit and not-for-profit projects with a ‘can-do’ spirit *
              Link to music samples
            </generic-card>
            <generic-card
              title="Andrea Preston"
              image="/uploads/chip-308.jpg"
              image-dimensions="2x1"
            >
              Singer-Songwriter * Graphic artist, instructor * music samples
            </generic-card>
            <generic-card
              title="Brayan Perez"
              image="/uploads/chip-308.jpg"
              image-dimensions="2x1"
            >
              * Trombone Cuban-born, ‘fresh’ * Link to music samples
            </generic-card>
            <generic-card
              title="You?"
              image="/uploads/chip-308.jpg"
              image-dimensions="2x1"
            >
              Ready to JOIN the AGreen team?
            </generic-card>
          </section>
          <h2>Our Partners</h2>
          <hr />
          Talent agency Graphic design Green Ink - when the budget allows for
          that extra ‘corporate’ sophistication for your video or other media
          project.
        </main>
        <small>
          According to Florida law, ‘talent agency’ means any person who, for
          compensation, engages in the occupation or business of procuring or
          attempting to procure engagements for an artist. If you would like to
          engage with any of these artists for personal appearances, please
          contact the artist directly. AGreen Production represents the efforts
          of artists as ‘deliverables’, not as ‘artist for hire’. Engagement”
          means any employment or placement of an artist, where the artist
          performs in his or her artistic capacity. However, the term
          “engagement” shall not apply to procuring opera, music, theater, or
          dance engagements for any organization defined in s. 501(c)(3) of the
          Internal Revenue Code or any nonprofit Florida arts organization that
          has received a grant from the Division of Cultural Affairs of the
          Department of State or has participated in the state touring program
          of the Division of Cultural Affairs.
        </small>
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

  figure {
    margin: 0 !important;
  }
}
</style>
