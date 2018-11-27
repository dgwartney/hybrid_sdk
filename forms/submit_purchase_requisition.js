return HybridSDK.call(
    "submit_purchase_requisition",
    {
        first_name: context.first_name,
        last_name: context.last_name,
        employee_id: "1000"
    }
).then(function(response) {
    if(response.error) {
        return response.message;
    }
    return "Purchase request id: " + response.request_id;
}).catch(e => e);