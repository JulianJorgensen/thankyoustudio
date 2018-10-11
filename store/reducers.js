import { initialState } from 'store';
import actionTypes from 'store/types';

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ACTIVATE_MARQUEE_SLIDER:
      return {
        ...state,
        marquee: {
          ...state.marquee,
          active: true
        }
      };
    case actionTypes.DEACTIVATE_MARQUEE_SLIDER:
      return {
        ...state,
        marquee: {
          ...state.marquee,
          active: false
        }
      };
    case actionTypes.SWITCH_TO_LIGHT_CONTENT:
      return {
        ...state,
        lightContent: true
      };
    case actionTypes.SWITCH_TO_DARK_CONTENT:
      return {
        ...state,
        lightContent: false
      };
    case actionTypes.SWITCH_MARQUEE_TO_LIGHT_CONTENT:
      return {
        ...state,
        lightContent: true,
        marquee: {
          ...state.marquee,
          lightContent: true
        }
      };
    case actionTypes.SWITCH_MARQUEE_TO_DARK_CONTENT:
      return {
        ...state,
        lightContent: false,
        marquee: {
          ...state.marquee,
          lightContent: false
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
    default: return state
  }
}
