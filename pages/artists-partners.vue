<template>
  <div class="page-wrapper home-page">
    <site-hero
      title="Featured Artists"
      subtitle="About The Collection"
      video="/uploads/artist-video.webm"
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
            <generic-card title="EnriqueZ" image="/uploads/image1.png">
              <br />
              Singer-Songwriter-Producer
              <br />
              This ‘Collection’ is the result of a mind-meld between Chip and multi-talented recording artist, EnriqueZ. Raised in Columbia, EnriqueZ steps up to the challenge of creating novel music meant to appeal to a younger, hipper demographic. He created fresh beats and back up tracks across a variety of styles and co-wrote the club-targeting song, Dance Now!.
            </generic-card>
            <generic-card title="Yolanda Harrold" image="/uploads/YolandaHarrold.jpg">
              <strong>Yolanda Harrold</strong>
              <br />
              <br />
              Yolanda Harrold, appearing as OmegaB, is a master-level performer and coach, with 25+ years of experience in the studio and on stage. She has contributed her harmonic skills to over a thousand studio recordings, supporting a number of high-profile artists, She has worked off-broadway and fronted bands. As a master voice coach, she helps to propel careers in the performing arts with her business. The Star Path (TSP). Yolanda’s pro approach to multi-layered harmony vocals and positive, supportive spirit were true gifts to this project. Yolanda contributes one song of her own (Never Alone) and delivers lead on one of Chip’s (Pain), singing all vocal parts in each.
            </generic-card>
            <generic-card title="Andrea Preston" image="/uploads/AndreaPreston.jpg">
              Singer-Songwriter
              <br />
              Andrea Preston is sharing her ‘new life’ with a fresh voice and smart, honest songwriting. Andrea has taken a leap of faith with this production by allowing GreenGo to create versions of her traditional, piano-based compositions that she might not have otherwise imagined. No one who has seen Andrea perform would expect her to have a ‘hip hop’ song, but here it is. Her music is timeless and ready-made for feature films. Andrea is a dedicated teacher and Mom with a deep well of ‘classic’ songs.
            </generic-card>
            <generic-card title="Sista Marybeth Desarle" image="/uploads/SistaMarybethDesarle.jpg">
              Sista Marybeth Desarle, a product of Brooklynn, NY, has been amazing South Florida audiences with her impressive blues and torch song skills for over 20 years. An accomplished guitarist and songwriter, Marybeth is both a solo performer and leader of the band for a wide range of venues. Often compared to Bonnie Rait, she brings her heart to everything she sings. With a style influenced by Portuguese Fado, Thread Bare is a bold departure for Marybeth, who’s original songs have gravitated toward ballads and rhythm and blues.
            </generic-card>
            <generic-card title="Pamela Knight" image="/uploads/PamelaKnight.jpg">
              Pamela Knight is a seasoned professional entertainer who has earned every right to the title of ‘The Diva’. From the time she won the Apollo Theater Amature Competion at the age of 17, Pam has been turning audiences into adoring fans, bringing her powerful five octave voice to a range of standards and dance music. She’s had hits in Europe with infectious dance songs including Respect with Spike. In the past twenty years, Pam has entertained in Europe and North Africa with events, recordings and even a role in a feature film. Today, Pam is wowing new audiences as the hit of South Florida with #PamelaKnightShow.. She co-writes and delivers her awe-inspiring vocal style to the soon-to-be-classic, Dance Now!.
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
