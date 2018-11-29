export function aspectRatio(ratio) {
  let aspectRatioPercentage;

  switch(ratio) {
    case '16x9':
      aspectRatioPercentage = '56.25%';
      break;
    case '4x3':
      aspectRatioPercentage = '75%';
      break;
    case '3x4':
      aspectRatioPercentage = '133.33%';
      break;
    case '3x2':
      aspectRatioPercentage = '66.67%';
      break;
    case '2x3':
      aspectRatioPercentage = '150%';
      break;
    default:
      aspectRatioPercentage = '56.25%';
  }

  return `
    &::before {
      content: '';
      float: left;
      padding-bottom: ${aspectRatioPercentage};
    }
    &::after {
      clear: left;
      content: ' ';
      display: table;
    }
  `;
}