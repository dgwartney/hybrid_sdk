const Avaamo = require("./index");
const process = require ("process");
const req_service = require("./req_service");
const bot_uuid = process.env.BOT_UUID;
const access_token = process.env.BOT_ACCESS_TOKEN;

new Avaamo(
	bot_uuid,
	access_token,
	{
		create_ticket: response => {
			console.log("Request from designer", JSON.stringify(response));
			return {
				ticket_id: "My Ticket ID"
			};
		},
		edit_ticket: response => {
			return response;
		},
        submit_purchase_requisition(request) {
            return req_service.submit_purchase_requisition(request);
        },
		generate_purchase_order(request) {
			return req_service.generate_purchase_order(request.vendor, request.amount);
		},
        lookup_phone(request) {
		    console.log("Looking up phone number of employee: " + request.employee_id);
            return req_service.lookup_phone(request.employee_id);
        }
	},
	true
);
