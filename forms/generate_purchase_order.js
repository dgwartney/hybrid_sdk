return HybridSDK.call(
    "generate_purchase_order",
    {
        vendor: "ABC Company",
        amount: 100.0
    }
).then(function(response) {
    if(response.error) {
        return response.message;
    }
    return "Purchase order #" + response.id + " for $" + response.amount + " generated for " + response.vendor;
}).catch(e => e);