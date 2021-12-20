import generatePostApi from '../build/generate-post-api'
import generateCategoryApi from '../build/generate-category-api'
// import generatePageApi from '../build/generate-page-api'
import copyStaticToDist from '../build/copy-static-to-dist'

export default () => {
  generatePostApi()
  generateCategoryApi()
  // generatePageApi()
  copyStaticToDist()
}
