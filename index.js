'use strict'

const black = '#282828'
const gray = '#928374'
const grayLight = '#a89984'
const white = '#ebdbb2'
const red = '#cc241d'
const redLight = 'fb4934'
const green = '#98971a'
const greenLight = '#b8bb26'
const yellow = '#d79921'
const yellowLight = '#fabd2f'
const blue = '#458588'
const blueLight = '#83a598'
const purple = '#b16286'
const purpleLight = '#d3869b'
const aqua = '#689d6a'
const aquaLight = '#8ec07c'
const orange = '#d65d0e'
const orangeLight = '#fe8019'

const colors = {
  black,
  red,
  green,
  yellow,
  blue,
  magenta: purple,
  cyan: aqua,
  white,
  lightBlack: gray,
  lightRed: redLight,
  lightGreen: greenLight,
  lightYellow: yellowLight,
  lightBlue: blueLight,
  lightMagenta: purpleLight,
  lightCyan: aquaLight,
  lightWhite: white
}

module.exports.decorateConfig = config => {
  const backgroundColor = black
  const foregroundColor = white
  const cursorColor = config.cursorColor || orangeLight
  const borderColor = '#1d2021'
  const selectionColor = 'rgba(130, 130, 130, 0.3)'
  const tabNavBg = '#1d2021'
  const tabText = grayLight
  const tabTextActive = white
  const dividerBg = 'rgba(64,64,64,.4)'
  
  return Object.assign({}, config, {
    foregroundColor,
    backgroundColor,
    borderColor,
    cursorColor,
    selectionColor,
    colors,
    termCSS: `
      ${config.termCSS || ''}
      .terminal a {
        color: ${aqua};
      }
    `,
    css: `
      ${config.css || ''}
      .tabs_nav {
        background-color: ${tabNavBg};
        border-bottom: 1px solid ${borderColor};
      }
      /* hide the tab border shim, we are providing our own */
      .tabs_borderShim {
        border-bottom-width: 0px;
      }
      /* Hide title when only one tab */
      .tabs_title {
  			display: none !important;
  		}
      .tab_textInner {
        color: ${tabText};
        font-weight: 500;
      }
      .tab_tab.tab_active {
        background-color: ${backgroundColor};
      }
      .tab_tab.tab_active .tab_textInner {
        color: ${tabTextActive};
      }
      .splitpane_divider {
        background-color: ${dividerBg} !important;
      }
    `
  })
}
