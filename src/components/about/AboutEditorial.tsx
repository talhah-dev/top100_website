import React from "react";

export function AboutEditorial() {
  return (
    <section className="section" style={{ paddingTop: 0, paddingBottom: 0 }}>
      <div className="wrap">
        <div className="entry">
          <div className="media rv in">
            <div className="frame">
              <div className="ph">
                <img
                  src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=70"
                  alt="Misty stone castle gatehouse"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div>
            <span className="chip rv in">
              <b>The Idea</b>
            </span>
            <h3 className="rv in" style={{ "--d": ".08s" } as React.CSSProperties}>
              Recommendations, not directories.
            </h3>
            <blockquote className="rv in" style={{ "--d": ".16s" } as React.CSSProperties}>
              Most guides list everything and stand behind nothing. This one takes the opposite bet: a short list, chosen slowly, and a name on the cover that has to answer for every entry.
              <span className="who">STEVENSON&rsquo;S TOP 100</span>
            </blockquote>
          </div>
        </div>

        <div className="entry flip">
          <div className="media rv in">
            <div className="frame">
              <div className="ph">
                <img
                  src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=800&q=70"
                  alt="Autumn forest with low sunbeams"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div>
            <span className="chip rv in">
              <b>The Standard</b>
            </span>
            <h3 className="rv in" style={{ "--d": ".08s" } as React.CSSProperties}>
              Visited. Reviewed. Kept honest.
            </h3>
            <blockquote className="rv in" style={{ "--d": ".16s" } as React.CSSProperties}>
              Every place in the guide has been visited by the people who write about it. The review says what a day there is actually like, and the rating means the same thing in Cardiff as it does in Inverness.
              <span className="who">THE REVIEW DESK</span>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
