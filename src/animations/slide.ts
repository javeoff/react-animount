import { addAnimationStyle } from '../utils/addAnimationStyle';
import { createGetAnimationStartHandle } from '../utils/createGetAnimationStartHandle';
import { createGetAnimationEndHandle } from '../utils/createGetAnimationEndHandle';

const slideLeft = {
  from: `
    margin-right: -100%;
    opacity: 0;
  `,
  to: `
    margin-right: 0;
    opacity: 1 
  `
};

export const getSlideLeftStartHandle = createGetAnimationStartHandle(
  'slideLeft',
  slideLeft.from,
  slideLeft.to,
);

export const getSlideLeftEndHandle = createGetAnimationEndHandle(
  'slideLeft',
  slideLeft.from,
  slideLeft.to,
);

const slideRight = {
  from: `
    margin-left: -100%;
    opacity: 0;
  `,
  to: `
    margin-left: 0;
    opacity: 1 
  `
};

export const getSlideRightStartHandle = createGetAnimationStartHandle(
  'slideRight',
  slideRight.from,
  slideRight.to,
);

export const getSlideRightEndHandle = createGetAnimationEndHandle(
  'slideRight',
  slideRight.from,
  slideRight.to,
);

const slideUp = {
  from: `
    margin-bottom: -100%;
    opacity: 0;
  `,
  to: `
    margin-bottom: 0;
    opacity: 1 
  `
};

export const getSlideUpStartHandle = createGetAnimationStartHandle(
  'slideUp',
  slideUp.from,
  slideUp.to,
);

export const getSlideUpEndHandle = createGetAnimationEndHandle(
  'slideUp',
  slideRight.from,
  slideRight.to,
);

const slideDown = {
  from: `
    margin-top: -100%;
    opacity: 0;
  `,
  to: `
    margin-top: 0;
    opacity: 1 
  `
};

export const getSlideDownStartHandle = createGetAnimationStartHandle(
  'slideDown',
  slideDown.from,
  slideDown.to,
);

export const getSlideDownEndHandle = createGetAnimationEndHandle(
  'slideDown',
  slideDown.from,
  slideDown.to,
);
