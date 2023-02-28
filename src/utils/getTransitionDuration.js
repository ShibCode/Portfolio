export default function getTransitionDuration(url) {
  const img = new Image();
  img.src = url;
  return `${img.height / 100}s`;
}
