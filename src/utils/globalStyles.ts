import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  /* CSS Reset from: https://piccalil.li/blog/a-modern-css-reset/ */
  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  ul[role='list'],
  ol[role='list'] {
    list-style: none;
  }

  /* Set core root defaults */
  html:focus-within {
    scroll-behavior: smooth;
  }

  /* Set core body defaults */
  body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img,
  picture {
    max-width: 100%;
    display: block;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
    scroll-behavior: auto;
    }
    
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  /* GLOBAL STYLES */
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    line-height: 2; // TODO: find a way to better center font?
    font-family: 'Space Grotesk', monospace;
    font-size: 12px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: auto;
    
  }

  .material-icons-outlined {
  font-family: 'Material Icons Outlined' !important;
  }

  .material-icons {
    font-family: 'Material Icons' !important;
  }

  #root {
    /*
      Create a stacking context, without a z-index.
      This ensures that all portal content (modals and tooltips) will
      float above the app.
    */
    isolation: isolate;
  }

  html, body, #root {
    height: 100%;

    /* GLOBAL CSS VARIABLES */

    /* COLORS */
    --md-red-50: #fce8e6;
    --md-red-100: #fad2cf;
    --md-red-200: #f6aea9;
    --md-red-300: #f28b82;
    --md-red-400: #ee675c;
    --md-red-500: #ea4335;
    --md-red-600: #d93025;
    --md-red-700: #c5221f;
    --md-red-800: #b31412;
    --md-red-900: #a50e0e;

    --md-pink-50: #fde7f3;
    --md-pink-100: #fdcfe8;
    --md-pink-200: #fba9d6;
    --md-pink-300: #ff8bcb;
    --md-pink-400: #ff63b8;
    --md-pink-500: #f538a0;
    --md-pink-600: #e52592;
    --md-pink-700: #c92786;
    --md-pink-800: #b80672;
    --md-pink-900: #9c166b;

    --md-orange-50: #feefe3;
    --md-orange-100: #fedfc8;
    --md-orange-200: #fdc69c;
    --md-orange-300: #fcad70;
    --md-orange-400: #fa903e;
    --md-orange-500: #fa7b17;
    --md-orange-600: #e8710a;
    --md-orange-700: #d56e0c;
    --md-orange-800: #c26401;
    --md-orange-900: #b06000;

    --md-yellow-50: #fef7e0;
    --md-yellow-100: #feefc3;
    --md-yellow-200: #fde293;
    --md-yellow-300: #fdd663;
    --md-yellow-400: #fcc934;
    --md-yellow-500: #fbbc04;
    --md-yellow-600: #f9ab00;
    --md-yellow-700: #f29900;
    --md-yellow-800: #ea8600;
    --md-yellow-900: #e37400;

    --md-green-50: #e6f4ea;
    --md-green-100: #ceead6;
    --md-green-200: #a8dab5;
    --md-green-300: #81c995;
    --md-green-400: #5bb974;
    --md-green-500: #34a853;
    --md-green-600: #1e8e3e;
    --md-green-700: #188038;
    --md-green-800: #137333;
    --md-green-900: #0d652d;

    --md-blue-50: #e8f0fe;
    --md-blue-100: #d2e3fc;
    --md-blue-200: #aecbfa;
    --md-blue-300: #8ab4f8;
    --md-blue-400: #669df6;
    --md-blue-500: #4285f4;
    --md-blue-600: #1a73e8;
    --md-blue-700: #1967d2;
    --md-blue-800: #185abc;
    --md-blue-900: #174ea6;

    --md-cyan-50: #e4f7fb;
    --md-cyan-100: #cbf0f8;
    --md-cyan-200: #a1e4f2;
    --md-cyan-300: #78d9ec;
    --md-cyan-400: #4ecde6;
    --md-cyan-500: #24c1e0;
    --md-cyan-600: #12b5cb;
    --md-cyan-700: #129eaf;
    --md-cyan-800: #098591;
    --md-cyan-900: #007b83;

    --md-purple-50: #f3e8fd;
    --md-purple-100: #e9d2fd;
    --md-purple-200: #d7aefb;
    --md-purple-300: #c58af9;
    --md-purple-400: #af5cf7;
    --md-purple-500: #a142f4;
    --md-purple-600: #9334e6;
    --md-purple-700: #8430ce;
    --md-purple-800: #7627bb;
    --md-purple-900: #681da8;

    --md-grey-50: #f8f9fa;
    --md-grey-100: #f1f3f4;
    --md-grey-200: #e8eaed;
    --md-grey-300: #dadce0;
    --md-grey-400: #bdc1c6;
    --md-grey-500: #9aa0a6;
    --md-grey-600: #80868b;
    --md-grey-700: #5f6368;
    --md-grey-800: #3c4043;
    --md-grey-900: #202124;

    --md-white: #fff;
    --md-black: #000;
  }
`
