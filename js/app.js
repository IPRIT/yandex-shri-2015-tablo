document.addEventListener('DOMContentLoaded', function() {
    AeroTable.fillTable(Airport.Domodedovo.data);

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

    [].forEach.call(document.querySelectorAll('.aero-table__row'), function(row) {
        row.addEventListener('click', AeroTable.onRowClick.bind(AeroTable));
    });
    [].forEach.call(document.querySelectorAll('.aero-table__company'), function(element) {
        element.addEventListener('click', function(e) {
            e.cancelBubble = true;
        });
    });

    document.addEventListener('scroll', AeroTable.onWindowScroll.bind(AeroTable));
    window.addEventListener('resize', AeroTable.onBodyResize.bind(AeroTable));

    AeroTable.refreshTableRows();
});

var AeroTable = AeroTable || {};


/**
 * @description
 * Обработчик для переключателя типа рейса.
 *
 * @param {object} e
 */
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


/**
 * @description
 * Скрывает/показывает строки с типом "Прилет".
 *
 * @param {boolean} show — показать/скрыть.
 * @param {object} parent — чекбокс.
 */
AeroTable.toggleArrivals = function(show, parent) {
    show ? DOM.addClass(parent, 'checkbox-button_pressed') :
        DOM.removeClass(parent, 'checkbox-button_pressed');

    this.toggleRows('.aero-table__row_flight-type_arrival');
};


/**
 * @description
 * Скрывает/показывает строки с типом "Вылет".
 *
 * @param {boolean} show — показать/скрыть.
 * @param {object} parent — чекбокс.
 */
AeroTable.toggleDepartures = function(show, parent) {
    show ? DOM.addClass(parent, 'checkbox-button_pressed') :
        DOM.removeClass(parent, 'checkbox-button_pressed');

    this.toggleRows('.aero-table__row_flight-type_departure');
};


/**
 * @description
 * Скрывает/показывает строки таблицы по определенному селектору (по типу рейса).
 *
 * @param {string} rowSelector — селектор строк.
 */
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


/**
 * @description
 * Перекрашивает видимые нечетные строки таблицы.
 */
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


/**
 * @description
 * Обработчик клика по кнопкам в "шапке" таблицы.
 *
 * @param {object} e
 */
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


/**
 * @description
 * Обработчик события скрола мышки. Отвечает за "приклеивающийся" заголовок таблицы.
 *
 * @param {object} e
 */
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


/**
 * @description
 * Обработчик изменения размера страницы. Отвечает за ширину "приклеивающейся" шапки таблицы,
 * а также за ширину ячеек внутри этой шапки.
 *
 * @param {object} e
 */
AeroTable.onBodyResize = function(e) {
    var headerTableRow = document.querySelector('.aero-table__row_purpose_header:not(.aero-table__sticky)'),
        stickyHeader = document.querySelector('.aero-table__sticky-header');
    stickyHeader.style.width = (
        Math.max(headerTableRow.offsetWidth, headerTableRow.clientWidth) + 1
    ) + 'px';
    var stickyHeaderCells = stickyHeader.getElementsByTagName('td'),
        origHeaderCells = headerTableRow.getElementsByTagName('td');
    [].forEach.call(origHeaderCells, function(curCell, index) {
        stickyHeaderCells[index].style.width = (Math.max(curCell.offsetWidth, curCell.clientWidth) + 1) + 'px';
    });
};


/**
 * @description
 * Обработчик наведения мышки на ячейки таблицы.
 * Отвечает за выделение столбцов таблицы при соответствующем наведении.
 *
 * @param {object} e
 */
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


/**
 * @description
 * Отвечает за снятие выделения со столбцов таблицы.
 *
 * @param {object} e
 */
AeroTable.onMouseLeave = function(e) {
    var table = e.target;
    var classNamePlaceholder = 'aero-table__table-hovered_num_',
        matchedIndex = table.className.match(/aero-table__table-hovered_num_(\d+)/i);
    if (matchedIndex && matchedIndex[1]) {
        DOM.removeClass(table, classNamePlaceholder + matchedIndex[1]);
    }
};


/**
 * @description
 * Обработчик клика на строку таблицы.
 * Отвечает за появление popup-окна с информацией о рейсе.
 *
 * @param {object} e
 */
AeroTable.onRowClick = function(e) {
    var dataList = Airport.Domodedovo.data,
        targetRow = e.target;
    while (!DOM.hasClass(targetRow, 'aero-table__row')) {
        targetRow = targetRow.parentNode;
    }

    function getFlightById(dataId) {
        var flight = dataList.filter(function(flight) {
            return flight.id === dataId
        });
        return flight.length ?
            flight[0] : false;
    }

    var dataId = targetRow.getAttribute('data-id'),
        flightData = getFlightById(dataId);
    if (!flightData) {
        return;
    }
    var overlay = document.querySelector('.overlay'),
        callbackOverlayClose = function(e) {
            DOM.removeClass(document.body, 'overlay-active');
            DOM.addClass(overlay, 'overlay_visibility_hidden');
            removeEventListener(overlay, 'click', callbackOverlayClose);
        };
    DOM.addClass(document.body, 'overlay-active');
    DOM.removeClass(overlay, 'overlay_visibility_hidden');
    overlay.addEventListener('click', callbackOverlayClose);

    var flightName = document.querySelector('.flight-info__title'),
        flightWay = document.querySelector('.flight-info__way'),
        flightType = document.querySelector('.flight-info__type-text'),
        time = document.querySelector('.flight-info__time-text'),
        flightStatusCircle = document.querySelector('.flight-info__status-circle'),
        flightStatus = document.querySelector('.flight-info__status-text'),
        flightNote = document.querySelector('.flight-info__note-content'),
        companyUrl = document.querySelector('.flight-info__company-link'),
        companyLogo = document.querySelector('.flight-info__company-logo .image'),
        companyName = document.querySelector('.flight-info__company-name');

    flightName.innerHTML = flightData.flight.name;
    flightWay.innerHTML = flightData.way.from + ' — ' + flightData.way.destination;
    flightType.innerHTML = flightData.dir === 'departure' ? 'Вылет' : 'Прилет';
    time.innerHTML = flightData.destionation_time;
    flightStatusCircle.title = flightData.status.text;

    var statusCircle = flightStatusCircle.getElementsByTagName('span')[0],
        matchedPresence = statusCircle.className.match(/\s?aero-table__status_role_(success|freeze|failed)\s?/i),
        statusClassPlaceholder = 'aero-table__status_role_';
    if (matchedPresence) {
        DOM.removeClass(statusCircle, statusClassPlaceholder + matchedPresence[1]);
    }
    var statusClassName,
        classList = [
            'aero-table__status_role_success',
            'aero-table__status_role_freeze',
            'aero-table__status_role_failed'
        ],
        linkage = {
            departure: [0, 1, 0, 0],
            arrival: [0, 0, 0],
            all: [1, 2]
        };
    if (flightData.status.code < 0) {
        statusClassName = classList[ linkage.all[Math.abs(flightData.status.code) - 1] ]
    } else {
        statusClassName = classList[ linkage[flightData.dir][flightData.status.code - 1] ]
    }
    DOM.addClass(statusCircle, statusClassName);

    flightStatus.innerHTML = flightData.status.text;
    flightNote.innerHTML = flightData.note.text || 'Нет данных';

    companyUrl.href = flightData.company.url;
    companyLogo.src = flightData.company.logo.max;
    companyName.innerHTML = flightData.company.name;
};


/**
 * @description
 * Заполняет таблицу данными.
 *
 * @param {object[]} dataList — массив данных с информацией о рейсах.
 */
AeroTable.fillTable = function(dataList) {
    if (!Array.isArray(dataList)) {
        return;
    }
    var container = document.querySelector('.aero-table__table:not(.aero-table__sticky-table)'),
        rowHtml   = '<tr class="aero-table__row aero-table__row_flight-type_{{dir_type}}" data-id="{{id}}">' +
                        '<td class="aero-table__col hide-ls-md-2">' +
                            '{{dir}}' +
                        '</td>' +
                        '<td class="aero-table__col">' +
                            '<span class="hide-ls-md-2">{{flight}}</span>' +
                            '<span class="show-ls-md-2">' +
                                '{{flight}}' +
                                '<br>' +
                                '<span class="hide-ls-sm-1">{{from}} — </span>' +
                                '{{destination}}' +
                            '</span>' +
                        '</td>' +
                        '<td class="aero-table__col hide-ls-sm-1">' +
                            '<div onclick="event.cancelBubble = true;" class="aero-table__col-inner aero-table__company">' +
                                '<a class="link link_type_block" target="_blank" href="{{company_url}}">' +
                                    '<div class="aero-table__company-logo hide-ls-lg-1">' +
                                        '<img class="image" src="{{company_logo_max}}">' +
                                    '</div>' +
                                    '<div class="aero-table__company-logo aero-table__company-logo_size_quad show-ls-lg-1 hide-ls-md-2">' +
                                        '<img class="image" src="{{company_logo_quad}}">' +
                                    '</div>' +
                                    '<div class="aero-table__company-name">{{company_name}}</div>' +
                                '</a>' +
                            '</div>' +
                        '</td>' +
                        '<td class="aero-table__col">' +
                            '<span class="hide-ls-sm-1">{{plane_model}}</span>' +
                            '<span title="{{plane_model}}" class="show-ls-sm-1 hide-ls-sm-2">{{plane_model_short}}</span>' +
                            '<span title="{{plane_model}}" class="show-ls-sm-2">{{plane_model_short}}</span>' +
                        '</td>' +
                        '<td class="aero-table__col hide-ls-md-2">{{destination}}</td>' +
                        '<td class="aero-table__col">' +
                            '<span class="hide-ls-sm-1">{{destination_time}}</span>' +
                            '<span title="{{destination_time}}" class="show-ls-sm-1 hide-ls-sm-2">{{destination_time_short}}</span>' +
                            '<span title="{{destination_time}}" class="show-ls-sm-2">{{destination_time_shortest}}</span>' +
                        '</td>' +
                        '<td class="aero-table__col">' +
                            '<span class="hide-ls-sm-2">{{status}}</span>' +
                            '<span title="{{status}}" class="show-ls-sm-2">' +
                                '<span class="aero-table__status {{status_circle_classname}}"></span>' +
                            '</span>' +
                        '</td>' +
                        '<td class="aero-table__col hide-ls-lg-1">{{note}}</td>' +
                    '</tr>';

    function prepareHtml(data) {
        var statusClassName,
            classList = [
                'aero-table__status_role_success',
                'aero-table__status_role_freeze',
                'aero-table__status_role_failed'
            ],
            linkage = {
                departure: [0, 1, 0, 0],
                arrival: [0, 0, 0],
                all: [1, 2]
            };
        if (data.status.code < 0) {
            statusClassName = classList[ linkage.all[Math.abs(data.status.code) - 1] ]
        } else {
            statusClassName = classList[ linkage[data.dir][data.status.code - 1] ]
        }
        var fullDir = data.dir === 'departure' ? 'Вылет' : 'Прилет';
        return rowHtml.replace(/\{\{id\}\}/ig, data.id)
            .replace(/\{\{dir_type\}\}/ig, data.dir)
            .replace(/\{\{dir\}\}/ig, fullDir)
            .replace(/\{\{flight\}\}/ig, data.flight.name)
            .replace(/\{\{from\}\}/ig, data.way.from)
            .replace(/\{\{destination\}\}/ig, data.way.destination)
            .replace(/\{\{company_url\}\}/ig, data.company.url)
            .replace(/\{\{company_logo_max\}\}/ig, data.company.logo.max)
            .replace(/\{\{company_logo_quad\}\}/ig, data.company.logo.quad)
            .replace(/\{\{company_name\}\}/ig, data.company.name)
            .replace(/\{\{plane_model\}\}/ig, data.plane.name)
            .replace(/\{\{plane_model_short\}\}/ig, data.plane.shortName)
            .replace(/\{\{destination_time\}\}/ig, fullDir + ' в ' + data.destionation_time)
            .replace(/\{\{destination_time_short\}\}/ig, 'в ' + data.destionation_time)
            .replace(/\{\{destination_time_shortest\}\}/ig, data.destionation_time)
            .replace(/\{\{status\}\}/ig, data.status.text)
            .replace(/\{\{status_circle_classname\}\}/ig, statusClassName)
            .replace(/\{\{note\}\}/ig, data.note.text.length ? data.note.text : '-');
    }

    var curData, rowHtmlReady;
    for (var el in dataList) {
        curData = dataList[el];
        rowHtmlReady = prepareHtml(curData);
        container.innerHTML += rowHtmlReady;
    }
};


var DOM = DOM || {};

/**
 * @description
 * Добавляет заданный класс к текущему элементу.
 *
 * @param {object} o — текущий элемент.
 * @param {string} c — заданный класс.
 */
DOM.addClass = function(o, c) {
    if (DOM.hasClass(o, c)) {
        return;
    }
    o.className = (o.className + ' ' + c).replace(/\s+/g, ' ').replace(/(^\s|\s$)/g, '');
};


/**
 * @description
 * Удаляет заданный класс из текущего элемента.
 *
 * @param {object} o — текущий элемент.
 * @param {string} c — заданный класс.
 */
DOM.removeClass = function(o, c) {
    var re = new RegExp('(^|\\s)' + c + '(\\s|$)', 'g');
    o.className = o.className.replace(re, '$1').replace(/\s+/g, ' ').replace(/(^\s|\s$)/g, '');
};


/**
 * @description
 * Возвращает истиное значение, если в текущем элементе
 * содержится заданный класс.
 *
 * @param {object} o — текущий элемент.
 * @param {string} c — заданный класс.
 * @return {boolean}
 */
DOM.hasClass = function(o, c) {
    var re = new RegExp('(^|\\s)' + c + '(\\s|$)', 'g');
    return re.test(o.className);
};


/**
 * @description
 * Показывает/скрывает заданный класс.
 *
 * @param {object} o — текущий элемент.
 * @param {string} c — заданный класс.
 */
DOM.toggleClass = function(o, c) {
    return DOM.hasClass(o, c) ?
        DOM.removeClass(o, c) : DOM.addClass(o, c);
};


/**
 * @description
 * Удаляет обработчик события с текущего элемента.
 *
 * @param {object} element — текущий элемент.
 * @param {string} type — название события.
 * @param {function} handler — обработчик, который нужно удалить.
 */
function removeEventListener(element, type, handler) {
    var handlers = element.events && element.events[type];
    if (!handlers) {
        return;
    }
    delete handlers[handler.guid];

    for (var any in handlers) {
        return;
    }
    if (element.removeEventListener) {
        element.removeEventListener(type, element.handle, false);
    } else if (element.detachEvent) {
        element.detachEvent('on' + type, element.handle);
    }
    delete element.events[type];

    for (any in element.events) {
        return
    }
    try {
        delete element.handle;
        delete element.events;
    } catch(e) {
        element.removeAttribute('handle');
        element.removeAttribute('events');
    }
}