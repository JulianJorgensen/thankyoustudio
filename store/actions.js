import actionTypes from 'store/types';

export const activateMarqueeSlider = () => dispatch => {
  return dispatch({ type: actionTypes.ACTIVATE_MARQUEE_SLIDER })
}

export const deactivateMarqueeSlider = () => dispatch => {
  return dispatch({ type: actionTypes.DEACTIVATE_MARQUEE_SLIDER })
}

export const switchToLightContent = () => dispatch => {
  return dispatch({ type: actionTypes.SWITCH_TO_LIGHT_CONTENT })
}

export const switchToDarkContent = () => dispatch => {
  return dispatch({ type: actionTypes.SWITCH_TO_DARK_CONTENT })
}

export const switchMarqueeToLightContent = () => dispatch => {
  return dispatch({ type: actionTypes.SWITCH_MARQUEE_TO_LIGHT_CONTENT })
}

export const switchMarqueeToDarkContent = () => dispatch => {
  return dispatch({ type: actionTypes.SWITCH_MARQUEE_TO_DARK_CONTENT })
}

export const toggleMobileNav = () => dispatch => {
  return dispatch({ type: actionTypes.TOGGLE_MOBILE_NAV })
}

export const closeMobileNav = () => dispatch => {
  return dispatch({ type: actionTypes.CLOSE_MOBILE_NAV })
}
