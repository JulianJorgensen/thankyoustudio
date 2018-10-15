import { initialState } from 'store';
import actionTypes from 'store/types';

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_ACTIVE_SLIDE:
      return {
        ...state,
        prevSlide: state.activeSlide,
        activeSlide: action.slide
      };
    case actionTypes.SET_NEXT_SLIDE_INDEX:
      return {
        ...state,
        nextSlideIndex: action.nextSlideIndex,
        autoScroll: action.autoScroll
      };
    case actionTypes.SET_IS_SCROLL_N_SLIDING:
      return {
        ...state,
        isScrollNSliding: action.isScrollNSliding
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
    default: return state
  }
}
