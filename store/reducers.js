import { initialState } from 'store';
import actionTypes from 'store/types';

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_ACTIVE_SLIDE:
      return {
        ...state,
        activeSlide: action.slide
      };
    case actionTypes.UPDATE_PREV_SLIDE:
      return {
        ...state,
        prevSlide: action.slide
      };
    case actionTypes.HIDE_ACTIVE_SLIDE:
      return {
        ...state,
        activeSlideHidden: action.activeSlideHidden
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
    case actionTypes.SET_USE_PREV_AS_NEXT_SLIDE:
      return {
        ...state,
        usePrevAsNextSlide: action.usePrevAsNextSlide
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

    default: return state
  }
}
