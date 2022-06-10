<template>
  <div
    v-if="show"
    id="the-parent"
    :class="
      `site-layout-width-${$siteConfig.layout.width} posts-theme-${$siteConfig.posts.theme}`
    "
  >
    <site-nav />
    <nuxt />
    <news-letter-slide-out v-if="$siteConfig.newsletter.on" />
    <site-footer></site-footer>
  </div>
</template>

<script>
import 'animate.css/animate.min.css'
export default {
  transition: 'slide-fade',
  head() {
    return {
      title: `${this.$store.state.title} | ${this.$siteConfig.siteName}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$store.state.subtitle
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.$store.state.subtitle
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.$store.state.title
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.$store.state.featureImage
            ? (process.env.URL ? process.env.URL : '') +
              require(`~/assets${this.$store.state.featureImage}`)
            : ''
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: this.url
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: `summary_large_image`
        },
        {
          hid: 'og:site_name',
          name: 'og:site_name',
          content: this.$siteConfig.siteName
        }
      ]
    }
  },
  data() {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' }
        },
        {
          title: 'Inspire',
          icon: 'lightbulb',
          to: { name: 'inspire' }
        }
      ],
      show: false,
      showing: ''
    }
  },
  watch: {
    $route(to, from) {
      this.$eventBus.$emit('route-changed', this.$route)
    }
  },
  mounted() {
    this.$cms.lifeCycleHooks.mounted()
    this.show = true
    this.$nextTick().then(() => {
      setTimeout(() => {
        document.getElementById('the-parent').classList.add('is-showing')
      }, 100)
    })
  },
  beforeCreate() {
    this.$cms.lifeCycleHooks.beforeCreate()
  },
  created() {
    this.$cms.lifeCycleHooks.created()
  },
  beforeMount() {
    this.$cms.lifeCycleHooks.beforeMount()
  },
  beforeUpdate() {
    this.$cms.lifeCycleHooks.beforeUpdate()
  },
  updated() {
    this.$cms.lifeCycleHooks.updated()
  },
  beforeDestroy() {
    this.$cms.lifeCycleHooks.beforeDestroy()
  },
  destroy() {
    this.$cms.lifeCycleHooks.destroy()
  }
}
</script>

<style lang="scss">
body {
  overflow: hidden;

  .section {
    padding: 4rem;

    @media (max-width: 500px) {
      padding: 2rem;
    }
  }
}

#the-parent {
  opacity: 0;
  transition: opacity .5s ease-in-out;
}

.is-showing {
  opacity: 1!important;
}

.content {
  /* text-align: center; */

  /* h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: $primary !important;
  } */
  .title {
    color: $primary;
  }

  h2.title {
    font-size: 2.6rem;
  }

  h2.subtitle {
    strong {
      font-size: 2.1rem!important;
    }
  }

  p {
    margin-bottom: 0;
  }

  .title.quote {
    font-size: 2rem;
  }
}

</style>
