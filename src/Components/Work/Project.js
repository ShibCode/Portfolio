// transitionDuration = height / 100

export default function Project({ img, link, transitionDuration }) {
  return (
    <a href={link} className="work-project-container" target="_blank">
      <div className="overlay"></div>
      <img
        src={img}
        className="work-project"
        style={{
          transitionDuration,
        }}
      />
    </a>
  );
}
