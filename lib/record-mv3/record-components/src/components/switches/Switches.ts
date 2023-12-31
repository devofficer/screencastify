interface SwitchImages {
  checkedSwitchBefore: string;
  checkedSwitchAfter: string;
  checkedSwitchHoverAfter: string;
  switchHoverBefore: string;
  switchHoverAfter: string;
  switchBefore: string;
  switchAfter: string;
}

const AudioSwitchImages: SwitchImages = {
  checkedSwitchBefore: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path fill="${encodeURIComponent(
    '#a6a6a6',
  )}" d="M19 11h-1.7c0 .74-.16 1.43-.43 2.05l1.23 1.23c.56-.98.9-2.09.9-3.28zm-4.02.17c0-.06.02-.11.02-.17V5c0-1.66-1.34-3-3-3S9 3.34 9 5v.18l5.98 5.99zM4.27 3 3 4.27l6.01 6.01V11c0 1.66 1.33 3 2.99 3 .22 0 .44-.03.65-.08l1.66 1.66c-.71.33-1.5.52-2.31.52-2.76 0-5.3-2.1-5.3-5.1H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c.91-.13 1.77-.45 2.54-.9L19.73 21 21 19.73 4.27 3z" /></svg>`,
  checkedSwitchAfter: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path fill="${encodeURIComponent(
    '#fff',
  )}" d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z" /></svg>`,
  checkedSwitchHoverAfter: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path fill="${encodeURIComponent(
    '#fff',
  )}" d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z" /></svg>`,
  switchHoverBefore: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path fill="${encodeURIComponent(
    '#616161',
  )}" d="M19 11h-1.7c0 .74-.16 1.43-.43 2.05l1.23 1.23c.56-.98.9-2.09.9-3.28zm-4.02.17c0-.06.02-.11.02-.17V5c0-1.66-1.34-3-3-3S9 3.34 9 5v.18l5.98 5.99zM4.27 3 3 4.27l6.01 6.01V11c0 1.66 1.33 3 2.99 3 .22 0 .44-.03.65-.08l1.66 1.66c-.71.33-1.5.52-2.31.52-2.76 0-5.3-2.1-5.3-5.1H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c.91-.13 1.77-.45 2.54-.9L19.73 21 21 19.73 4.27 3z" /></svg>`,
  switchHoverAfter: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path fill="${encodeURIComponent(
    '#616161',
  )}" d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z" /></svg>`,
  switchBefore: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path fill="${encodeURIComponent(
    '#616161',
  )}" d="M19 11h-1.7c0 .74-.16 1.43-.43 2.05l1.23 1.23c.56-.98.9-2.09.9-3.28zm-4.02.17c0-.06.02-.11.02-.17V5c0-1.66-1.34-3-3-3S9 3.34 9 5v.18l5.98 5.99zM4.27 3 3 4.27l6.01 6.01V11c0 1.66 1.33 3 2.99 3 .22 0 .44-.03.65-.08l1.66 1.66c-.71.33-1.5.52-2.31.52-2.76 0-5.3-2.1-5.3-5.1H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c.91-.13 1.77-.45 2.54-.9L19.73 21 21 19.73 4.27 3z" /></svg>`,
  switchAfter: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path fill="${encodeURIComponent(
    '#bbb',
  )}" d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z" /></svg>`,
};

const VideoSwitchImages: SwitchImages = {
  checkedSwitchBefore: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path fill="${encodeURIComponent(
    '#a6a6a6',
  )}" d="m21 6.5-4 4V7c0-.55-.45-1-1-1H9.82L21 17.18V6.5zM3.27 2 2 3.27 4.73 6H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.21 0 .39-.08.54-.18L19.73 21 21 19.73 3.27 2z" /></svg>`,
  checkedSwitchAfter: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path fill="${encodeURIComponent(
    '#fff',
  )}" d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/></svg>`,
  checkedSwitchHoverAfter: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path fill="${encodeURIComponent(
    '#fff',
  )}" d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/></svg>`,
  switchHoverBefore: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path fill="${encodeURIComponent(
    '#616161',
  )}" d="m21 6.5-4 4V7c0-.55-.45-1-1-1H9.82L21 17.18V6.5zM3.27 2 2 3.27 4.73 6H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.21 0 .39-.08.54-.18L19.73 21 21 19.73 3.27 2z" /></svg>`,
  switchHoverAfter: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path fill="${encodeURIComponent(
    '#616161',
  )}" d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/></svg>`,
  switchBefore: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path fill="${encodeURIComponent(
    '#616161',
  )}" d="m21 6.5-4 4V7c0-.55-.45-1-1-1H9.82L21 17.18V6.5zM3.27 2 2 3.27 4.73 6H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.21 0 .39-.08.54-.18L19.73 21 21 19.73 3.27 2z" /></svg>`,
  switchAfter: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path fill="${encodeURIComponent(
    '#bbb',
  )}" d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/></svg>`,
};

export const switchTypes = {
  audio: AudioSwitchImages,
  video: VideoSwitchImages,
};
