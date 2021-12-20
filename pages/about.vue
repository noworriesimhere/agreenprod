<template>
  <div id="about-page" class="page-wrapper about-page content-page">
    <site-hero
      title="About Us"
      subtitle="AGreen Production"
      image="/uploads/Bryan_El_Amor.jpg"
    ></site-hero>
    <!-- <main-section theme="sidebar-right"> -->
    <main-section>
      <template v-slot:default>
        <main class="content">
          <p>
            <strong>For more than thirty three and a third years</strong>,
            writer-producer-director, Alan “Chip” Green, Jr. has supported
            corporate leaders including IBM, HERE Technologies, CenturyLink and
            other innovators in the development of high quality video and a wide
            range of media content across tens of programs and hundreds of
            projects.
          </p>
          <p>
            With <strong>AGreen Production</strong>, Chip brings that ‘yankee
            ingenuity’ and innate creativity to globally-targeted projects; ones
            that might change the world for the better.
          </p>
        </main>
        <section class="alternate-content">
          <h2 class="title">
            Discover the AGreen Difference
          </h2>
          <hr />
          <div class="grid-content">
            <div class="grid-items">
              <p class="subtitle">
                <strong>Flexibility</strong>
              </p>
              <p class="description">
                <i class="fas fa-magic fa-3x"></i>
                <br />
                Confidence that your deliverables will prove their value.
              </p>
            </div>
            <div class="grid-items">
              <p class="subtitle">
                <strong>Trust</strong>
              </p>
              <p class="description">
                <i class="fas fa-handshake fa-3x"></i>
                <br />
                Per diem, per project or per program pricing available.
              </p>
            </div>
            <div class="grid-items">
              <p class="subtitle">
                <strong>Impact</strong>
              </p>
              <p class="description">
                <i class="fas fa-bolt fa-3x"></i>
                <br />
                Context is key. Benchmarks established, metrics recorded and
                then analyzed.
              </p>
            </div>
          </div>
        </section>

        <div class="tile is-ancestor">
          <div class="tile is-parent">
            <article class="tile is-child box">
              <figure class="image is-1by1 ">
                <opti-image
                  :src="require('~/assets/uploads/chip-308.jpg').src"
                  :srcset="require('~/assets/uploads/chip-308.jpg').srcSet"
                />
              </figure>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child box">
              <h2 class="title">
                Alan "Chip" Green
              </h2>
              <p>
                Chip Green is a Connecticut and Massachusetts native now living,
                working and entertaining full time in Hollywood, Florida. He was
                schooled in English, Drama and other humanities at the
                University of Virginia. With co-creation of two successful
                agencies, Chip has demonstrated how to combine ‘the gig economy’
                with agency accountability. A world traveler, Chip brought his
                talents to South Florida in 2016 with the intention of pursuing
                more creative personal endeavors, particularly amongst the
                vibrant Latin and West Indies cultures. With a penchant for
                ‘novelty’, Chip has a strong track record of building and
                managing teams to help deliver effective, entertaining events
                and assets.
              </p>
            </article>
          </div>
        </div>

        <div class="alternate-content">
          See video: El Amor de Mi Vida
        </div>
      </template>
    </main-section>
  </div>
</template>
<script>
// import QuoteCard from '~/components/cards/QuoteCard'
// import { mapState } from 'vuex'
// import { setPageData } from '../helper'
// import Markdown from '~/components/Markdown'
export default {
  name: 'About',
  head() {
    return {
      title: `About | ${this.$siteConfig.siteName}`
    }
  },
  components: {
    // NewsLetterFormModal,
    // Markdown
  },
  computed: {
    // ...mapState(['title', 'subtitle', 'featureImage'])
  }
  // fetch({ store, params }) {
  //   setPageData(store, { resource: 'page', slug: 'about' })
  // }
  // components: { QuoteCard }
}
</script>

<style scoped lang="scss">
.alternate-content {
  margin: 2rem 0;
  padding: 4rem;
  text-align: center;

  .grid-content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    @media (max-width: 770px) {
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

  .fas {
    color: $primary;
    padding-bottom: 2rem;
  }
}

.title {
  color: $primary;
}
</style>
