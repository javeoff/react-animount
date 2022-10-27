# React AniMount

React Component, triggers css animation on mount and unmount component.

- Library ignores remounting the component.
- Library observing unmounting the component and clones own animated element
- When animation is ended, react component replacing itself

## Available animations

- `getOpacityStartHandle` - opacity animation on start
- `getOpacityEndHandle` - opacity animation on end
- `getSlideDownStartHandle` - slideDown animation on start
- `getSlideDownEndHandle` - slideDown animation on end
- `getSlideRightStartHandle` - slideRight animation on start
- `getSlideRightEndHandle` - slideRight animation on end
- `getSlideUpStartHandle` - slideUp animation on start
- `getSlideUpEndHandle` - slideUp animation on end
- `getSlideDownStartHandle` - slideDown animation on start
- `getSlideDownEndHandle` - slideDown animation on end

## Usage

```tsx
import { Animation, getSlideDownStartHandle, getSlideDownEndHandle } from 'react-animount';

const ANIMATION_DURATION = 200;

export const App = () => (
  <Animation
    duration={ANIMATION_DURATION}
    onAnimationStart={getSlideDownStartHandle(ANIMATION_DURATION)}
    onAnimationEnd={getSlideDownEndHandle(ANIMATION_DURATION)}
  >
    <div>Animated Section On Mount & Unmount</div>
  </Animation>
);
```

Also check typedoc, referenced in Animation.tsx

## Contribute

Open to contribute
