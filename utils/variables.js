import styledBreakpoint from '@humblebee/styled-components-breakpoint';

export const BREAKPOINTS = {
  xxs: 0,
  xs: 375,
  s: 576,
  m: 768,
  l: 992,
  xl: 1200,
  xxl: 1400,
}

export const breakpoint = styledBreakpoint(BREAKPOINTS);

export const TRACKING = {
  GOOGLE_ANALYTICS: 'UA-98361509-1',
  HOTJAR_ID: 1125017
}

export const FONTS = {
  PRIMARY: 'Helvetica Neue'
}

export const LAYOUT = {
  CONTAINER_WIDTH: '1100px',
  EDGE_MARGIN: '40px',
  HERO_HEIGHT: '100vh',
  HEADER_DISAPPEAR: 300,
  MOBILE: {
    EDGE_MARGIN: '10px',
    HEADER_DISAPPEAR: 0,
    HERO_HEIGHT: '70vh'
  }
}

export const HERO = {
  LOWER_LEFT_MAX_TOP_POSITION: 1000,
  MOBILE: {
    LOWER_LEFT_MAX_TOP_POSITION: 760,
  }
}

export const EASINGS = {
  EASE_IN_OUT_QUAD: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
  EASE_OUT_SHINE: 'cubic-bezier(.39,.575,.565,1)',
  EASE_IN_OUT_CUSTOM: 'cubic-bezier(.45,.035,.045,.95)',
  EASE_OUT_QUART: 'cubic-bezier(0.165, 0.84, 0.44, 1)'
}

export const META = {
  TITLE: 'THANK YOU crafts digital products, brands and experiences',
  CASE_TITLE: 'We craft world class digital products, brands and experiences',
  DESCRIPTION: 'A full-service studio located in Copenhagen, San Francisco and Reykjavík. Our work is always authentic at heart, meaningful in spirit and crafted for impact. 🙏',
  CANONICAL: 'https://www.thankyoustudio.com'
}

export const TIMINGS = {
  CASE_WRAPPER: '0.5s',
  DEFAULT_PAGE_WRAPPER: '0.5s',  
  SLIDE_ITEM_WRAPPER: '0.5s',
  SLIDER: '0.8s',
  SET_IS_SCROLL_N_SLIDING_FALSE: 800,
  CHANGE_CASE_CONTENT: 800,
  SET_IS_SLIDING_FALSE: 800,
  PAGE_TRANSITION_TIMEOUT: 600,
  SCROLL_TO_TOP: 550, // the number has to be less than the slider animation to prevent a flickering
  SCROLL_DURATION: 600,
  MOBILE: {
    CASE_WRAPPER: '0.2s',
    DEFAULT_PAGE_WRAPPER: '0.2s',  
    SLIDE_ITEM_WRAPPER: '0.2s',
    SLIDER: '0.8s',
    SET_IS_SCROLL_N_SLIDING_FALSE: 600,
    CHANGE_CASE_CONTENT: 600,
    SET_IS_SLIDING_FALSE: 600,
    PAGE_TRANSITION_TIMEOUT: 100,
    SCROLL_TO_TOP: 450, // the number has to be less than the slider animation to prevent a flickering
    SCROLL_DURATION: 500,
  }
}

// slow motion timings
// export const TIMINGS = {
//   CASE_WRAPPER: '50s',
//   DEFAULT_PAGE_WRAPPER: '50s',
//   SLIDE_ITEM_WRAPPER: '50s',
//   SLIDER: '50s',
//   SET_IS_SCROLL_N_SLIDING_FALSE: 50000,
//   SET_IS_SLIDING_FALSE: 50000,
//   PAGE_TRANSITION_TIMEOUT: 50000,
//   SCROLL_TO_TOP: 48000, // the number has to be less than the slider animation to prevent a flickering
//   SCROLL_DURATION: 50000,
// }

export const INSTAGRAM = {
  ACCESS_TOKEN: '54020099.f5cbc94.7b9691e1a2614731b18da6c190dfe604',
  NUMBER_OF_POSTS: 8
}

export const isProd = process.env.NODE_ENV === 'production';