var PURCHASE_REQUEST_ID = 1000;
var PURCHASE_ORDER_ID = 1000;

var EMPLOYEE_ID_TO_PHONE = {
"Dashboard_admin_test_user_487": "+1 (408) 504-0880",
"Dashboard_admin_test_user_500": "+1 (408) 504-6646"
};

function log_request(request) {
    console.log("Request from designer", JSON.stringify(request));
}

function generate_purchase_request_id() {
    PURCHASE_REQUEST_ID =  PURCHASE_REQUEST_ID + 1;
    return PURCHASE_REQUEST_ID;
}

function generate_purchase_order_id() {
    PURCHASE_ORDER_ID = PURCHASE_ORDER_ID + 1;
    return PURCHASE_ORDER_ID;
}

function submit_purchase_requisition(request) {
    log_request(request);
    let response = {
        request_id: generate_purchase_request_id()
    };

    return response;
}

/**
 * Generates a purchase
 * @param vendor
 * @param amount
 * @returns {{vendor: string, amount: PaymentCurrencyAmount, id: (number|*)}}
 */
function generate_purchase_order(vendor, amount) {
    let purchase_order_id = generate_purchase_order_id();
    let response = {
        vendor: vendor,
        amount: amount,
        id: purchase_order_id,
    };
    return response;
}

/**
 * This function fetches an employee id
 * from the input first and last name
 * @param {string} input first name
 * @param {string} input last name
 * @returns {number} employee id
 */
function employee_id(first_name, last_name) {
    return 123456;
}

/**
 * This function returns the phone number given an employee id
 *
 * @param employee_id
 * @returns {*}
 */
function lookup_phone(employee_id) {
    let response =  {
        phone: "+1 (408) 504-0880"
    };
    console.log("Found phone number: " + response.phone);
    return response;
}

module.exports.submit_purchase_requisition = submit_purchase_requisition;
module.exports.generate_purchase_order = generate_purchase_order;
module.exports.lookup_phone = lookup_phone;
