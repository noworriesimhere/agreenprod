<template>
  <div id="home-page" class="page-wrapper home-page">
    <site-hero
      title="AGreen Production"
      subtitle="Ideation, Writing, Producing, Consulting"
      image="/uploads/drums.jpg"
    ></site-hero>
    <!-- <button
      v-if="$siteConfig.newsletter.on"
      class="button is-primary"
      @click="$eventBus.$emit('modal-triggered', 'newsletter-modal')"
    >
      Subscribe To Newsletter
    </button> -->
    <main-section theme="one-column">
      <template v-slot:default>
        <main class="content">
          <h2>
            You know quality production
          </h2>
          <p>
            <strong>We</strong> help to deliver quality through
            <strong>creative consultation</strong>,
            <strong>project management</strong> and
            <strong>artist-driven deliverables</strong>.
            <br />
            <br />
            <strong>You</strong> strive to deliver ‘classic’, entertaining
            content; material that makes people think and feel on deeper levels.
            That might be as a purveyor or as an artist.
            <br />
            <br />
            We want to help you to really reach people.
            <br />
            Together, we will be part of a creative effort where our combined
            talents and skills can be most effective.
            <span>
              A First rate artistry Green = backed by a proven name Production
              delivered well
            </span>
            <br />
            <br />
            Everyone wants to be moved. We do our best to move people in a
            positive direction. You’ll enjoy the fruits of every seed you’ve
            sown. AGreen supports positive karma with initiatives that bring
            large benefits to targeted audiences.
          </p>
        </main>
      </template>
    </main-section>
    <!-- <news-letter-form-modal /> -->
  </div>
</template>

<script>
// import { mapState } from 'vuex'
// import { setPageData } from '../helper'
// import NewsLetterFormModal from '~/components/NewsLetterFormModal'
// import Markdown from '~/components/Markdown'

export default {
  name: 'HomePage',
  head() {
    return {
      title: `Home | ${this.$siteConfig.siteName}`
    }
  }
  // components: {
  //   // NewsLetterFormModal,
  //   // Markdown
  // },
  // computed: {
  //   ...mapState(['title', 'subtitle', 'featureImage'])
  // // }
  // fetch({ store, params }) {
  //   setPageData(store, { resource: 'page', slug: 'home' })
  // }
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
