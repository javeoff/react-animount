import { addAnimationStyle } from './addAnimationStyle';

export const createGetAnimationHandle = (
  animationId: string,
  cssFrom: string,
  cssTo: string,
  isReverse?: boolean,
) => {
  return (duration: number) => {
    addAnimationStyle(
      animationId,
      `
          @keyframes ${animationId} {
            from {
              ${cssFrom}
            }
            to {
              ${cssTo}
            }
          }
        `
    )
    return (div: HTMLDivElement) => {
      div.style.animation = `${animationId} ${isReverse ? 'reverse' : 'normal'} ${duration / 1_000}s`;
    };
  }
}
