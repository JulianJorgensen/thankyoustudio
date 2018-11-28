import styled from 'styled-components';
import { breakpoint } from 'utils/variables';

const Wrapper = styled.ul`
  display: flex;
`

const Locations = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  color: ${props => props.dark ? 'black' : 'white'};
`


const LocationItem = styled.li`
  text-align: left;
  margin-bottom: 50px;

  &:last-child {
    margin-bottom: 0;
  }
`

const LocationTitle = styled.h3`
  font-weight: bold;
`

const LocationAddress = styled.div`
  color: gray;
`

export default (props) => (
  <Wrapper {...props}>
    <Locations>
      <LocationItem>
        <LocationTitle>Copenhagen</LocationTitle>
        <LocationAddress>
          Enghavevej 40, 4<br />
          1674 Copenhagen V<br />
          Denmark
        </LocationAddress>
      </LocationItem>
      <LocationItem>
        <LocationTitle>San Francisco</LocationTitle>
        <LocationAddress>
          Enghavevej 40, 4<br />
          1674 Copenhagen V<br />
          Denmark
        </LocationAddress>
      </LocationItem>
      <LocationItem>
        <LocationTitle>Reykjavik</LocationTitle>
        <LocationAddress>
          Enghavevej 40, 4<br />
          1674 Copenhagen V<br />
          Denmark
        </LocationAddress>
      </LocationItem>
    </Locations>
  </Wrapper>
);
