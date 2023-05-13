/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      // https://drafts.csswg.org/css-color/#css-system-colors
      canvas:            'canvas',
      canvastext:        'canvastext',
      linktext:          'linktext',
      visitedtext:       'visitedtext',
      activetext:        'activetext',
      buttonface:        'buttonface',
      buttontext:        'buttontext',
      buttonborder:      'buttonborder',
      field:             'field',
      fieldtext:         'fieldtext',
      highlight:         'highlight',
      highlighttext:     'highlighttext',
      selecteditem:      'selecteditem',
      selecteditemtext:  'selecteditemtext',
      mark:              'mark',
      marktext:          'marktext',
      graytext:          'graytext',
      accentcolor:       'accentcolor',
      accentcolortext:   'accentcolortext',
    },
  },
  plugins: [],
}
