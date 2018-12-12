import styled from 'styled-components';
import { breakpoint } from 'utils/variables';

const Wrapper = styled.ul`
  display: flex;
`

const Locations = styled.ul`
  list-style-type: none;

  ${breakpoint.up('m')`
    display: flex;
    justify-content: space-between;
    width: 600px;
  `}
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
  font-size: 24px;
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
          870 Market St.<br />
          San Francisco, CA 94102<br />
          USA
        </LocationAddress>
      </LocationItem>
      <LocationItem>
        <LocationTitle>Reykjavik</LocationTitle>
        <LocationAddress>
          Laugavegur 178<br />
          105 Reykjavìk<br />
          Iceland
        </LocationAddress>
      </LocationItem>
    </Locations>
  </Wrapper>
);
