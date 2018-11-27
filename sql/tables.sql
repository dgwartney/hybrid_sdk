CREATE TABLE purchase_request(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    request_open_date INTEGER,
    request_close_date INTEGER,
    requestor_id INTEGER,
    request text
);

CREATE TABLE purchase_order(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    order_open_date INTEGER,
    order_close_date INTEGER,
    purchase_request_id INTEGER
);

CREATE TABLE users(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name text NOT NULL,
    last_name text NOT NULL,
    employee_title text NOT NULL
);
