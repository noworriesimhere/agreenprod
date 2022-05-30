<template>
  <div id="home-page" class="page-wrapper home-page">
    <site-hero
      title="AGreen Production"
      subtitle="Ideation, Writing, Producing, Consulting"
      video="/uploads/homevideo.mp4"
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
            </p>

            <p>
              <strong>You</strong> strive to deliver ‘classic’, entertaining
              content; material that makes people think and feel on deeper
              levels. That might be as a purveyor or as an artist.
            </p>

            <p><strong>We</strong> want to help you to really reach people.</p>
            <p>
              <strong>Together</strong>, we will be part of a creative effort
              where our combined talents and skills can be most effective.
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
          <section class="aside">
            <div>
              <p>
                Everyone wants to be moved. <strong>We</strong> do our best to
                move people in a positive direction.
              </p>
              <p>
                AGreen supports <strong>positive karma</strong> with initiatives
                that bring large benefits to targeted audiences.
              </p>
            </div>
            <div>
              <h3 class="title">
                <em>
                  <strong>You’ll</strong> enjoy the fruits of every seed
                  <strong>you’ve</strong> sown.
                </em>
              </h3>
            </div>
          </section>
          <h2>Events</h2>
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
  padding: 4rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }

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

.aside {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
  }
}
</style>
