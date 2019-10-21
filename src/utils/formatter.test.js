import { decodeHtml } from './formatter';

const mockTextQuote = 'In the game &quot;Melty Blood Actress Again Current Code&quot;, you can enter Blood Heat mode in Half Moon style.'
const mockTextQuoteResult = 'In the game "Melty Blood Actress Again Current Code", you can enter Blood Heat mode in Half Moon style.'
const mockTextSingleQuote = '&quot;Number 16 Bus Shelter&quot; was a child&#039;s name that was approved by the New Zealand government.'
const mockTextSingleQuoteResult = `"Number 16 Bus Shelter" was a child's name that was approved by the New Zealand government.`
const mockTextCirc = 'L&#039;H&ocirc;pital was the mathematician who created the homonymous rule that uses derivatives to evaluate limits with indeterminations.'
const mockTextCircResult = `L'Hôpital was the mathematician who created the homonymous rule that uses derivatives to evaluate limits with indeterminations.`

it('decodeHtml returns readable quote values', () => {
  expect(decodeHtml(mockTextQuote)).toBe(mockTextQuoteResult);
});

it('decodeHtml returns readable single quote values', () => {
  expect(decodeHtml(mockTextSingleQuote)).toBe(mockTextSingleQuoteResult);
});

it('decodeHtml returns readable circumflex values', () => {
  expect(decodeHtml(mockTextCirc)).toBe(mockTextCircResult);
});
