import { addAnimationStyle } from '../utils/addAnimationStyle';

const animationId = 'animount-opacity';
const animationCss = `
  @keyframes opacity {
      from {
          opacity: 0;
      }
      to {
          opacity: 1
      }
  }
`

export const getOpacityStartHandle =
  (duration: number) => {
    addAnimationStyle(animationId, animationCss)
    return (div: HTMLDivElement) => {
      div.style.animation = `opacity normal ${duration / 1_000}s`;
    };
  }

export const getOpacityEndHandle =
  (duration: number) => {
    addAnimationStyle(animationId, animationCss)
    return (div: HTMLDivElement) => {
      div.style.animation = `opacity reverse ${duration / 1_000}s`;
    };
  }
