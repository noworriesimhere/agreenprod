/* eslint-disable vue/html-indent */
<template>
  <div id="contact-page" class="page-wrapper contact-page content-page">
    <site-hero
      title="Contact Us"
      subtitle="There's no conversation without contact"
      video="/uploads/contact-video.webm"
    ></site-hero>
    <main-section>
      <template v-slot:default>
        <div class="tile is-ancestor">
          <div class="tile is-parent is-8">
            <article class="tile is-child box">
              <!-- <contact-form /> -->
              <p class="title">
                Please hit us up!
              </p>
              <p class="subtitle">
                Every conversation begins with a single word
              </p>
              <address>
                AGreen Production
                <br />
                1812 Fillmore Street
                <br />
                Hollywood, FL 33139
              </address>
              <p><a href="tel:+18604606765">860-460-6765</a></p>
              <p>
                <a href="mailto:info@AGreenProd.com">info@AGreenProd.com</a>
              </p>
            </article>
          </div>
        </div>
      </template>
    </main-section>
  </div>
</template>
<script>
// import ContactForm from '~/components/ContactForm'
export default {
  name: 'Contact',
  head() {
    return {
      title: `Contact | ${this.$siteConfig.siteName}`
    }
  }
  // components: { ContactForm }
}
</script>

<style scoped lang="scss">
.is-parent {
  margin: 0 auto;
  text-align: center;
}
</style>
