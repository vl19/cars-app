import reducer from '../../reducers/bookings';

describe('booking reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            list: [],
            bookingsDetails: [],
            currentBookingDetails: []
        });
    });

    it('should handle booking/GET_ALL_BOOKINGS_SUCCESS', () => {
        expect(
            reducer({
                list: []
            }, {
                type: 'booking/GET_ALL_BOOKINGS_SUCCESS',
                payload: {
                    data: [1, 2, 3]
                }
            })
        ).toEqual({
            list: [1, 2, 3]
        });

        expect(
            reducer({
                list: []
            }, {
                type: 'booking/GET_ALL_BOOKINGS_SUCCESS',
                payload: {
                    data: []
                }
            })
        ).toEqual({
            list: []
        });

        expect(
            reducer({
                list: []
            }, {
                type: 'booking/GET_ALL_BOOKINGS_SUCCESS',
                payload: {
                    data: null
                }
            })
        ).toEqual({
            list: null
        });
    });

    it('should handle booking/RESET_ALL_BOOKINGS', () => {
        expect(
            reducer({
                bookingsDetails: [1, 2, 3]
            }, {
                type: 'booking/RESET_ALL_BOOKINGS'
            })
        ).toEqual({
            bookingsDetails: []
        });

        expect(
            reducer({
                bookingsDetails: []
            }, {
                type: 'booking/RESET_ALL_BOOKINGS'
            })
        ).toEqual({
            bookingsDetails: []
        });

        expect(
            reducer({
                bookingsDetails: null
            }, {
                type: 'booking/RESET_ALL_BOOKINGS'
            })
        ).toEqual({
            bookingsDetails: []
        });
    });

    it('should handle booking/FILTER_BOOKINGS_BY_DATE', () => {
        expect(
            reducer({
                bookingsDetails: []
            }, {
                type: 'booking/FILTER_BOOKINGS_BY_DATE',
                payload: {
                    data: [1, 2, 3]
                }
            })
        ).toEqual({
            bookingsDetails: [1, 2, 3]
        });

        expect(
            reducer({
                bookingsDetails: []
            }, {
                type: 'booking/FILTER_BOOKINGS_BY_DATE',
                payload: {
                    data: []
                }
            })
        ).toEqual({
            bookingsDetails: []
        });

        expect(
            reducer({
                bookingsDetails: []
            }, {
                type: 'booking/FILTER_BOOKINGS_BY_DATE',
                payload: {
                    data: null
                }
            })
        ).toEqual({
            bookingsDetails: null
        });
    });
});