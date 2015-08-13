document.addEventListener('DOMContentLoaded', function() {
    var checkboxSelection = document.querySelectorAll('.aero-table__checkbox-item');
    for (var el = 0; el < checkboxSelection.length; ++el) {
        checkboxSelection[el].addEventListener('change', AeroTable.onTypeChanged.bind(AeroTable));
    }
    var tableHeaderCheckboxes = document.querySelectorAll('.aero-table__col.checkbox-button');
    for (el = 0; el < tableHeaderCheckboxes.length; ++el) {
        tableHeaderCheckboxes[el].addEventListener('click', AeroTable.onHeaderClick.bind(AeroTable));
    }
});

var AeroTable = AeroTable || {};

AeroTable.onTypeChanged = function(e) {
    if (!e || !e.target) {
        return;
    }
    var curCheckbox = e.target,
        type = curCheckbox.value,
        checked = curCheckbox.checked,
        selectedCheckboxes = document.querySelectorAll(
            '.aero-table__checkbox-item .checkbox-button__input:checked'
        );
    if (!selectedCheckboxes.length
        && DOM.hasClass(curCheckbox.parentNode.parentNode, 'checkbox-group_single-required')) {
        curCheckbox.checked = true;
        return;
    }
    var events = {
        arrivals: this.toggleArrivals,
        departures: this.toggleDepartures
    };
    if (type in events) {
        events[type].call(this, checked, curCheckbox.parentNode);
    }
};

AeroTable.toggleArrivals = function(show, parent) {
    show ? DOM.addClass(parent, 'checkbox-button_pressed') :
        DOM.removeClass(parent, 'checkbox-button_pressed');

    this.toggleRows('.aero-table__row_flight-type_arrival');
};

AeroTable.toggleDepartures = function(show, parent) {
    show ? DOM.addClass(parent, 'checkbox-button_pressed') :
        DOM.removeClass(parent, 'checkbox-button_pressed');

    this.toggleRows('.aero-table__row_flight-type_departure');
};

AeroTable.toggleRows = function(rowSelector) {
    var curRows = document.querySelectorAll(rowSelector);
    for (var i = 0; i < curRows.length; ++i) {
        if (DOM.hasClass(curRows[i], 'aero-table__row_animate_hidden')) {
            DOM.removeClass(curRows[i], 'aero-table__row_hidden');
        }
        DOM.toggleClass(curRows[i], 'aero-table__row_animate_hidden');
        (function(element) {
            setTimeout(function() {
                if (DOM.hasClass(element, 'aero-table__row_animate_hidden')) {
                    DOM.addClass(element, 'aero-table__row_hidden');
                }
            }, 150);
        })(curRows[i]);
    }
};

AeroTable.onHeaderClick = function(e) {
    if (!e || !e.target) {
        return;
    }
    var eventTargetNode = e.target;
    while (!DOM.hasClass(eventTargetNode, 'checkbox-button')) {
        eventTargetNode = eventTargetNode.parentNode;
    }
    DOM.hasClass(eventTargetNode, 'checkbox-button_pressed') ?
        DOM.removeClass(eventTargetNode, 'checkbox-button_pressed') :
        DOM.addClass(eventTargetNode, 'checkbox-button_pressed');
    //some logic
};


var DOM = DOM || {};

DOM.addClass = function(o, c) {
    if (DOM.hasClass(o, c)) {
        return;
    }
    o.className = (o.className + ' ' + c).replace(/\s+/g, ' ').replace(/(^\s|\s$)/g, '');
};

DOM.removeClass = function(o, c) {
    var re = new RegExp('(^|\\s)' + c + '(\\s|$)', 'g');
    o.className = o.className.replace(re, '$1').replace(/\s+/g, ' ').replace(/(^\s|\s$)/g, '');
};

DOM.hasClass = function(o, c) {
    var re = new RegExp('(^|\\s)' + c + '(\\s|$)', 'g');
    return re.test(o.className);
};

DOM.toggleClass = function(o, c) {
    return DOM.hasClass(o, c) ?
        DOM.removeClass(o, c) : DOM.addClass(o, c);
};