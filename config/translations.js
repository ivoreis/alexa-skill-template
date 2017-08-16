import MESSAGES from './messages';

/*
  Here you can define translations for your app.
  Currently alexa supports i18nnext and sprintf interpolation.

  Valid examples are:
  RANDOM1: `Hello my name is {{name}}` - Valid i18nnext interpolation
  RANDOM2: `Here is the first letter %s` - Valid sprintf interpolation

  The call to the above strings would be something like:

  this.t('MESSAGES.RANDOM1', { name: 'John' })
  this.t('MESSAGES.RANDOM2', 'a')

*/

export default {
  en: {
    translation: {
      [MESSAGES.SKILL_NAME]: process.env.APP_NAME,
      [MESSAGES.HELP]: `Here are some commands you can use...
        What can I help you with?`,
      [MESSAGES.HELP_REPROMPT]: 'What can I help you with?',
      [MESSAGES.STOP]: 'Goodbye!',
      [MESSAGES.CANCEL]: 'Goodbye!',
    },
  },
};
