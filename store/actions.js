import actionTypes from 'store/types';
import SlideItems from 'store/slideItems';

export const updateActiveSlide = (slug) => dispatch => {
  let slide = {};
  console.log('updating activeSlide', slug);
  if (slug) {
    slide = SlideItems.find(obj => obj.slug.toLowerCase() == slug.toLowerCase());

    if (slide) {
      slide.index = SlideItems.findIndex(obj => obj === slide);
    } else {
      // no slide found, it must be a standalone one
      slide = {
        slug,
        index: 0,
        contentColor: 'white'
      }
    }
  } else {
    slide = SlideItems[0];
    slide.index = 0;
  }

  return dispatch({
    type: actionTypes.UPDATE_ACTIVE_SLIDE,
    slide
  });
}

export const updatePrevSlide = (slide) => dispatch => {
  return dispatch({
    type: actionTypes.UPDATE_PREV_SLIDE,
    slide
  });
}

export const setUsePrevAsNextSlide = (usePrevAsNextSlide) => dispatch => {
  return dispatch({ 
    type: actionTypes.SET_USE_PREV_AS_NEXT_SLIDE,
    usePrevAsNextSlide
  })
}

export const hideActiveSlide = (activeSlideHidden) => dispatch => {
  return dispatch({ 
    type: actionTypes.HIDE_ACTIVE_SLIDE,
    activeSlideHidden: activeSlideHidden
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

export const setIsScrollNSliding = () => dispatch => {
  setTimeout(() => {
    return dispatch({ 
      type: actionTypes.SET_IS_SCROLL_N_SLIDING,
      isScrollNSliding: false
    });
  }, 700);

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
