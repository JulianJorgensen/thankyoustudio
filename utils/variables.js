export const fonts = {
  primary: 'Helvetica Neue'
}

export const colors = {
  primary: "#1F1598",
  error: "#A40000",
  link: "#0070c9",
  curiousBlue: "#2D85D2",
  catalinaBlue: "#0A2E6E",
  bleuDeFrance: "#3696E0",
  cobalt: "#084AAC",
  gray50: "#787878",
  gray24: "#3E3E3E"
}

export const layout = {
  containerWidth: '1100px'
}

export const easings = {
  easeInOutQuad: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
  easeOutSine: 'cubic-bezier(.39,.575,.565,1)',
  easeInOutCustom: 'cubic-bezier(.45,.035,.045,.95)',
  easeOutQuart: 'cubic-bezier(0.165, 0.84, 0.44, 1)'
}

export const standAlonePages = [
  'about',
  'work',
  'contact',
  'privacy'
];

export const meta = {
  title: 'THANK YOU designs digital experiences and connect brands',
  description: 'Design thinking is at the core of everything we do. The result is always fresh, vibrant and relevant.'
}

export const timings = {
  caseWrapper: '0.5s',
  defaultPageWrapper: '0.5s',  
  slideItemWrapper: '0.5s',
  slider: '0.5s',
  setIsScrollNSlidingFalse: 500,
  pageTransitionTimeout: 500,
  setIsSlidingFalse: 500,
  scrollToTop: 480, // the number has to be less than the slider animation to prevent a flickering
  setAutoScrollTimeout: 6000,
  scrollDuration: 500,
  fullScreenVideoDuration: 3800
}

// slow motion timings
// export const timings = {
//   caseWrapper: '50s',
//   defaultPageWrapper: '50s',  
//   slideItemWrapper: '50s',
//   slider: '50s',
//   setIsScrollNSlidingFalse: 50000,
//   pageTransitionTimeout: 50000,
//   setIsSlidingFalse: 50000,
//   scrollToTop: 48000, // the number has to be less than the slider animation to prevent a flickering
//   setAutoScrollTimeout: 6000,
//   scrollDuration: 50000,
//   fullScreenVideoDuration: 3800
// }