<template>
  <div class="page-wrapper home-page">
    <site-hero
      title="Offerings"
      subtitle="Ideation, Writing, Producing, Consulting"
      video="/uploads/oferings-video.webm"
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
              <p>
                ‘The Angle’, ‘The Look’
                <br />
                Social Media Coaching
              </p>

              <h3>Writing / Editorial Services</h3>
              <p>
                Promotional / PR Copy
                <br />
                Songs / Jingles
                <br />
                Fiction
                <br />
                Drama
              </p>
              <h3>Producer Services</h3>
              <p>
                Song Development; arrangement and recording
                <br />
                Video Production
              </p>
              <h3>Entertainment Deliverables</h3>
              <p>
                Original Songs / Compositions
                <br />
                Original Music Recordings
                <br />
                Music Video Productions
                <br />
                On-Demand / Live Feeds; audio / video
              </p>
            </section>
            <section class="section">
              <h3>Marketing / PR Services</h3>
              <p>
                Brand Development
                <br />
                Gig / Tour Promo
                <br />
                Social Amplification ‘Package’
                <br />
                Development / Distribution
                <br />
                Video News Releases (VNR’s)
              </p>

              <h3>Live Entertainment / Events</h3>
              <p>
                Deployment of talent for specific events / programs
                <br />
                Matching performers with gigs
              </p>

              <h3>Artist Development / A&R Services</h3>
              <p>
                Image and on-camera prep services
                <br />
                Original Content Development
              </p>

              <h3>Innovation</h3>
              <p>
                Outside distance events
                <br />
                Indoor-outdoor Hybrid
                <br />
                Virtual reality
              </p>
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
