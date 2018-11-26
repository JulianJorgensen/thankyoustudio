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

  ${breakpoint.up('m')`
    flex-direction: row;
    justify-content: space-between;
    width: 800px;
  `}
`

const LocationEmail = styled.a`
  display: block;
  margin: 8px 0;
`

const LocationItem = styled.li`
  text-align: left;
  margin-bottom: 50px;

  &:last-child {
    margin-bottom: 0;
  }

  ${breakpoint.up('m')`
    margin-bottom: 0;
  `}
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
        <LocationEmail mailto="info@thankyoustudio.com">info@thankyoustudio.com</LocationEmail>
        <LocationAddress>
          Enghavevej 40, 4<br />
          1674 Copenhagen V<br />
          Denmark<br />
          <div>+45 5214 0000</div>
        </LocationAddress>
      </LocationItem>
      <LocationItem>
        <LocationTitle>San Francisco</LocationTitle>
        <LocationEmail mailto="info@thankyoustudio.com">info@thankyoustudio.com</LocationEmail>
        <LocationAddress>
          Enghavevej 40, 4<br />
          1674 Copenhagen V<br />
          Denmark<br />
          <div>+45 5214 0000</div>
        </LocationAddress>
      </LocationItem>
      <LocationItem>
        <LocationTitle>Reykjavik</LocationTitle>
        <LocationEmail mailto="info@thankyoustudio.com">info@thankyoustudio.com</LocationEmail>
        <LocationAddress>
          Enghavevej 40, 4<br />
          1674 Copenhagen V<br />
          Denmark<br />
          <div>+45 5214 0000</div>
        </LocationAddress>
      </LocationItem>
    </Locations>
  </Wrapper>
);
