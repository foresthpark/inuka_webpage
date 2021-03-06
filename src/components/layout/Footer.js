import React from 'react';

const Footer = () => (
  <footer className="container mx-auto py-16 px-3 mt-48 mb-8 text-gray-800">
    <div className="flex -mx-3">
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Contact Us</h2>
        <p className="mt-5">
          <a href="mailto:admin@inukahealth.com">admin@inukahealth.com</a>
        </p>
      </div>
      {/*<div className="flex-1 px-3">*/}
      {/*  <h2 className="text-lg font-semibold">Important Links</h2>*/}
      {/*  <ul className="mt-4 leading-loose">*/}
      {/*    <li>*/}
      {/*      <a href="https://codebushi.com">Terms &amp; Conditions</a>*/}
      {/*    </li>*/}
      {/*    <li>*/}
      {/*      <a href="https://codebushi.com">Privacy Policy</a>*/}
      {/*    </li>*/}
      {/*  </ul>*/}
      {/*</div>*/}
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Social Media</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="https://www.linkedin.com/in/inukainc/">LinkedIn</a>
          </li>
          <li>
            <a href="https://twitter.com/inuka_inc">Instagram</a>
          </li>
          {/*<li>*/}
          {/*  <a href="https://github.com/codebushi/gatsby-starter-lander">GitHub</a>*/}
          {/*</li>*/}
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
