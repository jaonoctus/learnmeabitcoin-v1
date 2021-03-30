import theme from '@nuxt/content-theme-docs'

const isProduction = process.env.NODE_ENV !== 'development'

const regexMDImage = /!\[[^\]]*\]\((.*?)\s*("(?:.*[^"])")?\s*\)/g

const imagePath = isProduction ? '/learnmeabitcoin/images' : '/images'

const changeImagePath = (_match, fileName) => {
  return `![image](${imagePath}/${fileName.replace('/static/images/', '')})`
}

export default theme({
  docs: {
    primaryColor: '#F7941D',
  },
  ssr: false,
  target: 'static',
  modules: ['@nuxtjs/sitemap'],
  router: {
    base: '/learnmeabitcoin/',
  },
  sitemap: {
    hostname: 'https://jaonoctus.github.io',
    async routes() {
      const { $content } = require('@nuxt/content')
      const files = await $content({ deep: true })
        .where({ path: { $ne: '/settings' } })
        .only(['path'])
        .fetch()

      return files.map((file) => (file.path === '/index' ? '/' : file.path))
    },
  },
  hooks: {
    'content:file:beforeParse': (file) => {
      file.data = file.data.replaceAll(regexMDImage, changeImagePath)
    },
  },
})
