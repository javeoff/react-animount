import { Dispatch, FC, ReactNode, useRef } from 'react';
import { useMountEffect } from './hooks/useMountEffect';

interface IProps {
  children: ReactNode;
  duration?: number;
  onAnimationStart: Dispatch<HTMLDivElement>;
  onAnimationEnd: Dispatch<HTMLDivElement>;
}

export const Animation: FC<IProps> = ({
  duration = 200,
  onAnimationStart,
  onAnimationEnd,
  children,
}) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useMountEffect(() => {
    const _wrapper = wrapperRef.current;
    const _parent = wrapperRef.current?.parentElement;

    if (!_wrapper || !_parent) {
      return;
    }

    const div = document.createElement('div');

    _wrapper.style.display = 'none';
    div.style.position = 'absolute';
    div.innerHTML = _wrapper.innerHTML;

    _parent.append(div);

    return {
      onMount: () => {
        div.style.transition = `all ${duration / 1_000}s`;
        onAnimationStart(div);
      },
      onUnmount: () => {
        if (!_parent || !_wrapper) {
          return;
        }

        div.style.transition = `all ${duration / 1_000}s`;

        onAnimationEnd(div);

        setTimeout(() => {
          div.remove();
        }, duration);
      },
      onRemount: () => {
        div.remove();
      },
    };
  }, [children]);

  return <div ref={wrapperRef}>{children}</div>;
};
