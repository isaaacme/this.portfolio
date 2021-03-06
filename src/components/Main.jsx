import React from 'react';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';
import Styles from '../styles/Main.module.css';

function Main() {
  return (
    <div className={Styles.Main}>
      <h1 className={Styles.title}>Hi, I'm Isaac.
      <Typewriter
  options={{
    strings: ['Web stuff maker', 'Visual Communicator', 'Web developer' ,'Graphic designer', 'Art director'],
    autoStart: true,
    loop: true,
  }}
/>
      </h1>
      <p className={Styles.blurb}>
        or a Web developer & Designer resolving end to end business problems, if
        you're not into abbreviations.
      </p>
      <Link href="/about">
        <a className={Styles.cta}>Hire Me Now!</a>
      </Link>
      <img
        src="/profile-light-small.webp"
        alt="me looking all professional"
        className={Styles.me}
      />
    </div>
  );
}

export default Main;
