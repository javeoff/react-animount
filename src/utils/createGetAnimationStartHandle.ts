import { createGetAnimationHandle } from './createGetAnimationHandle';

export const createGetAnimationStartHandle = (
  animationId: string,
  cssFrom: string,
  cssTo: string,
) =>
  createGetAnimationHandle(animationId, cssFrom, cssTo, false)
