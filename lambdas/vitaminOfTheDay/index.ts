"use strict";

import { STARTUP_VITAMINS, QuoteModel } from "./startup-vitamins.data";

// sets up dependencies
const Alexa = require('ask-sdk-core');
const i18n = require('i18next');
// core functionality for fact skill
const GetNewFactHandler = {
    canHandle(handlerInput: any) {
        const request = handlerInput.requestEnvelope.request;
        // checks request type
        return request.type === 'LaunchRequest'
            || (request.type === 'IntentRequest'
                && request.intent.name === 'GetNewVODIntent');
    },
    handle(handlerInput: any) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        // gets a random fact by assigning an array to the variable
        // the random item from the array will be selected by the i18next library
        // the i18next library is set up in the Request Interceptor
        const vitamin: QuoteModel = requestAttributes.t('STARTUP_VITAMINS');
        // concatenates a standard message with the random fact
        const speakOutput = 'Hello Zachary, ' + requestAttributes.t('GET_VITAMINS_MESSAGE') + vitamin;
        return handlerInput.responseBuilder
            .speak(speakOutput)
            // Uncomment the next line if you want to keep the session open so you can
            // ask for another fact without first re-opening the skill
            // .reprompt(requestAttributes.t('HELP_REPROMPT'))
            // TODO see what second param is
            .withSimpleCard(requestAttributes.t('SKILL_NAME'), vitamin)
            .getResponse();
    },
};
const HelpHandler = {
    canHandle(handlerInput: any) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest'
            && request.intent.name === 'AMAZON.HelpIntent';
    },
    handle(handlerInput: any) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        return handlerInput.responseBuilder
            .speak(requestAttributes.t('HELP_MESSAGE'))
            .reprompt(requestAttributes.t('HELP_REPROMPT'))
            .getResponse();
    },
};
const FallbackHandler = {
    // The FallbackIntent can only be sent in those locales which support it,
    // so this handler will always be skipped in locales where it is not supported.
    canHandle(handlerInput: any) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest'
            && request.intent.name === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput: any) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        return handlerInput.responseBuilder
            .speak(requestAttributes.t('FALLBACK_MESSAGE'))
            .reprompt(requestAttributes.t('FALLBACK_REPROMPT'))
            .getResponse();
    },
};
const ExitHandler = {
    canHandle(handlerInput: any) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest'
            && (request.intent.name === 'AMAZON.CancelIntent'
                || request.intent.name === 'AMAZON.StopIntent');
    },
    handle(handlerInput: any) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        return handlerInput.responseBuilder
            .speak(requestAttributes.t('STOP_MESSAGE'))
            .getResponse();
    },
};
const SessionEndedRequestHandler = {
    canHandle(handlerInput: any) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'SessionEndedRequest';
    },
    handle(handlerInput: any) {
        console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request.reason}`);
        return handlerInput.responseBuilder.getResponse();
    },
};
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput: any, error: any) {
        console.log(`Error handled: ${error.message}`);
        console.log(`Error stack: ${error.stack}`);
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        return handlerInput.responseBuilder
            .speak(requestAttributes.t('ERROR_MESSAGE'))
            .reprompt(requestAttributes.t('ERROR_MESSAGE'))
            .getResponse();
    },
};
const LocalizationInterceptor = {
    process(handlerInput: any) {
        // Gets the locale from the request and initializes i18next.
        const localizationClient = i18n.init({
            lng: handlerInput.requestEnvelope.request.locale,
            resources: languageStrings,
            returnObjects: true
        });
        // Creates a localize function to support arguments.
        localizationClient.localize = function localize() {
            // gets arguments through and passes them to
            // i18next using sprintf to replace string placeholders
            // with arguments.
            const args = arguments;
            const value = i18n.t(...args);
            // If an array is used then a random value is selected
            if (Array.isArray(value)) {
                return value[Math.floor(Math.random() * value.length)];
            }
            return value;
        };
        // this gets the request attributes and save the localize function inside
        // it to be used in a handler by calling requestAttributes.t(STRING_ID, [args...])
        const attributes = handlerInput.attributesManager.getRequestAttributes();
        attributes.t = function translate(...args: any) {
            return localizationClient.localize(...args);
        };
    }
};
const skillBuilder = Alexa.SkillBuilders.custom();
exports.handler = skillBuilder
    .addRequestHandlers(GetNewFactHandler, HelpHandler, ExitHandler, FallbackHandler, SessionEndedRequestHandler)
    .addRequestInterceptors(LocalizationInterceptor)
    .addErrorHandlers(ErrorHandler)
    .withCustomUserAgent('sample/basic-fact/v2')
    .lambda();


const startupVitamin = (vitamin: QuoteModel): string => {
    return `Your startup vitamin is by ${vitamin.qoutee}${vitamin.company ? ' from ' + vitamin.company : ''}, whose ${vitamin.family} quote is, "${vitamin.quote}"`
}

const enData = {
    translation: {
        SKILL_NAME: 'Vitamins of the day',
        GET_VITAMINS_MESSAGE: 'Here are your vitamins of the day: ',
        HELP_MESSAGE: 'You can say tell me my vitamins of the day, or, you can say exit... What can I help you with?',
        HELP_REPROMPT: 'What can I help you with?',
        FALLBACK_MESSAGE: 'The Vitamins of the day skill can\'t help you with that. What can I help you with?',
        FALLBACK_REPROMPT: 'What can I help you with?',
        ERROR_MESSAGE: 'Sorry, an error occurred.',
        STOP_MESSAGE: 'Goodbye!',
        STARTUP_VITAMINS: STARTUP_VITAMINS.map(vitamin => {return startupVitamin(vitamin)})
    },
};
// constructs i18n and l10n data structure
const languageStrings = {
    'en': enData
};
