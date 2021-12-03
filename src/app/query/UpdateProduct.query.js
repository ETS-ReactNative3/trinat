/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

const query = `mutation($id: ID!, $lang: String!, $product: EditProduct) {
  updateProduct(id: $id, lang: $lang, product: $product) {
    success
  }
}
`;

export const updateProductMutation = async (
    id = '',
    lang = '',
    { title, description, price }
) => fetch('https://graphql.reaktivelab.co/graphql', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    },
    body: JSON.stringify({
        query,
        variables: {
            id,
            lang,
            product: {
                title,
                description,
                price
            }
        }
    })
})
    .then((response) => response.json())
    .then((data) => data);

export default updateProductMutation;
