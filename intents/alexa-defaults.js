/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"] */
/* eslint object-shorthand: 0 */

import INTENTS from '../config/default-intents';
import MESSAGES from '../config/messages';
import PREDICATES from '../config/predicates';

export default {
  [INTENTS.HELP]: function () {
    this.emit(PREDICATES.ASK,
      this.t(MESSAGES.HELP_REPROMPT),
      this.t(MESSAGES.HELP_REPROMPT),
    );
  },
  [INTENTS.STOP]: function () {
    this.emit(PREDICATES.TELL, this.t(MESSAGES.STOP));
  },
  [INTENTS.CANCEL]: function () {
    this.emit(PREDICATES.TELL, this.t(MESSAGES.CANCEL));
  },
  [INTENTS.LAUNCH]: function () {
    this.emit(INTENTS.HELP);
  },
  [INTENTS.UNHANDLED]: function () {
    this.emit(INTENTS.HELP);
  },
};
