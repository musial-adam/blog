import Typography from 'typography'

// import kirkhamTheme from 'typography-theme-kirkham'

// const typography = new Typography(kirkhamTheme)

import lincolnTheme from 'typography-theme-lincoln'

// console.log(lincolnTheme.headerFontFamily)

lincolnTheme.headerFontFamily = [
  'monospace',
  'Droid Sans Mono',
  'PT Mono',
  'Varela Round',
  'sans-serif',
]

const typography = new Typography(lincolnTheme)

export default typography
