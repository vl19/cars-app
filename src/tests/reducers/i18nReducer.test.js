import reducer from '../../reducers/i18n';
import { config } from '../../constants/config';


describe('i18n reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            locale: config.defaultLanguage,
            messages: null
        });
    });

    it('should handle i18n/SET_LANGUAGE', () => {
        expect(reducer({
            locale: config.defaultLanguage,
            messages: null
        }, {
            type: 'i18n/SET_LANGUAGE',
            payload: {
                locale: 'en',
                messages: [1, 2, 3]
            }
        })).toEqual({
            locale: 'en',
            messages: [1, 2, 3]
        });

        expect(reducer({
            locale: config.defaultLanguage,
            messages: null
        }, {
            type: 'i18n/SET_LANGUAGE',
            payload: {
                locale: '',
                messages: []
            }
        })).toEqual({
            locale: '',
            messages: []
        });

        expect(reducer({
            locale: config.defaultLanguage,
            messages: null
        }, {
            type: 'i18n/SET_LANGUAGE',
            payload: {
                locale: null,
                messages: null
            }
        })).toEqual({
            locale: null,
            messages: null
        });
    });
});