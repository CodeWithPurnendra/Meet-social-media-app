import "./Stories.css";

function Stories({ stories }) {
  return (
    <main className="feeds-container">
      <section className="stories">
        <div className="story">
          <ul>
            {stories.map((storie, index) => {
              return (
                <li key={storie.id} className={index === 0 ? "your-story" : ""}>
                  <div className="story-image-wrapper">
                    <img src={storie.image} alt={storie.title} />
                    {index === 0 && <span className="add-story">+</span>}
                  </div>
                  <h2>{storie.realName}</h2>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </main>
  );
}
export default Stories;
