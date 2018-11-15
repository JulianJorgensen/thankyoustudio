import actionTypes from 'store/types';
import SlideItems from 'store/slideItems';

export const updateActiveSlide = (slug) => dispatch => {
  let slide = {};

  if (slug) {
    slide = SlideItems.find(obj => obj.slug.toLowerCase() == slug.toLowerCase());
    slide.index = SlideItems.findIndex(obj => obj === slide);
  } else {
    slide = SlideItems[0];
    slide.index = 0;
  }

  return dispatch({
    type: actionTypes.UPDATE_ACTIVE_SLIDE,
    slide
  });
}

export const condenseSlider = (condense) => dispatch => {
  return dispatch({
    type: actionTypes.CONDENSE_SLIDER,
    condense
  });
}

export const updatePrevSlide = (slide) => dispatch => {
  return dispatch({
    type: actionTypes.UPDATE_PREV_SLIDE,
    slide
  });
}

export const setNavColorWhite = (white) => dispatch => {
  return dispatch({ 
    type: actionTypes.SET_NAV_COLOR,
    color: white ? 'white' : 'black'
  })
}

export const setHeaderSolid = (solid) => dispatch => {
  return dispatch({ 
    type: actionTypes.SET_HEADER_SOLID,
    solid
  })
}

export const setAutoScroll = (autoScroll) => dispatch => {
  return dispatch({ 
    type: actionTypes.SET_AUTO_SCROLL,
    autoScroll
  })
}

export const setHasMouseLeftNextSlide = (hasMouseLeftNextSlide) => dispatch => {
  return dispatch({ 
    type: actionTypes.SET_HAS_MOUSE_LEFT_NEXT_SLIDE,
    hasMouseLeftNextSlide
  })
}

export const setIsScrollNSliding = () => dispatch => {
  setTimeout(() => {
    return dispatch({ 
      type: actionTypes.SET_IS_SCROLL_N_SLIDING,
      isScrollNSliding: false
    });
  }, 500);

  return dispatch({ 
    type: actionTypes.SET_IS_SCROLL_N_SLIDING,
    isScrollNSliding: true
  })
}

export const toggleMobileNav = () => dispatch => {
  return dispatch({ type: actionTypes.TOGGLE_MOBILE_NAV })
}

export const closeMobileNav = () => dispatch => {
  return dispatch({ type: actionTypes.CLOSE_MOBILE_NAV })
}

export const confirmFontsLoaded = () => dispatch => {
  return dispatch({ type: actionTypes.CONFIRM_FONTS_LOADED })
}

export const setIsSliding = (isSliding) => dispatch => {
  return dispatch({ type: actionTypes.SET_IS_SLIDING, isSliding })
}
