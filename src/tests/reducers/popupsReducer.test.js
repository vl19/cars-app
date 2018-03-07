import reducer from '../../reducers/popups';
import { config } from '../../constants/config';


describe('popups reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            isLoginPopupVisible: false,
            isResetPasswordPopupVisible: false,
            isMessagePopupVisible: false,
            isCarBookingsPopupVisible: false,
            message: ""
        });
    });

    it('should handle popups/SET_LOGIN_VISIBILITY', () => {
        expect(reducer({
            isLoginPopupVisible: false
        }, {
            type: 'popups/SET_LOGIN_VISIBILITY',
            payload: true
        })).toEqual({
            isLoginPopupVisible: true
        });

        expect(reducer({
            isLoginPopupVisible: true
        }, {
            type: 'popups/SET_LOGIN_VISIBILITY',
            payload: false
        })).toEqual({
            isLoginPopupVisible: false
        });
    });

    it('should handle popups/SET_RESET_PASSWORD_VISIBILITY', () => {
        expect(reducer({
            isResetPasswordPopupVisible: false
        }, {
            type: 'popups/SET_RESET_PASSWORD_VISIBILITY',
            payload: true
        })).toEqual({
            isResetPasswordPopupVisible: true
        });

        expect(reducer({
            isResetPasswordPopupVisible: true
        }, {
            type: 'popups/SET_RESET_PASSWORD_VISIBILITY',
            payload: false
        })).toEqual({
            isResetPasswordPopupVisible: false
        });
    });

    it('should handle popups/SET_MESSAGE_POPUP_VISIBILITY', () => {
        expect(reducer({
            isMessagePopupVisible: false
        }, {
            type: 'popups/SET_MESSAGE_POPUP_VISIBILITY',
            payload: true
        })).toEqual({
            isMessagePopupVisible: true
        });

        expect(reducer({
            isMessagePopupVisible: true
        }, {
            type: 'popups/SET_MESSAGE_POPUP_VISIBILITY',
            payload: false
        })).toEqual({
            isMessagePopupVisible: false
        });
    });

    it('should handle car/ADD_CAR_SUCCESS', () => {
        expect(reducer({
            isMessagePopupVisible: false,
            message: null
        }, {
            type: 'car/ADD_CAR_SUCCESS',
            payload: {
                data: {
                    mark: 'm',
                    model: 'm'
                }
            }
        })).toEqual({
            isMessagePopupVisible: true,
            message: "Car m m added successfully"
        });
    });

    it('should handle popups/SET_CAR_BOOKINGS_POPUP_VISIBILITY', () => {
        expect(reducer({
            isCarBookingsPopupVisible: false
        }, {
            type: 'popups/SET_CAR_BOOKINGS_POPUP_VISIBILITY',
            payload: true
        })).toEqual({
            isCarBookingsPopupVisible: true
        });

        expect(reducer({
            isCarBookingsPopupVisible: true
        }, {
            type: 'popups/SET_CAR_BOOKINGS_POPUP_VISIBILITY',
            payload: false
        })).toEqual({
            isCarBookingsPopupVisible: false
        });
    });

    it('should handle car/DELETE_CAR_FAIL', () => {
        expect(reducer({
            isMessagePopupVisible: false,
            message: null
        }, {
            type: 'car/DELETE_CAR_FAIL'
        })).toEqual({
            isMessagePopupVisible: true,
            message: "Delete failed"
        });
    });
});