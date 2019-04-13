const brand1 = '#264EA3'
// const brand1Darken = '#7F0FD7'
const brandLightest = '#FBF7FE'
const hover = '#008fcc'
const white = '#FFFFFF'
const lightGray = '#f4f5f5'
const gray = '#D9DCDE'
const grey = '#ACB1B6'
const darkGrey = '#59636E'
const darkerGrey = '#031323'
const black = '#000000'

const red = '#de521d'
const yellow = '#f5dd07'
const green = '#2bbf6a'

export default {
  colors: {
    text: {
      light: grey,
      medium: darkGrey,
      normal: darkerGrey,
      dark: black
    },
    buttons: {
      default: white,
      defaultHover: gray,
      disabled: grey,
      primary: brand1,
      primaryHover: hover
    },
    background: {
      lightest: white,
      light: lightGray,
      medium: grey,
      dark: darkerGrey,
      hoverLight: brandLightest
    },
    status: {
      success: green,
      warning: yellow,
      error: red
    },
    brand1,
    borderColor: gray,
    darkest: black,
    lightest: white,
    darkGrey: darkGrey
  },
  fonts: {}
}
