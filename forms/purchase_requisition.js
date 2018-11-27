function purchase_requistion() {
    return [{
        card: {
            title: "Purchase Requisition",
            description: "Complete the following:",
            inputs: [
                {
                    title: "Name",
                    type: "single_line_text",
                    default_value: context.user.first_name + " " + context.user.last_name
                },
                {
                    title: "Preferred Vendor",
                    type: "single_line_text",
                    default_value: ""
                },
                {
                    title: "Requested Items",
                    type: "data_capture"
                }
            ]
        }
    }];
}