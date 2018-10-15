import styled from 'styled-components';

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 70%;
  list-style-type: none;
  color: white;
`

const LocationItem = styled.li`
  text-align: left;
`

const LocationTitle = styled.span`
  font-weight: bold;
`

const LocationAddress = styled.div`
  color: gray;
`

export default (props) => (
  <Wrapper {...props}>
    <LocationItem>
      <LocationTitle>Copenhagen</LocationTitle>
      <LocationAddress>
        Enghavevej 40, 4<br />
        1674 Copenhagen V<br />
        Denmark<br />
        <div>+45 5214 0000</div>
      </LocationAddress>
    </LocationItem>
    <LocationItem>
      <LocationTitle>San Francisco</LocationTitle>
      <LocationAddress>
        Enghavevej 40, 4<br />
        1674 Copenhagen V<br />
        Denmark<br />
        <div>+45 5214 0000</div>
      </LocationAddress>
    </LocationItem>
  </Wrapper>
);
