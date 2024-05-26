import antfu from '@antfu/eslint-config'

export default antfu(
  {
    formatters: true,
    typescript: true,
    vue: true,

    rules: {
      'style/comma-dangle': ['error', 'never']
    }
  }
)
