var foo = [{
    card: {
        title: "Business Cards",
        description: "Complete the following:",
        inputs: [
            {
                title: "Name",
                type: "single_line_text",
                default_value: context.user.first_name + " " + context.user.last_name
            },
            {
                title: "Title",
                type: "single_line_text",
                default_value: ""
            },

            {
                title: "Company Name",
                type: "single_line_text",
                default_value: "Acme Inc."
            },
            {
                title: "Address",
                type: "picklist.js",
                options: [
                    {
                        title: "New York: 2759 Right Way, Memphis, TN 38018"
                    },
                    {
                        title: "Los Angeles:"
                    },
                    {
                        title: "San Francisco"
                    }
                ]
            },
            {
                title: "Mobile",
                type: "single_line_text"
            },
            {
                title: "Email",
                type: "single_line_text",
                case_sensitive: true,
                default_value: context.user.first_name.toLowerCase() + "." + context.user.last_name.toLowerCase() + "@abcinc.com"
            },
            {
                title: "Web",
                type: "single_line_text",
                case_sensitive: true,
                default_value: "https://www.abcinc.com"
            }
        ]
    }
}];