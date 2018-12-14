import React, { Component } from 'react';
import DefaultPage from 'layout/components/DefaultPage';
import styled from 'styled-components';
import Grid from 'components/Grid';

const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

export default class PrivacyPage extends Component {
  render() {
    return (
      <DefaultPage>
        <Grid>
          <Col>
            <h1>Privacy</h1>
          </Col>
        </Grid>
        <Grid cols="2">
          <Col>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fermentum tellus vel lacinia vulputate. Nam commodo turpis lacus, a sagittis sem dictum sit amet. Nulla facilisi. Proin ut lectus in purus tristique faucibus. Sed ac tellus quam. Proin dignissim aliquet magna at ullamcorper. Suspendisse venenatis dui non ullamcorper feugiat. Sed maximus viverra lacus vel luctus. Nulla dictum in elit quis iaculis. Morbi pretium mollis tortor, id auctor mi faucibus eget. Pellentesque eget nisi et odio posuere pharetra a eu lorem. Sed varius mi ut maximus aliquam. Nullam ullamcorper urna eget nibh placerat molestie. Quisque molestie turpis nec arcu eleifend aliquam. Maecenas placerat ut metus et dictum.</p>
            <p>Nam posuere tellus mi, sed tincidunt dolor volutpat sed. Aliquam nec tortor magna. Integer pretium augue sit amet semper scelerisque. Vestibulum vestibulum tortor sed consectetur efficitur. Sed auctor maximus magna sit amet dictum. Nullam rutrum lobortis elementum. Duis in nulla at lacus bibendum vestibulum id in lacus. Aliquam vel vestibulum magna, in tempus urna.</p>
            <p>Donec sed consequat orci. Aenean a fermentum elit, vel blandit metus. Nulla ullamcorper leo eu tortor egestas lacinia. Morbi quis diam massa. Nam rutrum risus at luctus suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ultrices lectus sed risus varius, quis consequat neque scelerisque. Maecenas facilisis ut nisi in cursus. Nullam posuere leo elit, a elementum eros sodales eget.</p>
          </Col>
          <Col>
            <p>Nunc elit massa, mollis eu cursus id, sagittis non nisi. Quisque congue gravida orci et pretium. Quisque laoreet tincidunt nunc quis faucibus. Sed rhoncus felis at ex fermentum, quis auctor magna cursus. Maecenas faucibus, diam ac tristique lobortis, ipsum tortor rutrum orci, quis congue ligula felis id lacus. Vestibulum nunc massa, maximus sit amet imperdiet et, molestie et quam. Nunc purus nunc, commodo vel purus sit amet, porta faucibus lorem. Duis sit amet vulputate dui. Proin velit magna, egestas ultricies dui at, porttitor cursus turpis.</p>
            <p>Pellentesque maximus accumsan tempus. Sed ligula diam, tincidunt non suscipit id, aliquam id mauris. Quisque pretium turpis nulla, sit amet fermentum ex porta non. Nam dictum mattis velit. Vestibulum faucibus erat vel volutpat egestas. Integer quis enim vel sapien sollicitudin tincidunt. In ullamcorper mollis lectus, nec faucibus nulla dapibus sed. Ut dapibus justo ac justo semper cursus. Integer eu felis ultrices augue porttitor accumsan. Mauris non diam augue. Curabitur euismod eros non tortor egestas vehicula. Integer ipsum dolor, maximus vitae ligula sed, sollicitudin malesuada turpis. Nunc interdum, lectus eget imperdiet rutrum, massa est aliquam massa, non dictum mi diam quis dui. Curabitur in orci et nunc vulputate cursus vel a tellus.</p>
          </Col>
        </Grid>
      </DefaultPage>
    )
  }
}