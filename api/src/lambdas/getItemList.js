async function getItemList(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ 1: { content: 'Item 1' }, 2: { content: 'Item 2' }}),
  };
}

export const handler = getItemList;
