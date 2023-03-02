import React from 'react';
import './blog.css';
import {Article} from '../../components'
import { blog01, blog02, blog03, blog04, blog05} from './imports';

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className ="gpt3__blog-heading">
        <h1 className="gradient__text">My Most Played Games: Recent News</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article imgUrl={blog01} date="Feb 24, 2023" title="DIRECTOR'S TAKE: BALANCING HEROES AND MATCHMAKING" url="https://overwatch.blizzard.com/en-gb/news/23917966/"/>
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article imgUrl={blog02} date="Feb 25, 2023" title="COMMUNITY CRUNCH 350: TSOTF ON CONSOLES, COMMUNITY CORNER, AND MORE!" url="https://survivetheark.com/index.php?/articles.html/community-crunch-350-tsotf-on-consoles-community-corner-and-more-r2060/"/>
          <Article imgUrl={blog03} date="Feb 21, 2023" title="THE SKULL MERCHANT | DEAD BY DAYLIGHT KILLER LORE" url="https://deadbydaylight.com/news/the-skull-merchant-lore/"/>
          <Article imgUrl={blog04} date="Feb 28, 2023" title="The expansion of Elden Ring, Shadow Of The Erdtree has been announced!" url="https://en.bandainamcoent.eu/elden-ring/news/the-expansion-of-elden-ring-shadow-of-the-erdtree-has-been-announced"/>
          <Article imgUrl={blog05} date="Mar, 2023" title="Collected Miscellany - 'Dehya: Passion of the Burning Sands' | Genshin Impact" url="https://genshin.hoyoverse.com/en/news/detail/105452"/>
        </div>
      </div>
    </div>
  )
}

export default Blog