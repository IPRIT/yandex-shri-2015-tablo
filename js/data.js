var Airport = {
    Domodedovo: {
        data: [{
            id: 'YC-515-2015-08-14',
            company: {
                name: 'Ямал',
                url: '//rasp.yandex.ru/info/company/69',
                logo: {
                    quad: '//yastatic.net/rasp/media/data/company/svg/yamal.svg',
                    max: '//yandex.st/rasp/media/data/company/logo/yamal.jpg'
                }
            },
            dir: 'departure',
            flight: {
                name: 'YC515'
            },
            plane: {
                name: 'Airbus А320',
                shortName: 'A320'
            },
            way: {
                from: 'Москва',
                destination: 'Симферополь'
            },
            destionation_time: '16:10',
            status: {
                code: 4,
                text: 'Вылетел'
            },
            note: {
                text: ''
            }
            /*
            Departure: 1 - регистрация, 2 - ожидание посадки, 3 - посадка закончена, 4 - вылетел
            Arrival: 1 - по расписанию, 2 -  летит, 3 - приземлился.
            All: -1 - Задерживается до HH:MM, -2 - отменен.
            */
        }, {
            id: 'U6-2841-2015-08-14',
            company: {
                name: 'Уральские Авиалинии',
                url: '//rasp.yandex.ru/info/company/30',
                logo: {
                    quad: '//yandex.st/rasp/media/data/company/svg/ural_airlines.svg',
                    max: '//yandex.st/rasp/media/data/company/logo/ural_airlines.png'
                }
            },
            dir: 'departure',
            flight: {
                name: 'U62841'
            },
            plane: {
                name: 'Airbus А321',
                shortName: 'A321'
            },
            way: {
                from: 'Москва',
                destination: 'Симферополь'
            },
            destionation_time: '16:15',
            status: {
                code: -1,
                text: 'Задерживается до 20:00'
            },
            note: {
                text: ''
            }
        }, {
            id: 'YC-455-2015-08-14',
            company: {
                name: 'Ямал',
                url: '//rasp.yandex.ru/info/company/69',
                logo: {
                    quad: '//yastatic.net/rasp/media/data/company/svg/yamal.svg',
                    max: '//yandex.st/rasp/media/data/company/logo/yamal.jpg'
                }
            },
            dir: 'arrival',
            flight: {
                name: 'YC455'
            },
            plane: {
                name: 'Airbus А320',
                shortName: 'A320'
            },
            way: {
                from: 'Тиват',
                destination: 'Москва'
            },
            destionation_time: '15:00',
            status: {
                code: -1,
                text: 'Задерживается до 23:00'
            },
            note: {
                text: ''
            }
        }, {
            id: 'S7-1149-2015-08-14',
            company: {
                name: 'S7 Airlines',
                url: '//rasp.yandex.ru/info/company/23',
                logo: {
                    quad: '//yastatic.net/rasp/media/data/company/svg/S7_Airlines_1.svg',
                    max: '//yandex.st/rasp/media/data/company/logo/logo_2_Yandex.gif'
                }
            },
            dir: 'departure',
            flight: {
                name: 'S71149'
            },
            plane: {
                name: 'Airbus A319',
                shortName: 'A319'
            },
            way: {
                from: 'Москва',
                destination: 'Краснодар'
            },
            destionation_time: '18:35',
            status: {
                code: 4,
                text: 'Вылетел'
            },
            note: {
                text: ''
            }
        }, {
            id: 'U6-2897-2015-08-14',
            company: {
                name: 'Уральские Авиалинии',
                url: '//rasp.yandex.ru/info/company/30',
                logo: {
                    quad: '//yandex.st/rasp/media/data/company/svg/ural_airlines.svg',
                    max: '//yandex.st/rasp/media/data/company/logo/ural_airlines.png'
                }
            },
            dir: 'departure',
            flight: {
                name: 'U62897'
            },
            plane: {
                name: 'Airbus A319',
                shortName: 'A319'
            },
            way: {
                from: 'Москва',
                destination: 'Симферополь'
            },
            destionation_time: '21:00',
            status: {
                code: -2,
                text: 'Отменен'
            },
            note: {
                text: ''
            }
        }, {
            id: 'VGV-2390-2015-08-14',
            company: {
                name: 'Вологодское авиапредприятие',
                url: '//rasp.yandex.ru/info/company/30',
                logo: {
                    quad: '//yastatic.net/ticket/_/IU3fsiV9PzOIuYpJRk2Xh9zGm4M.svg',
                    max: '//yandex.st/rasp/media/data/company/logo/vologda.jpg'
                }
            },
            dir: 'arrival',
            flight: {
                name: 'VGV2390'
            },
            plane: {
                name: 'ЯК-40',
                shortName: 'ЯК40'
            },
            way: {
                from: 'Вологда',
                destination: 'Москва'
            },
            destionation_time: '19:10',
            status: {
                code: 3,
                text: 'Приземлился'
            },
            note: {
                text: ''
            }
        }, {
            id: 'U6-2841-2015-08-14-2',
            company: {
                name: 'Уральские Авиалинии',
                url: '//rasp.yandex.ru/info/company/30',
                logo: {
                    quad: '//yandex.st/rasp/media/data/company/svg/ural_airlines.svg',
                    max: '//yandex.st/rasp/media/data/company/logo/ural_airlines.png'
                }
            },
            dir: 'departure',
            flight: {
                name: 'U62841'
            },
            plane: {
                name: 'Airbus А321',
                shortName: 'A321'
            },
            way: {
                from: 'Москва',
                destination: 'Симферополь'
            },
            destionation_time: '16:15',
            status: {
                code: -1,
                text: 'Задерживается до 20:00'
            },
            note: {
                text: ''
            }
        }, {
            id: 'YC-455-2015-08-14-2',
            company: {
                name: 'Ямал',
                url: '//rasp.yandex.ru/info/company/69',
                logo: {
                    quad: '//yastatic.net/rasp/media/data/company/svg/yamal.svg',
                    max: '//yandex.st/rasp/media/data/company/logo/yamal.jpg'
                }
            },
            dir: 'arrival',
            flight: {
                name: 'YC455'
            },
            plane: {
                name: 'Airbus А320',
                shortName: 'A320'
            },
            way: {
                from: 'Тиват',
                destination: 'Москва'
            },
            destionation_time: '15:00',
            status: {
                code: -1,
                text: 'Задерживается до 23:00'
            },
            note: {
                text: ''
            }
        }, {
            id: 'S7-1149-2015-08-14-2',
            company: {
                name: 'S7 Airlines',
                url: '//rasp.yandex.ru/info/company/23',
                logo: {
                    quad: '//yastatic.net/rasp/media/data/company/svg/S7_Airlines_1.svg',
                    max: '//yandex.st/rasp/media/data/company/logo/logo_2_Yandex.gif'
                }
            },
            dir: 'departure',
            flight: {
                name: 'S71149'
            },
            plane: {
                name: 'Airbus A319',
                shortName: 'A319'
            },
            way: {
                from: 'Москва',
                destination: 'Краснодар'
            },
            destionation_time: '18:35',
            status: {
                code: 4,
                text: 'Вылетел'
            },
            note: {
                text: ''
            }
        }, {
            id: 'U6-2897-2015-08-14-2',
            company: {
                name: 'Уральские Авиалинии',
                url: '//rasp.yandex.ru/info/company/30',
                logo: {
                    quad: '//yandex.st/rasp/media/data/company/svg/ural_airlines.svg',
                    max: '//yandex.st/rasp/media/data/company/logo/ural_airlines.png'
                }
            },
            dir: 'departure',
            flight: {
                name: 'U62897'
            },
            plane: {
                name: 'Airbus A319',
                shortName: 'A319'
            },
            way: {
                from: 'Москва',
                destination: 'Симферополь'
            },
            destionation_time: '21:00',
            status: {
                code: -2,
                text: 'Отменен'
            },
            note: {
                text: ''
            }
        }, {
            id: 'VGV-2390-2015-08-14-2',
            company: {
                name: 'Вологодское авиапредприятие',
                url: '//rasp.yandex.ru/info/company/30',
                logo: {
                    quad: '//yastatic.net/ticket/_/IU3fsiV9PzOIuYpJRk2Xh9zGm4M.svg',
                    max: '//yandex.st/rasp/media/data/company/logo/vologda.jpg'
                }
            },
            dir: 'arrival',
            flight: {
                name: 'VGV2390'
            },
            plane: {
                name: 'ЯК-40',
                shortName: 'ЯК40'
            },
            way: {
                from: 'Вологда',
                destination: 'Москва'
            },
            destionation_time: '19:10',
            status: {
                code: 3,
                text: 'Приземлился'
            },
            note: {
                text: ''
            }
        }, {
            id: 'U6-2841-2015-08-14-3',
            company: {
                name: 'Уральские Авиалинии',
                url: '//rasp.yandex.ru/info/company/30',
                logo: {
                    quad: '//yandex.st/rasp/media/data/company/svg/ural_airlines.svg',
                    max: '//yandex.st/rasp/media/data/company/logo/ural_airlines.png'
                }
            },
            dir: 'departure',
            flight: {
                name: 'U62841'
            },
            plane: {
                name: 'Airbus А321',
                shortName: 'A321'
            },
            way: {
                from: 'Москва',
                destination: 'Симферополь'
            },
            destionation_time: '16:15',
            status: {
                code: -1,
                text: 'Задерживается до 20:00'
            },
            note: {
                text: ''
            }
        }, {
            id: 'YC-455-2015-08-14-3',
            company: {
                name: 'Ямал',
                url: '//rasp.yandex.ru/info/company/69',
                logo: {
                    quad: '//yastatic.net/rasp/media/data/company/svg/yamal.svg',
                    max: '//yandex.st/rasp/media/data/company/logo/yamal.jpg'
                }
            },
            dir: 'arrival',
            flight: {
                name: 'YC455'
            },
            plane: {
                name: 'Airbus А320',
                shortName: 'A320'
            },
            way: {
                from: 'Тиват',
                destination: 'Москва'
            },
            destionation_time: '15:00',
            status: {
                code: -1,
                text: 'Задерживается до 23:00'
            },
            note: {
                text: ''
            }
        }, {
            id: 'S7-1149-2015-08-14-3',
            company: {
                name: 'S7 Airlines',
                url: '//rasp.yandex.ru/info/company/23',
                logo: {
                    quad: '//yastatic.net/rasp/media/data/company/svg/S7_Airlines_1.svg',
                    max: '//yandex.st/rasp/media/data/company/logo/logo_2_Yandex.gif'
                }
            },
            dir: 'departure',
            flight: {
                name: 'S71149'
            },
            plane: {
                name: 'Airbus A319',
                shortName: 'A319'
            },
            way: {
                from: 'Москва',
                destination: 'Краснодар'
            },
            destionation_time: '18:35',
            status: {
                code: 4,
                text: 'Вылетел'
            },
            note: {
                text: ''
            }
        }, {
            id: 'U6-2897-2015-08-14-3',
            company: {
                name: 'Уральские Авиалинии',
                url: '//rasp.yandex.ru/info/company/30',
                logo: {
                    quad: '//yandex.st/rasp/media/data/company/svg/ural_airlines.svg',
                    max: '//yandex.st/rasp/media/data/company/logo/ural_airlines.png'
                }
            },
            dir: 'departure',
            flight: {
                name: 'U62897'
            },
            plane: {
                name: 'Airbus A319',
                shortName: 'A319'
            },
            way: {
                from: 'Москва',
                destination: 'Симферополь'
            },
            destionation_time: '21:00',
            status: {
                code: -2,
                text: 'Отменен'
            },
            note: {
                text: ''
            }
        }, {
            id: 'VGV-2390-2015-08-14-3',
            company: {
                name: 'Вологодское авиапредприятие',
                url: '//rasp.yandex.ru/info/company/30',
                logo: {
                    quad: '//yastatic.net/ticket/_/IU3fsiV9PzOIuYpJRk2Xh9zGm4M.svg',
                    max: '//yandex.st/rasp/media/data/company/logo/vologda.jpg'
                }
            },
            dir: 'arrival',
            flight: {
                name: 'VGV2390'
            },
            plane: {
                name: 'ЯК-40',
                shortName: 'ЯК40'
            },
            way: {
                from: 'Вологда',
                destination: 'Москва'
            },
            destionation_time: '19:10',
            status: {
                code: 3,
                text: 'Приземлился'
            },
            note: {
                text: ''
            }
        }, {
            id: 'YC-515-2015-08-14-2',
            company: {
                name: 'Ямал',
                url: '//rasp.yandex.ru/info/company/69',
                logo: {
                    quad: '//yastatic.net/rasp/media/data/company/svg/yamal.svg',
                    max: '//yandex.st/rasp/media/data/company/logo/yamal.jpg'
                }
            },
            dir: 'departure',
            flight: {
                name: 'YC515'
            },
            plane: {
                name: 'Airbus А320',
                shortName: 'A320'
            },
            way: {
                from: 'Москва',
                destination: 'Симферополь'
            },
            destionation_time: '16:10',
            status: {
                code: 4,
                text: 'Вылетел'
            },
            note: {
                text: ''
            }
        }, {
            id: 'YC-515-2015-08-14-3',
            company: {
                name: 'Ямал',
                url: '//rasp.yandex.ru/info/company/69',
                logo: {
                    quad: '//yastatic.net/rasp/media/data/company/svg/yamal.svg',
                    max: '//yandex.st/rasp/media/data/company/logo/yamal.jpg'
                }
            },
            dir: 'departure',
            flight: {
                name: 'YC515'
            },
            plane: {
                name: 'Airbus А320',
                shortName: 'A320'
            },
            way: {
                from: 'Москва',
                destination: 'Симферополь'
            },
            destionation_time: '16:10',
            status: {
                code: 4,
                text: 'Вылетел'
            },
            note: {
                text: ''
            }
        }, {
            id: 'U6-2841-2015-08-14-4',
            company: {
                name: 'Уральские Авиалинии',
                url: '//rasp.yandex.ru/info/company/30',
                logo: {
                    quad: '//yandex.st/rasp/media/data/company/svg/ural_airlines.svg',
                    max: '//yandex.st/rasp/media/data/company/logo/ural_airlines.png'
                }
            },
            dir: 'departure',
            flight: {
                name: 'U62841'
            },
            plane: {
                name: 'Airbus А321',
                shortName: 'A321'
            },
            way: {
                from: 'Москва',
                destination: 'Симферополь'
            },
            destionation_time: '16:15',
            status: {
                code: -1,
                text: 'Задерживается до 20:00'
            },
            note: {
                text: ''
            }
        }, {
            id: 'YC-455-2015-08-14-4',
            company: {
                name: 'Ямал',
                url: '//rasp.yandex.ru/info/company/69',
                logo: {
                    quad: '//yastatic.net/rasp/media/data/company/svg/yamal.svg',
                    max: '//yandex.st/rasp/media/data/company/logo/yamal.jpg'
                }
            },
            dir: 'arrival',
            flight: {
                name: 'YC455'
            },
            plane: {
                name: 'Airbus А320',
                shortName: 'A320'
            },
            way: {
                from: 'Тиват',
                destination: 'Москва'
            },
            destionation_time: '15:00',
            status: {
                code: -1,
                text: 'Задерживается до 23:00'
            },
            note: {
                text: ''
            }
        }, {
            id: 'S7-1149-2015-08-14-4',
            company: {
                name: 'S7 Airlines',
                url: '//rasp.yandex.ru/info/company/23',
                logo: {
                    quad: '//yastatic.net/rasp/media/data/company/svg/S7_Airlines_1.svg',
                    max: '//yandex.st/rasp/media/data/company/logo/logo_2_Yandex.gif'
                }
            },
            dir: 'departure',
            flight: {
                name: 'S71149'
            },
            plane: {
                name: 'Airbus A319',
                shortName: 'A319'
            },
            way: {
                from: 'Москва',
                destination: 'Краснодар'
            },
            destionation_time: '18:35',
            status: {
                code: 4,
                text: 'Вылетел'
            },
            note: {
                text: ''
            }
        }, {
            id: 'U6-2897-2015-08-14-4',
            company: {
                name: 'Уральские Авиалинии',
                url: '//rasp.yandex.ru/info/company/30',
                logo: {
                    quad: '//yandex.st/rasp/media/data/company/svg/ural_airlines.svg',
                    max: '//yandex.st/rasp/media/data/company/logo/ural_airlines.png'
                }
            },
            dir: 'departure',
            flight: {
                name: 'U62897'
            },
            plane: {
                name: 'Airbus A319',
                shortName: 'A319'
            },
            way: {
                from: 'Москва',
                destination: 'Симферополь'
            },
            destionation_time: '21:00',
            status: {
                code: -2,
                text: 'Отменен'
            },
            note: {
                text: ''
            }
        }, {
            id: 'VGV-2390-2015-08-14-4',
            company: {
                name: 'Вологодское авиапредприятие',
                url: '//rasp.yandex.ru/info/company/30',
                logo: {
                    quad: '//yastatic.net/ticket/_/IU3fsiV9PzOIuYpJRk2Xh9zGm4M.svg',
                    max: '//yandex.st/rasp/media/data/company/logo/vologda.jpg'
                }
            },
            dir: 'arrival',
            flight: {
                name: 'VGV2390'
            },
            plane: {
                name: 'ЯК-40',
                shortName: 'ЯК40'
            },
            way: {
                from: 'Вологда',
                destination: 'Москва'
            },
            destionation_time: '19:10',
            status: {
                code: 3,
                text: 'Приземлился'
            },
            note: {
                text: ''
            }
        }, {
            id: 'U6-2841-2015-08-14-4',
            company: {
                name: 'Уральские Авиалинии',
                url: '//rasp.yandex.ru/info/company/30',
                logo: {
                    quad: '//yandex.st/rasp/media/data/company/svg/ural_airlines.svg',
                    max: '//yandex.st/rasp/media/data/company/logo/ural_airlines.png'
                }
            },
            dir: 'departure',
            flight: {
                name: 'U62841'
            },
            plane: {
                name: 'Airbus А321',
                shortName: 'A321'
            },
            way: {
                from: 'Москва',
                destination: 'Симферополь'
            },
            destionation_time: '16:15',
            status: {
                code: -1,
                text: 'Задерживается до 20:00'
            },
            note: {
                text: ''
            }
        }, {
            id: 'YC-455-2015-08-14-4',
            company: {
                name: 'Ямал',
                url: '//rasp.yandex.ru/info/company/69',
                logo: {
                    quad: '//yastatic.net/rasp/media/data/company/svg/yamal.svg',
                    max: '//yandex.st/rasp/media/data/company/logo/yamal.jpg'
                }
            },
            dir: 'arrival',
            flight: {
                name: 'YC455'
            },
            plane: {
                name: 'Airbus А320',
                shortName: 'A320'
            },
            way: {
                from: 'Тиват',
                destination: 'Москва'
            },
            destionation_time: '15:00',
            status: {
                code: -1,
                text: 'Задерживается до 23:00'
            },
            note: {
                text: ''
            }
        }, {
            id: 'S7-1149-2015-08-14-4',
            company: {
                name: 'S7 Airlines',
                url: '//rasp.yandex.ru/info/company/23',
                logo: {
                    quad: '//yastatic.net/rasp/media/data/company/svg/S7_Airlines_1.svg',
                    max: '//yandex.st/rasp/media/data/company/logo/logo_2_Yandex.gif'
                }
            },
            dir: 'departure',
            flight: {
                name: 'S71149'
            },
            plane: {
                name: 'Airbus A319',
                shortName: 'A319'
            },
            way: {
                from: 'Москва',
                destination: 'Краснодар'
            },
            destionation_time: '18:35',
            status: {
                code: 4,
                text: 'Вылетел'
            },
            note: {
                text: ''
            }
        }, {
            id: 'U6-2897-2015-08-14-4',
            company: {
                name: 'Уральские Авиалинии',
                url: '//rasp.yandex.ru/info/company/30',
                logo: {
                    quad: '//yandex.st/rasp/media/data/company/svg/ural_airlines.svg',
                    max: '//yandex.st/rasp/media/data/company/logo/ural_airlines.png'
                }
            },
            dir: 'departure',
            flight: {
                name: 'U62897'
            },
            plane: {
                name: 'Airbus A319',
                shortName: 'A319'
            },
            way: {
                from: 'Москва',
                destination: 'Симферополь'
            },
            destionation_time: '21:00',
            status: {
                code: -2,
                text: 'Отменен'
            },
            note: {
                text: ''
            }
        }, {
            id: 'VGV-2390-2015-08-14-4',
            company: {
                name: 'Вологодское авиапредприятие',
                url: '//rasp.yandex.ru/info/company/30',
                logo: {
                    quad: '//yastatic.net/ticket/_/IU3fsiV9PzOIuYpJRk2Xh9zGm4M.svg',
                    max: '//yandex.st/rasp/media/data/company/logo/vologda.jpg'
                }
            },
            dir: 'arrival',
            flight: {
                name: 'VGV2390'
            },
            plane: {
                name: 'ЯК-40',
                shortName: 'ЯК40'
            },
            way: {
                from: 'Вологда',
                destination: 'Москва'
            },
            destionation_time: '19:10',
            status: {
                code: 3,
                text: 'Приземлился'
            },
            note: {
                text: ''
            }
        }, {
            id: 'U6-2841-2015-08-14-4',
            company: {
                name: 'Уральские Авиалинии',
                url: '//rasp.yandex.ru/info/company/30',
                logo: {
                    quad: '//yandex.st/rasp/media/data/company/svg/ural_airlines.svg',
                    max: '//yandex.st/rasp/media/data/company/logo/ural_airlines.png'
                }
            },
            dir: 'departure',
            flight: {
                name: 'U62841'
            },
            plane: {
                name: 'Airbus А321',
                shortName: 'A321'
            },
            way: {
                from: 'Москва',
                destination: 'Симферополь'
            },
            destionation_time: '16:15',
            status: {
                code: -1,
                text: 'Задерживается до 20:00'
            },
            note: {
                text: ''
            }
        }, {
            id: 'YC-455-2015-08-14-4',
            company: {
                name: 'Ямал',
                url: '//rasp.yandex.ru/info/company/69',
                logo: {
                    quad: '//yastatic.net/rasp/media/data/company/svg/yamal.svg',
                    max: '//yandex.st/rasp/media/data/company/logo/yamal.jpg'
                }
            },
            dir: 'arrival',
            flight: {
                name: 'YC455'
            },
            plane: {
                name: 'Airbus А320',
                shortName: 'A320'
            },
            way: {
                from: 'Тиват',
                destination: 'Москва'
            },
            destionation_time: '15:00',
            status: {
                code: -1,
                text: 'Задерживается до 23:00'
            },
            note: {
                text: ''
            }
        }, {
            id: 'S7-1149-2015-08-14-4',
            company: {
                name: 'S7 Airlines',
                url: '//rasp.yandex.ru/info/company/23',
                logo: {
                    quad: '//yastatic.net/rasp/media/data/company/svg/S7_Airlines_1.svg',
                    max: '//yandex.st/rasp/media/data/company/logo/logo_2_Yandex.gif'
                }
            },
            dir: 'departure',
            flight: {
                name: 'S71149'
            },
            plane: {
                name: 'Airbus A319',
                shortName: 'A319'
            },
            way: {
                from: 'Москва',
                destination: 'Краснодар'
            },
            destionation_time: '18:35',
            status: {
                code: 4,
                text: 'Вылетел'
            },
            note: {
                text: ''
            }
        }, {
            id: 'U6-2897-2015-08-14-4',
            company: {
                name: 'Уральские Авиалинии',
                url: '//rasp.yandex.ru/info/company/30',
                logo: {
                    quad: '//yandex.st/rasp/media/data/company/svg/ural_airlines.svg',
                    max: '//yandex.st/rasp/media/data/company/logo/ural_airlines.png'
                }
            },
            dir: 'departure',
            flight: {
                name: 'U62897'
            },
            plane: {
                name: 'Airbus A319',
                shortName: 'A319'
            },
            way: {
                from: 'Москва',
                destination: 'Симферополь'
            },
            destionation_time: '21:00',
            status: {
                code: -2,
                text: 'Отменен'
            },
            note: {
                text: ''
            }
        }, {
            id: 'VGV-2390-2015-08-14-4',
            company: {
                name: 'Вологодское авиапредприятие',
                url: '//rasp.yandex.ru/info/company/30',
                logo: {
                    quad: '//yastatic.net/ticket/_/IU3fsiV9PzOIuYpJRk2Xh9zGm4M.svg',
                    max: '//yandex.st/rasp/media/data/company/logo/vologda.jpg'
                }
            },
            dir: 'arrival',
            flight: {
                name: 'VGV2390'
            },
            plane: {
                name: 'ЯК-40',
                shortName: 'ЯК40'
            },
            way: {
                from: 'Вологда',
                destination: 'Москва'
            },
            destionation_time: '19:10',
            status: {
                code: 3,
                text: 'Приземлился'
            },
            note: {
                text: ''
            }
        }, {
            id: 'YC-515-2015-08-14-4',
            company: {
                name: 'Ямал',
                url: '//rasp.yandex.ru/info/company/69',
                logo: {
                    quad: '//yastatic.net/rasp/media/data/company/svg/yamal.svg',
                    max: '//yandex.st/rasp/media/data/company/logo/yamal.jpg'
                }
            },
            dir: 'departure',
            flight: {
                name: 'YC515'
            },
            plane: {
                name: 'Airbus А320',
                shortName: 'A320'
            },
            way: {
                from: 'Москва',
                destination: 'Симферополь'
            },
            destionation_time: '16:10',
            status: {
                code: 4,
                text: 'Вылетел'
            },
            note: {
                text: ''
            }
        }, {
            id: 'YC-515-2015-08-14-4',
            company: {
                name: 'Ямал',
                url: '//rasp.yandex.ru/info/company/69',
                logo: {
                    quad: '//yastatic.net/rasp/media/data/company/svg/yamal.svg',
                    max: '//yandex.st/rasp/media/data/company/logo/yamal.jpg'
                }
            },
            dir: 'departure',
            flight: {
                name: 'YC515'
            },
            plane: {
                name: 'Airbus А320',
                shortName: 'A320'
            },
            way: {
                from: 'Москва',
                destination: 'Симферополь'
            },
            destionation_time: '16:10',
            status: {
                code: 4,
                text: 'Вылетел'
            },
            note: {
                text: ''
            }
        }]
    }
};