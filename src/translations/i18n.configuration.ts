import I18n from 'react-native-i18n'
import {english} from './english';
import {dutch} from './dutch';

I18n.fallbacks = true;

I18n.translations = {
    en: english,
    nl: dutch
};