import React from 'react';
import PropTypes from 'prop-types';
import  './Post.css'
//import {events} from './events';


class Post extends React.PureComponent {

  render (){
    return (
    <div className='post'>
          <img src='https://get.pxhere.com/photo/animal-pet-cat-mammal-fauna-close-up-cats-nose-whiskers-snout-eye-vertebrate-macro-photography-tabby-cat-european-shorthair-wild-cat-small-to-medium-sized-cats-cat-like-mammal-domestic-short-haired-cat-pixie-bob-rusty-spotted-cat-1106838.jpg'/>
     <span> {this.props.message}</span>
     <div><span>{this.props.likesCount} like</span></div>
     
    </div>);
}
}

export default Post;
