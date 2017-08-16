/* eslint import/prefer-default-export: 0 */

import PREDICATES from '../config/predicates';

function performAction({ action, slot, speech, title, intent, imageObj, save }) {
  switch (action) {
    case PREDICATES.TELL:
    case PREDICATES.TELL_WITH_LINK_ACCOUNT_CARD:
    case PREDICATES.ASK_WITH_LINK_ACCOUNT_CARD:
      this.emit(action, speech);
      break;
    case PREDICATES.ASK:
      this.emit(action, speech, speech);
      break;
    case PREDICATES.ASK_WITH_CARD:
      this.emit(action, speech, speech, title, speech, imageObj);
      break;
    case PREDICATES.TELL_WITH_CARD:
      this.emit(action, speech, title, speech, imageObj);
      break;
    case PREDICATES.CONFIRM_INTENT:
      this.emit(action, speech, speech, intent);
      break;
    case PREDICATES.CONFIRM_INTENT_WITH_CARD:
      this.emit(action, speech, speech, title, speech, intent, imageObj);
      break;
    case PREDICATES.ELICIT:
    case PREDICATES.CONFIRM:
      this.emit(action, slot, speech, speech, intent);
      break;
    case PREDICATES.ELICIT_WITH_CARD:
    case PREDICATES.CONFIRM_WITH_CARD:
      this.emit(action, slot, speech, speech, title, speech, intent, imageObj);
      break;
    case PREDICATES.SAVE:
      this.emit(action, save);
      break;
    case PREDICATES.DELEGATE:
      this.emit(action, intent);
      break;
    default:
      this.emit(action);
  }
}

export default {
  performAction: context =>
    performAction.bind(context),
};
