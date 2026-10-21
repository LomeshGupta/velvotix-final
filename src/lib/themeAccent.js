/**
 * Return accents that retain the established neon palette in dark mode while
 * meeting the stronger contrast needs of a white/light surface.
 */
const LIGHT_ACCENTS = {
  '#0099ff': '#086BC6',
  '#00c2ff': '#087DA8',
  '#00d9ff': '#087F8D',
  '#ff7a00': '#C65300',
  '#ff5500': '#B84200',
  '#00b894': '#007B65',
  '#8b7cff': '#6250B8',
  '#ff9f43': '#995000',
  '#0066ff': '#0759B5',
  '#22c55e': '#187A43',
};

export function themedAccent(color, theme) {
  if (theme !== 'light' || typeof color !== 'string') return color;
  return LIGHT_ACCENTS[color.toLowerCase()] || color;
}
