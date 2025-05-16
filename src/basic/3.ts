let value: string | number;
value = 'name';
value = 3;
// -------------------------------
type disable = {
    on: 0;
};
type enable = {
    on: 1
};
let secondValue: enable | disable;
