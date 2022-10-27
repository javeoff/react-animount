# React AniMount

React Component, triggers css animation on mount and unmount component.

- Library ignores remounting the component.
- Library observing unmounting the component and clones own animated element
- When animation is ended, react component replacing itself

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
