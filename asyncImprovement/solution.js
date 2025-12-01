// Because processOrder doesn’t depend on the result of updateAnalytics, we can parallelize the two invocations.

async function completeCheckout(orderId) {
  const [_, order] = await Promise.all([
    updateAnalytics(orderId),
    processOrder(orderId),
  ]);

  return order;
}
