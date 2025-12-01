// How can we improve this code?

async function completeCheckout(orderId) {
  await updateAnalytics(orderId);
  const order = await processOrder(orderId);

  return order;
}
