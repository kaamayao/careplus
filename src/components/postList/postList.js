import React from 'react';
import './postList.scss';
import Insta from '../../images/blog/insta.png';
import Twitter from '../../images/blog/twitter.png';
import Facebook from '../../images/blog/facebook.png';
import BlogPost1 from '../../images/blog/post1/post1.png';

export default class PostList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="post">
        <div className="post__list-posts">
          <div className="post__wrap">
            <p className="post__date">2001/04/19</p>
            <h2 className="post__title">Título del Post</h2>
            <img src={BlogPost1} className="post__img"/>
            <p className="post__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua labore
              et dolore magna aliqua.
            </p>
            <p className="post__description">
             Duis aute irure dolor in reprehenderit in voluptate velit esse
             cillum dolore eu fugiat nulla. Lorem ipsum dolor sit amet,
             consectetur adipiscing elit, sed do eiusmod tempor incididunt
             ut labore et dolore magna aliqua labore et dolore magna aliqua.
            </p>
            <p className="post__description">
             Duis aute irure dolor in reprehenderit in voluptate velit esse
             cillum dolore eu fugiat nulla.
            </p>
            <p className="post__description">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
             eiusmod tempor incididunt ut labore et dolore magna aliqua labore
             et dolore magna aliqua.
            </p>
            <p className="post__description">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla.
            </p>
          </div>
        </div>
        <div className="post__follow-us">
          <p className="post__follow-us-title">
            Síguenos
          </p>
          <div className="post__follow-us-social">
            <div className="post__follow-us-social-item">
              <a className="post__follow-us-social-link">
                <img className="post__follow-us-social-img" src={Insta}/>
                <span className="post__follow-us-social-description">
                  @careplus</span>
              </a>
              <a className="post__follow-us-social-link">
                <img className="post__follow-us-social-img" src={Twitter}/>
                <span className="post__follow-us-social-description">
                  @careplus</span>
              </a>
              <a className="post__follow-us-social-link">
                <img className="post__follow-us-social-img" src={Facebook}/>
                <span className="post__follow-us-social-description">
                  careplus
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
