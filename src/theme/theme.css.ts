import { createGlobalTheme, style } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root',  {
  color: {
    background: {
      default: '#232136',
      lighten: {
        1: '#2A283C',
      },
      darken: {
        1: '#151424'
      }
    },
    font: {
      default: 'white',
      darken: {
        1: '#c9e0e6',
        2: '#9E9DA6',
      }
    }
  },
});

export const globalStyle = style({
  background: vars.color.background.default,
  color: vars.color.font.default
})

