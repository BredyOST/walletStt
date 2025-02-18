/**
 * @addBannerToProfile - кнопка добавления банера в профиле
 * @addLogoToBanner - кнопка добавления баннера в профиле пользователя
 * @addGeoToProfile - кнопка добавления
 * @trashAddProfile - кнопка кдаления добавленной геопозиции
 * @addCurrentGeoToProfile - кнопка добавления текущей записи гео из инпута
 * @tabsProfile - кнопка табов в рофиле
 * @simpleButton простая кнопка
 * */
import {ReactElement} from "react";


export enum IndicatorsForUi {
    'addBannerToProfile' = 'addBannerToProfile',
    'addLogoToProfile' = 'addLogoToProfile',
    'addGeoToProfile' = 'addGeoToProfile',
    'trashAddProfile' = 'trashAddProfile',
    'addCurrentGeoToProfile' = 'addCurrentGeoToProfile',
    'tabsProfile' = 'tabsProfile',
    'simpleButton' = 'simpleButton',
    'withoutStyle' = 'withoutStyle',
    'sttBonus' = 'sttBonus',
}

/**
 * @addProfileName - ввод имени
 * @addProfileSiteUrl - ссылка на свой сайт
 * @addProfileHobbies - ввод хобби
 * @addProfileHash - хеши
 * @addGeoLocation - добавить геолокацию
 * @sttBonus - добавить stt bonus
 * @search - поиск рилсов
 * */
export enum InputsIndicators {
    'addProfileName' = 'addProfileName',
    'addProfileSiteUrl' = 'addProfileSiteUrl',
    'addProfileHobbies' = 'addProfileHobbies',
    'addProfileHash' = 'addProfileHash',
    'addGeoLocation' = 'addGeoLocation',
    'addSttBonus'='addSttBonus',
    'addSearch'='addSearch',
}

/** для селектов*/
export enum SelectsIndicators {
    'address' = 'address',
    'language' = 'language',
}

/**
 * для отрисовки инпутов в форме добвления профиля
 * */
export interface IInputsForFormAddProfile {
    id: number;
    label: string;
    indicator: InputsIndicators;
    name: string;
}

/**
 * для отрисовки кнопок добавления логотипа и баннера в форме добвления профиля
 * */
export interface IButtonsForFormAddProfile {
    id: number;
    indicator: IndicatorsForUi;
    urlSvg: ReactElement;
    alt: string;
    name: string;
}


export interface TabsOptions {
    id: number;
    label: number;
}


/**
 * для чекбокса инкогнито
 * */
export interface CheckBoxIncognito {
    id: 1;
    label: 'incognito';
}