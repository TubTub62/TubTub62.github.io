function execute_currency(clicked) {
    if (document.forms && document.forms['conv_currency']) {
        var decimals = getCookie('default_decimals');
        if (decimals == null) decimals = 2;
        convertCurrency(document.forms['conv_currency'].amount.value, document.forms['conv_currency'].unit_from.value, document.forms['conv_currency'].unit_to.value, 'div_currency', true, decimals);
    } else {
        if (clicked) alert('Converter error. Conversion not supported by browser.');
    }
}
dRf(function () {
    execute_currency(false);
});
dRf(function () {
    execute_currency(false);
});
