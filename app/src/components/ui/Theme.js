/* eslint-disable import/no-extraneous-dependencies */
import { createTheme } from '@material-ui/core/styles';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';

const breakpoints = createBreakpoints({});

// ACF color palette guide
const acfBlue = '#264a64';
const acfDeepBlue = '#172c3c';
const acfDeepTeal = '#407972';
const deepMagenta = '#481226';
const deepMedGray = '#323a45';
const deepMedMagenta = '#711c3b';
const deepNeutral = '#8f847a';
const deepTeal = '#2d544f';
const figmaBlack = '#000000'; // 508 compliance color contrast
const figmaBlue = '#0378d5'; //  508 compliance color contrast
const figmaGray = '#DADADA'; //   508 compliance color contrast
const figmaGreen = '#258829'; //  508 compliance color contrast
const figmaOrange = '#bf5900'; //  508 compliance color contrast
const figmaRed = '#db3131'; //  508 compliance color contrast
const graphite = '#21272d';
const liteCoolGray = '#dde2e8';
const liteMedBlue = '#779cb5';
const liteMedGray = '#80858c';
const liteNeutral = '#eae5df';
const liteOrange = '#ecbf88';
const litePaleBlue = '#e2eff7';
const liteTeal = '#a6d8d2';
const liteYellow = '#fcf1bf';
const magenta = '#a12854';
const medBlue = '#336a90';
const medGray = '#475260';
const neutral = '#bfb0a3';
const orange = '#e29f4d';
const paleBlue = '#bcd9ed';
const teal = '#63bab0';
const white = '#fafafa';
const yellow = '#f9e585';
const alertLinkBlue = '#4860B7';

export default createTheme({
  overrides: {
    MuiFormLabel: {
      asterisk: {
        color: `${figmaRed}`,
        '&$error': {
          color: `${figmaRed}`
        }
      }
    },
    MuiTab: {
      root: {
        borderBottomWidth: '4px',
        borderBottomStyle: 'solid',
        borderBottomColor: 'transparent',
        '&:hover': {
          borderBottomColor: `${figmaBlue}`,
          zIndex: '1'
        },
        '&.Mui-focusVisible': {
          borderBottomWidth: '4px',
          borderBottomStyle: 'solid',
          borderBottomColor: `${figmaBlue}`,
          zIndex: '1'
        }
      },
      textColorInherit: {
        opacity: 1
      }
    },
    MuiTabs: {
      indicator: {
        backgroundColor: `${orange}`,
        height: '4px'
      }
    },
    MuiDialog: {
      paper: {
        borderRadius: 10
      }
    },
    MuiButton: {
      root: {
        whiteSpace: 'nowrap',
        '&.Mui-focusVisible': {
          border: `4px solid ${figmaBlue} !important`,
          boxShadow: 'inset 1px 1px white, inset -1px -1px white !important'
        },
        '&.MuiButton-contained': {
          border: '4px solid transparent',
          transition: 'none !important',
          padding: '2px 12px'
        },
        '&.MuiButton-containedSizeSmall': {
          padding: '0px 6px'
        },
        '&.MuiButton-containedSizeLarge': {
          padding: '4px 18px'
        },
        '&.MuiButton-outlined': {
          transition: 'none !important'
        },
        '&.MuiButton-outlinedSizeSmall.Mui-focusVisible': {
          padding: '0px 3px !important',
          border: `4px solid ${figmaBlue} !important`,
          boxShadow: 'inset 1px 1px white, inset -1px -1px white !important'
        },
        '&.MuiButton-outlined.Mui-focusVisible': {
          padding: '2px 12px',
          border: `4px solid ${figmaBlue} !important`,
          boxShadow: 'inset 1px 1px white, inset -1px -1px white !important'
        },
        '&.MuiButton-outlinedSizeLarge.Mui-focusVisible': {
          padding: '4px 18px !important',
          border: `4px solid ${figmaBlue} !important`,
          boxShadow: 'inset 1px 1px white, inset -1px -1px white !important'
        },
        '&.MuiButton-text': {
          transition: 'none !important'
        },
        '&.MuiButton-textSizeSmall.Mui-focusVisible': {
          padding: '0px 1px !important',
          border: `4px solid ${figmaBlue} !important`,
          boxShadow: 'inset 1px 1px white, inset -1px -1px white !important'
        },
        '&.MuiButton-text.Mui-focusVisible': {
          padding: '2px 4px',
          border: `4px solid ${figmaBlue} !important`,
          boxShadow: 'inset 1px 1px white, inset -1px -1px white !important'
        },
        '&.MuiButton-textSizeLarge.Mui-focusVisible': {
          padding: '4px 7px',
          border: `4px solid ${figmaBlue} !important`,
          boxShadow: 'inset 1px 1px white, inset -1px -1px white !important'
        }
      }
    },
    MuiIconButton: {
      root: {
        border: '4px solid transparent',
        '&:focus': {
          border: `4px solid ${figmaBlue}`
        }
      }
    },
    MuiRadio: {
      root: {
        margin: '3px',
        padding: '3px',
        fontSize: '1.125rem',
        '&.Mui-focusVisible': {
          border: `4px solid ${figmaBlue}`
        }
      }
    },
    MuiCheckbox: {
      root: {
        padding: '3px',
        fontSize: '1.125rem',
        '&.Mui-focusVisible': {
          border: `4px solid ${figmaBlue}`
        }
      }
    },
    MuiAlert: {
      standardInfo: {
        color: figmaBlack,
        '&.MuiAlert-standardInfo a': {
          color: alertLinkBlue // 508 compliance for color requirement for <a> on info boxes with background blue
        }
      }
    },
    MuiTablePagination: {
      root: {
        '& .Mui-focused': {
          border: `4px solid ${figmaBlue}`
        }
      },
      input: {
        border: '4px solid transparent',
        display: 'none',
        [breakpoints.up('sm')]: {
          display: 'block !important'
        }
      },
      caption: {
        border: '4px solid transparent',
        display: 'none',
        [breakpoints.up('sm')]: {
          display: 'block !important'
        }
      }
    }
  },
  palette: {
    common: {
      black: `${figmaBlack}`,
      acfBlue: `${acfBlue}`,
      acfDeepBlue: `${acfDeepBlue}`,
      acfDeepTeal: `${acfDeepTeal}`,
      alertLinkBlue: `${alertLinkBlue}`,
      deepMagenta: `${deepMagenta}`,
      deepMedGray: `${deepMedGray}`,
      deepMedMagenta: `${deepMedMagenta}`,
      deepNeutral: `${deepNeutral}`,
      deepTeal: `${deepTeal}`,
      figmaBlack: `${figmaBlack}`,
      figmaBlue: `${figmaBlue}`,
      figmaGray: `${figmaGray}`,
      figmaGreen: `${figmaGreen}`,
      figmaOrange: `${figmaOrange}`,
      figmaRed: `${figmaRed}`,
      graphite: `${graphite}`,
      liteCoolGray: `${liteCoolGray}`,
      liteMedBlue: `${liteMedBlue}`,
      liteMedGray: `${liteMedGray}`,
      liteNeutral: `${liteNeutral}`,
      liteOrange: `${liteOrange}`,
      litePaleBlue: `${litePaleBlue}`,
      liteTeal: `${liteTeal}`,
      liteYellow: `${liteYellow}`,
      magenta: `${magenta}`,
      medBlue: `${medBlue}`,
      medGray: `${medGray}`,
      neutral: `${neutral}`,
      orange: `${orange}`,
      paleBlue: `${paleBlue}`,
      teal: `${teal}`,
      white: `${white}`,
      yellow: `${yellow}`
    },
    primary: {
      main: `${medGray}`
    },
    secondary: {
      main: `${teal}`
    },
    error: {
      main: `${figmaRed}`
    },
    warning: {
      main: `${figmaOrange}`
    },
    info: {
      main: `${figmaBlue}`
    },
    success: {
      main: `${figmaGreen}`
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
      disabled: '#9E9E9E',
      hint: '#757575',
      white: `${white}`
    },
    gray: {
      medGray: `${medGray}`,
      liteCoolGray: `${liteCoolGray}`,
      deepMedGray: `${deepMedGray}`,
      liteMedGray: `${liteMedGray}`,
      graphite: `${graphite}`
    }
  },
  typography: {
    fontFamily: '"Source Sans Pro", sans-serif',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    tab: {
      fontFamily: 'Merriweather',
      textTransform: 'none',
      fontWeight: 700,
      fontSize: '1rem'
    },
    h1: {
      fontFamily: '"Source Sans Pro", sans-serif',
      fontSize: '2.25rem',
      fontWeight: 600,
      lineHeight: 1.167
    },
    h2: {
      fontFamily: '"Merriweather", serif',
      fontSize: '1.25rem',
      fontWeight: 400,
      lineHeight: 1.2
    },
    h3: {
      fontFamily: '"Source Sans Pro", sans-serif',
      fontSize: '1.3rem',
      fontWeight: 600,
      lineHeight: 1.167
    },
    h4: {
      fontFamily: '"Source Sans Pro", sans-serif',
      fontSize: '1.15rem',
      fontWeight: 600,
      lineHeight: 1.235
    },
    h5: {
      fontFamily: '"Source Sans Pro", sans-serif',
      fontSize: '1rem',
      fontWeight: 600,
      lineHeight: 1.334
    },
    h6: {
      fontFamily: '"Source Sans Pro", sans-serif',
      fontSize: '0.9375rem',
      fontWeight: 600,
      lineHeight: 1.6
    },
    subtitle1: {
      fontFamily: '"Source Sans Pro", sans-serif',
      fontSize: '1rem',
      fontWeight: 600,
      lineHeight: 1.75
    },
    subtitle2: {
      fontFamily: '"Source Sans Pro", sans-serif',
      fontSize: '0.875rem',
      fontWeight: 600,
      lineHeight: 1.57
    },
    body1: {
      fontFamily: '"Source Sans Pro", sans-serif'
    },
    body2: {
      fontFamily: '"Source Sans Pro", sans-serif',
      fontWeight: 400
    },
    button: {
      textTransform: 'capitalize',
      fontFamily: '"Source Sans Pro", sans-serif',
      fontSize: 16
    },
    caption: {},
    overline: {}
  },
  props: {
    MuiButton: {
      disableFocusRipple: true
    },
    MuiTab: {
      disableFocusRipple: true
    },
    MuiIconButton: {
      disableRipple: true,
      size: 'small'
    },
    MuiBadge: {
      overlap: 'rectangular'
    }
  }

});
