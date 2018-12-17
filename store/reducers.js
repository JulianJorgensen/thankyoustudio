import { initialState } from 'store';
import actionTypes from 'store/types';

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_ACTIVE_SLIDE:
      return {
        ...state,
        activeSlide: action.slide,
        navColor: action.slide.whiteContent ? 'white' : 'black'
      };
    case actionTypes.CONDENSE_SLIDER:
      return {
        ...state,
        condenseSlider: action.condense
      };
    case actionTypes.LANDING_VIDEO_PLAYING:
      return {
        ...state,
        isLandingVideoPlaying: action.isPlaying
      };
    case actionTypes.UPDATE_PREV_SLIDE:
      return {
        ...state,
        prevSlide: action.slide
      };
    case actionTypes.SET_AUTO_SCROLL:
      return {
        ...state,
        autoScroll: action.autoScroll
      };
    case actionTypes.SET_HAS_MOUSE_LEFT_NEXT_SLIDE:
      return {
        ...state,
        hasMouseLeftNextSlide: action.hasMouseLeftNextSlide
      };
    case actionTypes.SET_IS_SCROLL_N_SLIDING:
      return {
        ...state,
        slider: {
          isScrollNSliding: action.isScrollNSliding
        }
      };
    case actionTypes.TOGGLE_MOBILE_NAV:
      return {
        ...state,
        mobileNav: !state.mobileNav
      };
    case actionTypes.CLOSE_MOBILE_NAV:
      return {
        ...state,
        mobileNav: false
      };
    case actionTypes.SET_NAV_COLOR:
      return {
        ...state,
        navColor: action.color
      };
    case actionTypes.SET_HEADER_SOLID:
      return {
        ...state,
        headerSolid: action.solid
      };
    case actionTypes.CONFIRM_FONTS_LOADED:
      return {
        ...state,
        fontsLoaded: true
      };
    case actionTypes.SET_IS_SLIDING:
      return {
        ...state,
        isSliding: action.isSliding
      };
    case actionTypes.SET_IS_MOBILE:
      return {
        ...state,
        isMobile: action.isMobile
      };

    default: return state
  }
}
