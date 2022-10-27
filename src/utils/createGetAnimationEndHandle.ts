import { createGetAnimationHandle } from './createGetAnimationHandle';

export const createGetAnimationEndHandle = (
  animationId: string,
  cssFrom: string,
  cssTo: string,
) =>
  createGetAnimationHandle(animationId, cssFrom, cssTo, true)
