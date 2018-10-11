import { colors, layout } from 'utils/variables';

export const defaultWrapper = props => `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const defaultContainer = props => `
  display: flex;
`

export default { defaultWrapper, defaultContainer };

