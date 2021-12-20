<template>
  <div id="home-page" class="page-wrapper home-page">
    <site-hero
      title="Offerings"
      subtitle="Ideation, Writing, Producing, Consulting"
      image="/uploads/hand-pick.jpg"
    ></site-hero>
    <main-section theme="one-column">
      <template v-slot:default>
        <main class="content">
          <h2>
            Deliverables - Original Creative, Digital Video & Finished
            Copy-Driven Content, Programs
          </h2>

          <h2>Applications</h2>

          <h3>Creative Project / Program Development</h3>

          ‘The Angle’, ‘The Look’ Social Media Coaching

          <h3>Writing / Editorial Services</h3>

          Promotional / PR Copy Songs/Jingles Fiction Drama

          <h3>Producer Services</h3>

          Song Development; arrangement and recording Video Production

          <h3>Entertainment Deliverables</h3>

          Original Songs and Compositions Original Music Recordings Music Video
          Productions On-Demand and Live Feeds - Audio and Video

          <h3>Marketing and PR Services</h3>

          Brand development Gig and tour promo Social amplification ‘Package’
          development and distribution Video News Releases (VNR’s)

          <h3>Live Entertainment / Events</h3>

          Deployment of talent for specific events and venues Matching
          performers with gigs

          <h3>Artist Development and A&R Services</h3>

          Image and on-camera coaching services Artistic Direction and Producer
          services

          <h3>Innovation</h3>

          Outside distance events Indoor-outdoor, Hybrid Virtual reality *Put
          aside the pain.*
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

<style>
.home-page .under-subtitle {
  border-top: none;
}
</style>
