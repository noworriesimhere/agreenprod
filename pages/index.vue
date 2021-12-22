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
          <h2 class="title">
            You know quality production
          </h2>
          <hr />
          <section>
            <p>
              <strong>We</strong> help to deliver quality through
              <strong>creative consultation</strong>,
              <strong>project management</strong> and
              <strong>artist-driven deliverables</strong>.
              <br />
              <br />
              <strong>You</strong> strive to deliver ‘classic’, entertaining
              content; material that makes people think and feel on deeper
              levels. That might be as a purveyor or as an artist.
              <br />
              <br />
              We want to help you to really reach people.
              <br />
              Together, we will be part of a creative effort where our combined
              talents and skills can be most effective.
            </p>
          </section>
          <section class="alternate-content">
            <div class="grid-content">
              <div class="grid-items">
                <h2 class="subtitle">
                  <strong>A</strong>
                </h2>
                <p class="description">
                  <i class="far fa-check-circle fa-3x"></i>
                  <br />
                  First Rate Artistry
                </p>
              </div>
              <div class="grid-items">
                <h2 class="subtitle">
                  <strong>Green</strong>
                </h2>
                <p class="description">
                  <i class="fas fa-shield-alt fa-3x"></i>
                  <br />
                  Backed By a Proven Name
                </p>
              </div>
              <div class="grid-items">
                <h2 class="subtitle">
                  <strong>Production</strong>
                </h2>
                <p class="description">
                  <i class="far fa-paper-plane fa-3x"></i>
                  <br />
                  Delivered Well
                </p>
              </div>
            </div>
          </section>
          <section>
            <p>
              Everyone wants to be moved. We do our best to move people in a
              positive direction. You’ll enjoy the fruits of every seed you’ve
              sown. AGreen supports positive karma with initiatives that bring
              large benefits to targeted audiences.
            </p>
          </section>
          <h2>Recent Events</h2>
          <hr />
        </main>
        <section>
          <posts-grid />
        </section>
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

<style scoped lang="scss">
.home-page .under-subtitle {
  border-top: none;
}

.alternate-content {
  margin: 2rem 0;
  padding: 4rem;
  text-align: center;

  .grid-content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1fr;
    }

    .grid-items {
      padding: 1rem;
    }
  }

  .description {
    padding-bottom: 2rem;
  }

  i {
    color: $primary;
    padding-bottom: 2rem;
  }
}
</style>
