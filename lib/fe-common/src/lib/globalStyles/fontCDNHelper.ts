import { environment, EnvMap } from '@castify/studio/env/browser';
import { css } from '@emotion/react';

const CDNLinks: Record<EnvMap, string> = {
  'local-development': 'https://cdn.cfy-dev.com',
  'cfy-stage': 'https://cdn.cfy-stage.com',
  'cfy-prod': 'https://cdn.castify.com',
  'cfy-qa': 'https://cdn.cfy-stage.com',
  'cfy-pen': 'https://cdn.cfy-pen.com',
  'cfy-dev': 'https://cdn.cfy-dev.com',
};

/**
 * Gets the correct CDN font from its matching environment.
 * This is done to both stop cors errors and allow development testing on the dev CDN.
 */
export function getGlobalFontStyles() {
  // This should never have to fall back, but the dev CDN has the most lenient access
  const cdnBase =
    CDNLinks[environment.environmentName] ?? CDNLinks['local-development'];

  return css`
    /* Regular */
    @font-face {
      font-family: 'Fellix';
      src: url('${cdnBase}/fonts/otf/Fellix-Regular.otf') format('opentype'),
        url('${cdnBase}/fonts/web/Fellix-Regular.woff2') format('woff2'),
        url('${cdnBase}/fonts/web/Fellix-Regular.woff') format('woff'),
        url('${cdnBase}/fonts/ttf/Fellix-Regular.ttf') format('truetype');
    }

    /* Bold */
    @font-face {
      font-family: 'Fellix';
      src: url('${cdnBase}/fonts/otf/Fellix-Bold.otf') format('opentype'),
        url('${cdnBase}/fonts/web/Fellix-Bold.woff2') format('woff2'),
        url('${cdnBase}/fonts/web/Fellix-Bold.woff') format('woff'),
        url('${cdnBase}/fonts/ttf/Fellix-Bold.ttf') format('truetype');
      font-weight: 700;
      font-style: normal;
    }

    /* Bold (fallback for unavailable 900 weight fonts) */
    @font-face {
      font-family: 'Fellix';
      src: url('${cdnBase}/fonts/otf/Fellix-Bold.otf') format('opentype'),
        url('${cdnBase}/fonts/web/Fellix-Bold.woff2') format('woff2'),
        url('${cdnBase}/fonts/web/Fellix-Bold.woff') format('woff'),
        url('${cdnBase}/fonts/ttf/Fellix-Bold.ttf') format('truetype');
      font-weight: 900;
      font-style: normal;
    }

    /* Medium */
    @font-face {
      font-family: 'Fellix';
      src: url('${cdnBase}/fonts/otf/Fellix-Medium.otf') format('opentype'),
        url('${cdnBase}/fonts/web/Fellix-Medium.woff2') format('woff2'),
        url('${cdnBase}/fonts/web/Fellix-Medium.woff') format('woff'),
        url('${cdnBase}/fonts/ttf/Fellix-Medium.ttf') format('truetype');
      font-weight: 500;
      font-style: normal;
    }

    /* SemiBold */
    @font-face {
      font-family: 'Fellix';
      src: url('${cdnBase}/fonts/otf/Fellix-SemiBold.otf') format('opentype'),
        url('${cdnBase}/fonts/web/Fellix-SemiBold.woff2') format('woff2'),
        url('${cdnBase}/fonts/web/Fellix-SemiBold.woff') format('woff'),
        url('${cdnBase}/fonts/ttf/Fellix-SemiBold.ttf') format('truetype');
      font-weight: 600;
      font-style: normal;
    }

    /* Italic fonts */

    /* RegularItalic */
    @font-face {
      font-family: 'Fellix';
      src: url('${cdnBase}/fonts/otf/Fellix-RegularItalic.otf')
          format('opentype'),
        url('${cdnBase}/fonts/web/Fellix-RegularItalic.woff2') format('woff2'),
        url('${cdnBase}/fonts/web/Fellix-RegularItalic.woff') format('woff'),
        url('${cdnBase}/fonts/ttf/Fellix-RegularItalic.ttf') format('truetype');
      font-style: italic;
    }

    /* BoldItalic */
    @font-face {
      font-family: 'Fellix';
      src: url('${cdnBase}/fonts/otf/Fellix-BoldItalic.otf') format('opentype'),
        url('${cdnBase}/fonts/web/Fellix-BoldItalic.woff2') format('woff2'),
        url('${cdnBase}/fonts/web/Fellix-BoldItalic.woff') format('woff'),
        url('${cdnBase}/fonts/ttf/Fellix-BoldItalic.ttf') format('truetype');
      font-weight: 700;
      font-style: italic;
    }

    /* BoldItalic (fallback for unavailable 900 weight fonts) */
    @font-face {
      font-family: 'Fellix';
      src: url('${cdnBase}/fonts/otf/Fellix-BoldItalic.otf') format('opentype'),
        url('${cdnBase}/fonts/web/Fellix-BoldItalic.woff2') format('woff2'),
        url('${cdnBase}/fonts/web/Fellix-BoldItalic.woff') format('woff'),
        url('${cdnBase}/fonts/ttf/Fellix-BoldItalic.ttf') format('truetype');
      font-weight: 900;
      font-style: italic;
    }

    /* MediumItalic */
    @font-face {
      font-family: 'Fellix';
      src: url('${cdnBase}/fonts/otf/Fellix-MediumItalic.otf')
          format('opentype'),
        url('${cdnBase}/fonts/web/Fellix-MediumItalic.woff2') format('woff2'),
        url('${cdnBase}/fonts/web/Fellix-MediumItalic.woff') format('woff'),
        url('${cdnBase}/fonts/ttf/Fellix-MediumItalic.ttf') format('truetype');
      font-weight: 500;
      font-style: italic;
    }

    /* SemiBoldItalic */
    @font-face {
      font-family: 'Fellix';
      src: url('${cdnBase}/fonts/otf/Fellix-SemiBoldItalic.otf')
          format('opentype'),
        url('${cdnBase}/fonts/web/Fellix-SemiBoldItalic.woff2') format('woff2'),
        url('${cdnBase}/fonts/web/Fellix-SemiBoldItalic.woff') format('woff'),
        url('${cdnBase}/fonts/ttf/Fellix-SemiBoldItalic.ttf') format('truetype');
      font-weight: 600;
      font-style: italic;
    }
  `;
}
