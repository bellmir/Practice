/*
function solution(phone_number) {
    return "*".repeat(phone_number.length-4)+phone_number.slice(phone_number.length-4,phone_number.length+1);
}
*/
function solution(phone_number) {
    return "*".repeat(phone_number.length-4)+phone_number.slice(-4);
}