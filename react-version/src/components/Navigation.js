import React from 'react'; // use this if version of React is older than v17. optional for this project since my react version is newer

function Navigation(){
  return (
    <nav>
      <span className="nav--text">tweeter</span>

      <div className="btn btn--scroll">
        <a href="#" className="btn__text btn--borderless" title="Compose Tweet">
          <span className="btn--bold">Write</span> a new tweet
          <br />
          <i className="btn__icon fas fa-angle-double-down"></i>
        </a>
      </div>
  </nav>
  );
}

export default Navigation;