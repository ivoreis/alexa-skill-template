/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"] */
/* eslint object-shorthand: 0 */

import Alexa from 'alexa-sdk';
import TRANSLATIONS from './config/translations';

import AlexaDefaultIntents from './intents/alexa-defaults';

/*
import YourCustomIntents from './intents/your-custom-intents';
*/

const handlers = {
  ...AlexaDefaultIntents,
  /* ...YourCustomIntents */
};

exports.handler = (event, context, callback) => {
  const { APP_ID, APP_NAME } = process.env;
  const alexa = Alexa.handler(event, context, callback);
  alexa.appId = APP_ID;
  alexa.resources = TRANSLATIONS;
  alexa.dynamoDBTableName = APP_NAME;
  alexa.registerHandlers(handlers);
  alexa.execute();
};
