import React, { Component } from 'react';
import styled from 'styled-components';
import media from 'utils/mediaQueries';
import Fetch from 'isomorphic-unfetch';
import { EASINGS, INSTAGRAM } from 'utils/variables';

const Posts = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  width: 100%;

  ${media.tablet`
    grid-template-columns: auto auto auto;
  `}

  ${media.desktop`
    grid-template-columns: auto auto auto auto;
  `}
`

const Post = styled.div`
  position: relative;
  height: 250px;
  overflow: hidden;
`

const PostImage = styled.div`
  width: 100%;
  height: 100%;
  background: url(${props => props.imageLowRes}) center center no-repeat;
  background-size: cover;
  transform: scale(1.02);
  transition: transform 0.5s ${EASINGS.EASE_OUT_SHINE};

  ${Post}:hover & {
    transform: scale(1.07);
  }
`

const PostContent = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 30px;
  background-color: white;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: opacity 0.5s ${EASINGS.EASE_OUT_SHINE};

  &:hover {
    opacity: 0.8;
  }
`

export default class InstagramFeed extends Component {
  constructor() {
    super();

    this.state = {};
  }

  async componentDidMount() {
    const res = await Fetch(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${INSTAGRAM.ACCESS_TOKEN}&count=${INSTAGRAM.NUMBER_OF_POSTS}`);
    const data = await res.json();
    console.log('data', data);

    this.setState({
      posts: data.data
    });
  }

  render() {
    const { posts } = this.state;

    if (!posts) {
      return (
        <div></div>
      )
    }

    return (
      <Posts>
        {posts.map((post) => (
          <Post key={post.id}>
            <PostImage imageLowRes={post.images.low_resolution.url} />
            <PostContent>{post.caption.text}</PostContent>
          </Post>
        ))}
      </Posts>
    )
  }
}