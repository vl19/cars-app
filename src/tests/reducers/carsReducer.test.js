import reducer from '../../reducers/cars';
import { config } from '../../constants/config';


describe('cars reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            list: [],
            addButtonStatus: false,
            deleteButtonStatus: false,
            currentCarDetails: null,
            carsToBeListed: config.carsToBeListed,
            carsPerPage: config.carsPerPage,
            carBookings: []
        });
    });

    it('should handle car/GET_ALL_CARS_SUCCESS', () => {
        expect(
            reducer({
                list: [],
                carsToBeListed: config.carsToBeListed
            }, {
                type: 'car/GET_ALL_CARS_SUCCESS',
                payload: {
                    data: [1, 2, 3]
                }
            })
        ).toEqual({
            list: [1, 2, 3],
            carsToBeListed: config.carsToBeListed
        });

        expect(
            reducer({
                list: [1, 2, 3],
                carsToBeListed: config.carsToBeListed
            }, {
                type: 'car/GET_ALL_CARS_SUCCESS',
                payload: {
                    data: [1, 2, 3]
                }
            })
        ).toEqual({
            list: [1, 2, 3],
            carsToBeListed: config.carsToBeListed
        });

        expect(
            reducer({
                list: null,
                carsToBeListed: config.carsToBeListed
            }, {
                type: 'car/GET_ALL_CARS_SUCCESS',
                payload: {
                    data: [1, 2, 3]
                }
            })
        ).toEqual({
            list: [1, 2, 3],
            carsToBeListed: config.carsToBeListed
        });
    });

    it('should handle car/LOAD_MORE_CARS', () => {
        expect(
            reducer({
                carsToBeListed: config.carsToBeListed,
                carsPerPage: config.carsPerPage
            }, {
                type: 'car/LOAD_MORE_CARS'
            })
        ).toEqual({
            carsToBeListed: config.carsToBeListed + config.carsPerPage,
            carsPerPage: config.carsPerPage
        });
    });

    it('should handle car/GET_CAR_SUCCESS', () => {
        expect(
            reducer({
                currentCarDetails: null
            }, {
                type: 'car/GET_CAR_SUCCESS',
                payload: {
                    data: {
                        model: 'str',
                        productionYear: 2009
                    }
                }
            })
        ).toEqual({
            currentCarDetails: {
                model: 'str',
                productionYear: 2009
            }
        });

        expect(
            reducer({
                currentCarDetails: {
                    model: 'str',
                    productionYear: 2009
                }
            }, {
                type: 'car/GET_CAR_SUCCESS',
                payload: {
                    data: {
                        model: 'str1',
                        productionYear: 2010
                    }
                }
            })
        ).toEqual({
            currentCarDetails: {
                model: 'str1',
                productionYear: 2010
            }
        });

        expect(
            reducer({
                currentCarDetails: {
                    model: 'str',
                    productionYear: 2009
                }
            }, {
                type: 'car/GET_CAR_SUCCESS',
                payload: {
                    data: null
                }
            })
        ).toEqual({
            currentCarDetails: null
        });
    });

    it('should handle car/GET_CARS_BOOKING_SUCCESS', () => {
        expect(
            reducer({
                carBookings: []
            }, {
                type: 'car/GET_CARS_BOOKING_SUCCESS',
                payload: {
                    data: [1, 2, 3]
                }
            })
        ).toEqual({
            carBookings: [1, 2, 3]
        });

        expect(
            reducer({
                carBookings: []
            }, {
                type: 'car/GET_CARS_BOOKING_SUCCESS',
                payload: {
                    data: []
                }
            })
        ).toEqual({
            carBookings: []
        });

        expect(
            reducer({
                carBookings: []
            }, {
                type: 'car/GET_CARS_BOOKING_SUCCESS',
                payload: {
                    data: null
                }
            })
        ).toEqual({
            carBookings: null
        });
    });
});