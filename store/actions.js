import actionTypes from 'store/types';
import slideItems from 'store/slideItems';

export const updateActiveSlide = (slug) => dispatch => {
  let slide = slideItems.find(obj => obj.slug.toLowerCase() == slug.toLowerCase());
  slide.index = slideItems.findIndex(obj => obj === slide);

  return dispatch({ 
    type: actionTypes.UPDATE_ACTIVE_SLIDE,
    slide: slide
  })
}

export const setNextSlideIndex = (nextSlideIndex) => dispatch => {
  return dispatch({ 
    type: actionTypes.SET_NEXT_SLIDE_INDEX,
    nextSlideIndex: nextSlideIndex,
    autoScroll: nextSlideIndex ? false : true
  })
}

export const setIsScrollNSliding = (isScrollNSliding) => dispatch => {
  return dispatch({ 
    type: actionTypes.SET_IS_SCROLL_N_SLIDING,
    isScrollNSliding
  })
}

export const toggleMobileNav = () => dispatch => {
  return dispatch({ type: actionTypes.TOGGLE_MOBILE_NAV })
}

export const closeMobileNav = () => dispatch => {
  return dispatch({ type: actionTypes.CLOSE_MOBILE_NAV })
}
