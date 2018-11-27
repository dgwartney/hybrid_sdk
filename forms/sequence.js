var PURCHASE_REQ_ID = 1000;

function preq_next_sequence() {
    PURCHASE_REQ_ID = PURCHASE_REQ_ID + 1;
    return PURCHASE_REQ_ID;
}

console.log(preq_next_sequence());
console.log(preq_next_sequence());
console.log(preq_next_sequence());
console.log(preq_next_sequence());