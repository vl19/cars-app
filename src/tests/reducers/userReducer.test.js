import reducer from '../../reducers/users';
import { config } from '../../constants/config';


describe('user reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            errorRegisterStatus: false,
            errorLoginStatus: false,
            userData: JSON.parse(localStorage.getItem(config.storageKeys.user))
            || JSON.parse(sessionStorage.getItem(config.storageKeys.user))
            || null,
            user: null
        });
    });

    it('should handle user/AUTH_USER', () => {
        expect(reducer({
            errorLoginStatus: false
        }, {
            type: 'user/AUTH_USER'
        })).toEqual({
            errorLoginStatus: false
        });
    });

    it('should handle user/AUTH_USER_SUCCESS', () => {
        expect(reducer({
            errorLoginStatus: false,
            userData: null
        }, {
            type: 'user/AUTH_USER_SUCCESS',
            payload: {
                data: {
                    token: 'token'
                }
            },
            meta: {
                previousAction: {
                    payload: {
                        request: {
                            data: {
                                email: 'test@email.com'
                            }
                        }
                    }
                }
            }
        })).toEqual({
            errorLoginStatus: false,
            userData: {
                email: 'test@email.com',
                token: 'token'
            }
        });
    });

    it('should handle user/LOGOUT', () => {
        expect(reducer({
            userData: {
                email: 'test@email.com',
                token: 'token'
            }
        }, {
            type: 'user/LOGOUT',
        })).toEqual({
            userData: null
        });
    });

    it('should handle user/AUTH_USER_FAIL', () => {
        expect(reducer({
            errorLoginStatus: false
        }, {
            type: 'user/AUTH_USER_FAIL',
        })).toEqual({
            errorLoginStatus: true
        });

        expect(reducer({
            errorLoginStatus: true
        }, {
            type: 'user/AUTH_USER_FAIL',
        })).toEqual({
            errorLoginStatus: true
        });
    });

    it('should handle user/ADD_USER_FAIL', () => {
        expect(reducer({
            errorRegisterStatus: false
        }, {
            type: 'user/ADD_USER_FAIL',
        })).toEqual({
            errorRegisterStatus: true
        });

        expect(reducer({
            errorRegisterStatus: true
        }, {
            type: 'user/ADD_USER_FAIL',
        })).toEqual({
            errorRegisterStatus: true
        });
    });
});