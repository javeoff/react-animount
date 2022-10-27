import { Dispatch, FC, ReactNode, useEffect, useRef } from 'react';

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
  const isFirstMount = useRef<boolean>(true);

  useEffect(() => {
    const _wrapper = wrapperRef.current;
    const _parent = wrapperRef.current?.parentElement;

    if (!_wrapper || !_parent) {
      return;
    }

    const div = document.createElement('div');

    _parent.append(div);
    _parent.addEventListener(
      'DOMNodeRemoved',
      () => {
        if (!_parent || !_wrapper) {
          return;
        }

        div.style.animation = '';
        div.style.display = 'block';

        onAnimationEnd(div);

        setTimeout(() => {
          div.remove();
        }, duration);
      },
      true,
    );

    if (isFirstMount.current) {
      isFirstMount.current = false;
      _wrapper.style.display = 'none';
      div.innerHTML = _wrapper.innerHTML;

      onAnimationStart(div);

      setTimeout(() => {
        _wrapper.style.display = 'block';
        div.style.display = 'none';
      }, duration);
    }
  }, [children]);

  return <div ref={wrapperRef}>{children}</div>;
};
