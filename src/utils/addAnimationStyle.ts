export const addAnimationStyle = (id: string, css: string) => {
  if (document.getElementById(id)) {
    return;
  }

  const style = document.createElement('style');
  style.innerHTML = css;
  style.id = id;

  document.head.append(style);
}
