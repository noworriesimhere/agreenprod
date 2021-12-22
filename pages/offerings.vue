<template>
  <div class="page-wrapper home-page">
    <site-hero
      title="Offerings"
      subtitle="Ideation, Writing, Producing, Consulting"
      image="/uploads/hand-pick.jpg"
    ></site-hero>
    <main-section theme="one-column">
      <template v-slot:default>
        <main class="content">
          <h2 class="title">
            Original Creative, Digital Video & Finished Copy-Driven Content
          </h2>
          <hr />
          <br />
          <div class="grid">
            <section class="section">
              <h3>Creative Project / Program Development</h3>

              ‘The Angle’, ‘The Look’ Social Media Coaching

              <h3>Writing / Editorial Services</h3>

              Promotional / PR Copy Songs/Jingles Fiction Drama

              <h3>Producer Services</h3>

              Song Development; arrangement and recording Video Production

              <h3>Entertainment Deliverables</h3>

              Original Songs and Compositions Original Music Recordings Music
              Video Productions On-Demand and Live Feeds - Audio and Video
            </section>
            <section class="section">
              <h3>Marketing and PR Services</h3>

              Brand development Gig and tour promo Social amplification
              ‘Package’ development and distribution Video News Releases (VNR’s)

              <h3>Live Entertainment / Events</h3>

              Deployment of talent for specific events and venues Matching
              performers with gigs

              <h3>Artist Development and A&R Services</h3>

              Image and on-camera coaching services Artistic Direction and
              Producer services

              <h3>Innovation</h3>

              Outside distance events Indoor-outdoor, Hybrid Virtual reality
            </section>
          </div>
          <hr />
          <h2 class="title">
            <em>Put aside the pain.</em>
          </h2>
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
  name: 'Offerings',
  head() {
    return {
      title: `Offerings | ${this.$siteConfig.siteName}`
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
    // setPageData(store, { resource: 'page', slug: 'offerings' })
  }
}
</script>

<style scoped lang="scss">
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  .section {
    padding: 1rem;
  }
}
</style>
