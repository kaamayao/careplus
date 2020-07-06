import React from 'react';
import './post-list.scss';

export default class PostList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="post">
        <div className="post__list-posts">
          <div className="post__post">
            <p className="post__post-date">2001/04/19</p>
            <h2 className="post__post-title">Título del Post</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua labore
              et dolore magna aliqua.
            </p>
            <p>
             Duis aute irure dolor in reprehenderit in voluptate velit esse
             cillum dolore eu fugiat nulla. Lorem ipsum dolor sit amet,
             consectetur adipiscing elit, sed do eiusmod tempor incididunt
             ut labore et dolore magna aliqua labore et dolore magna aliqua.
            </p>
            <p>
             Duis aute irure dolor in reprehenderit in voluptate velit esse
             cillum dolore eu fugiat nulla.
            </p>
            <p>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
             eiusmod tempor incididunt ut labore et dolore magna aliqua labore
             et dolore magna aliqua.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla.
            </p>
          </div>
        </div>
        <div className="post__follow-us">
          <div>
            Síguenos
          </div>
          <div className="post__follow-us-social">
            <div className="post__follow-us-social-item">
              <a className="post__follow-us-social-link">

                @careplus
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
