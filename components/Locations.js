import styled from 'styled-components';

const Wrapper = styled.ul`
  display: flex;
  padding-top: 200px;
`

const Locations = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 800px;
  list-style-type: none;
  color: ${props => props.dark ? 'black' : 'white'};
`

const LocationEmail = styled.a`
  display: block;
  margin: 8px 0;
`

const LocationItem = styled.li`
  text-align: left;
`

const LocationTitle = styled.span`
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
