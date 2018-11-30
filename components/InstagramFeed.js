import React, { Component } from 'react';
import styled from 'styled-components';
import media from 'utils/mediaQueries';
import Fetch from 'isomorphic-unfetch';
import dynamic from 'next/dynamic';
import { aspectRatio } from 'utils/styleUtils';
import { EASINGS, INSTAGRAM } from 'utils/variables';

const Observer = dynamic(import('react-intersection-observer'), {
  ssr: false
});

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  margin-top: 220px;
  min-height: 600px;

  ${media.tablet`
    min-height: 500px;
  `}
`

const Posts = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  width: 100%;
  transition: opacity 0.6s;
  opacity: ${props => props.active ? '1' : '0'};

  ${media.tablet`
    grid-template-columns: auto auto auto;
  `}

  ${media.desktop`
    grid-template-columns: auto auto auto auto;
  `}
`

const Post = styled.div`
  position: relative;
  overflow: hidden;
  ${aspectRatio('1x1')}
`

const PostImage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: url(${props => props.imageLowRes}) center center no-repeat;
  background-size: cover;
  transform: scale(1);
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
    this.handleIsInView = this.handleIsInView.bind(this);
    this.loadInstagramFeed = this.loadInstagramFeed.bind(this);
  }

  handleIsInView(inView) {
    if (inView) {
      console.log('handle is in view');
      this.loadInstagramFeed();  
    }
  }

  async loadInstagramFeed() {
    const res = await Fetch(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${INSTAGRAM.ACCESS_TOKEN}&count=${INSTAGRAM.NUMBER_OF_POSTS}`);
    const data = await res.json();

    this.setState({
      posts: data.data
    });
  }

  render() {
    const { posts } = this.state;

    const renderPosts = () => {
      if (!posts) return;
      return (
        posts.map((post) => (
          <Post key={post.id} active>
            <PostImage imageLowRes={post.images.low_resolution.url} />
            <PostContent>{post.caption.text}</PostContent>
          </Post>
        ))
      )
    }

    return (
      <Observer onChange={this.handleIsInView} threshold={0} triggerOnce={true}>
        <Wrapper>
          <Posts active={posts}>
            {renderPosts()}
          </Posts>
        </Wrapper>
      </Observer> 
    )
  }
}