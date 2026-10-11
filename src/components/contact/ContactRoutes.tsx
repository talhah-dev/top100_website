import React from "react";
import Link from "next/link";

export function ContactRoutes() {
  return (
    <aside className="routes">
      <a className="route rv in" href="#write" style={{ "--d": ".08s" } as React.CSSProperties}>
        <span className="rchip">For Businesses</span>
        <h3>Feature your business.</h3>
        <p>Run an attraction, a place to stay or a place to eat? Tell us about it. Nothing is listed without a visit.</p>
        <span className="rlink">Use the form <i className="down">&#8595;</i></span>
      </a>
      <Link className="route rv in" href="#book" style={{ "--d": ".16s" } as React.CSSProperties}>
        <span className="rchip">The Book</span>
        <h3>Stock the guide.</h3>
        <p>For book stores and stockists, or to buy a copy online.</p>
        <span className="rlink">Buy the Book <i>&rarr;</i></span>
      </Link>
      <Link className="route rv in" href="#app" style={{ "--d": ".24s" } as React.CSSProperties}>
        <span className="rchip">The Apps</span>
        <h3>Help with the app.</h3>
        <p>Four free apps, one for each nation, on both stores.</p>
        <span className="rlink">Get the Free App <i>&rarr;</i></span>
      </Link>
    </aside>
  );
}
