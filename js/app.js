document.addEventListener('DOMContentLoaded', function() {
    var table = document.querySelector('.aero-table__table:not(.aero-table__sticky-table)'),
        checkboxSelection = document.querySelectorAll('.aero-table__checkbox-item');
    table.addEventListener('mouseleave', AeroTable.onMouseLeave.bind(AeroTable));
    for (var el = 0; el < checkboxSelection.length; ++el) {
        checkboxSelection[el].addEventListener('change', AeroTable.onTypeChanged.bind(AeroTable));
    }
    var tableHeaderCheckboxes = document.querySelectorAll('.aero-table__col.checkbox-button');
    for (el = 0; el < tableHeaderCheckboxes.length; ++el) {
        tableHeaderCheckboxes[el].addEventListener('click', AeroTable.onHeaderClick.bind(AeroTable));
    }
    var tableCells = document.querySelectorAll('.aero-table__col');
    for (el = 0; el < tableCells.length; ++el) {
        tableCells[el].addEventListener('mouseover', AeroTable.onCellHovered.bind(AeroTable));
    }
    document.addEventListener('scroll', AeroTable.onWindowScroll.bind(AeroTable));
    window.addEventListener('resize', AeroTable.onBodyResize.bind(AeroTable));
    AeroTable.refreshTableRows();
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

AeroTable.refreshTableRows = function() {
    var shadyRows = document.querySelectorAll('.aero-table__row.aero-table__row_bg_shady');
    for (var index = 0; index < shadyRows.length; ++index) {
        DOM.removeClass(shadyRows[index], 'aero-table__row_bg_shady');
    }
    var visibleTableRows = document.querySelectorAll(
        '.aero-table__row:not(.aero-table__row_animate_hidden):not(.aero-table__row_purpose_header)'
    );
    for (index = 1; index < visibleTableRows.length; index += 2) {
        DOM.addClass(visibleTableRows[index], 'aero-table__row_bg_shady');
    }
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
    this.refreshTableRows();
};

AeroTable.onHeaderClick = function(e) {
    if (!e || !e.target) {
        return;
    }
    var eventTargetNode = e.target;
    while (!DOM.hasClass(eventTargetNode, 'checkbox-button')) {
        eventTargetNode = eventTargetNode.parentNode;
    }
    switch (eventTargetNode.id) {
        case 'checkbox_change_time_sort':
            var headerCheckboxes = document.querySelectorAll('.aero-table__time-sort');
            [].forEach.call(headerCheckboxes, function(element) {
                DOM.toggleClass(element, 'checkbox-button_pressed');
            });
            //some logic
            break;
    }
};

AeroTable.onWindowScroll = function(e) {
    var scrollTop = document.body.scrollTop,
        headerMenuWrapper = document.querySelector('.header-wrapper'),
        headerMenuWrapperHeight = headerMenuWrapper.offsetHeight,
        headerTableRow = document.querySelector('.aero-table__row_purpose_header:not(.aero-table__sticky)'),
        stickyHeader = document.querySelector('.aero-table__sticky-header');

    function getOffset(node) {
        var box = { top: 0, left: 0 };
        if (typeof node.getBoundingClientRect !== 'undefined') {
            box = node.getBoundingClientRect();
        }
        return {
            top: box.top + (window.pageYOffset || document.body.scrollTop) - (document.body.clientTop  || 0),
            left: box.left + (window.pageXOffset || document.body.scrollLeft) - (document.body.clientLeft || 0)
        };
    }

    var tableOffsetTop = getOffset(headerTableRow).top;
    if (scrollTop > tableOffsetTop - headerMenuWrapperHeight) {
        DOM.addClass(stickyHeader, 'aero-table__sticky-header_fixed');
        stickyHeader.style.top = (headerMenuWrapperHeight - 1) + 'px';
        stickyHeader.style.width = (
            Math.max(headerTableRow.offsetWidth, headerTableRow.clientWidth) + 1
        ) + 'px';
    } else {
        DOM.removeClass(stickyHeader, 'aero-table__sticky-header_fixed');
    }
};

AeroTable.onBodyResize = function(e) {
    var headerTableRow = document.querySelector('.aero-table__row_purpose_header:not(.aero-table__sticky)'),
        stickyHeader = document.querySelector('.aero-table__sticky-header');
    stickyHeader.style.width = (
        Math.max(headerTableRow.offsetWidth, headerTableRow.clientWidth) + 1
    ) + 'px';
};

AeroTable.onCellHovered = function(e) {
    var target = e.target;
    while (!DOM.hasClass(target, 'aero-table__col')) {
        target = target.parentNode;
    }
    var collection = target.parentNode.childNodes,
        index = 1;
    for (var i = 0; i < collection.length; ++i) {
        if (collection[i] == target) {
            break;
        }
        DOM.hasClass(collection[i], 'aero-table__col') && ++index;
    }
    if (!index) {
        return;
    }
    var classNamePlaceholder = 'aero-table__table-hovered_num_',
        table = document.querySelector('.aero-table__table:not(.aero-table__sticky-table)'),
        matchedIndex = table.className.match(/aero-table__table-hovered_num_(\d+)/i);
    if (matchedIndex && matchedIndex[1] != index) {
        DOM.removeClass(table, classNamePlaceholder + matchedIndex[1]);
    }
    DOM.addClass(table, classNamePlaceholder + index);
};

AeroTable.onMouseLeave = function(e) {
    var table = e.target;
    var classNamePlaceholder = 'aero-table__table-hovered_num_',
        matchedIndex = table.className.match(/aero-table__table-hovered_num_(\d+)/i);
    if (matchedIndex && matchedIndex[1]) {
        DOM.removeClass(table, classNamePlaceholder + matchedIndex[1]);
    }
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

/**
 * TODO:
 *
 * 1) [Ready] по наведению курсора на определённое место в табло контрастным цветом выделяются соответствующие строка и столбец;
 * 2) сделайте так, чтобы по клику на соответствующую строчку в выплывающем окне показывались все данные рейса;
 *
 */