/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

const query = `mutation($fullName: String! $email: String! $review: String!) {
  createReview(reviewInput: {
    fullName: $fullName
    email: $email
    review: $review
  }) {
    fullName
    email
    review
  }
}
`;

export const createReviewMutation = async (
    fullName = '',
    email = '',
    review = ''
) => fetch('https://winniepukki.ddns.net', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    },
    body: JSON.stringify({
        query,
        variables: { fullName, email, review }
    })
})
    .then((response) => response.json())
    .then((data) => data);

export default createReviewMutation;
