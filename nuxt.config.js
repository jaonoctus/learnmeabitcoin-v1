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
  router: {
    base: '/learnmeabitcoin/',
  },
  hooks: {
    'content:file:beforeParse': (file) => {
      file.data = file.data.replaceAll(regexMDImage, changeImagePath)
    },
  },
})
