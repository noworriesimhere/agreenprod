<template>
  <div id="category-page" class="page-wrapper category-page">
    <site-hero
      :title="$store.state.name"
      :subtitle="$store.state.subtitle"
      :image="$store.state.image"
    />
    <main-section theme="sidebar-right">
      <template v-slot:default>
        <!-- Posts in Category -->
        <posts-grid :category="[$store.state.name]" :per-row="2" />
      </template>
      <template v-slot:sidebar>
        <h3 class="subtitle">
          All Categories
        </h3>
        <div class="panel">
          <nuxt-link
            v-for="cat in allCats"
            :key="cat.slug"
            :to="`/categories/${cat.slug}`"
            :class="{
              'panel-block': true,
              'is-active': cat.slug === $route.params.single
            }"
          >
            {{ cat.name }}
          </nuxt-link>
        </div>
      </template>
    </main-section>
  </div>
</template>
<script>
import { setPageData } from '../../helper'
export default {
  name: 'Category',
  head() {
    setTimeout(() => {
      return {
        title: `${this.$store.state.name} | ${this.$siteConfig.siteName}`
      }
    }, 350)
  },
  data() {
    return {
      allCats: []
    }
  },
  fetch({ store, params }) {
    // my janky fix
    setTimeout(() => {
      setPageData(store, { resource: 'category', slug: params.single })
    }, 350)
  },
  async created() {
    this.allCats = await this.$cms.category.getAll()
  }
}
</script>
