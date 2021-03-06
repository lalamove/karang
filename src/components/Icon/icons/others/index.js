import { alert, success, info } from '../alert';
import {
  dropdown,
  reroute,
  horizontalArrow,
  horizontalArrowDotted,
  reroute3,
  refresh,
} from '../arrows';
import {
  voice,
  notification,
  addressBook,
  tel,
  send,
  remark,
  message,
} from '../communication';
import {
  close,
  settings,
  resize,
  edit,
  details,
  search,
  link,
  collapse,
  save,
  slider,
  config,
  starMark,
} from '../content';
import { recent } from '../date';
import { noteLink, receipt, fileZip } from '../files';
import { camera } from '../images';
import { lalamoveFilled, android, amex, apple, master, visa } from '../logo';
import { navigation, pin, pinFilled } from '../maps';
import {
  priorityFee,
  rates,
  momo,
  discount,
  amexCard,
  cashHKD,
  cashHKDVertical,
  jcbCard,
  wallet,
} from '../payments';
import { requests } from '../services';
import {
  socialFacebookColored,
  socialFacebook,
  socialGooglePlusColored,
  socialGooglePlus,
  favourite,
} from '../social';
import {
  defaultStatus,
  cancelled,
  assigning,
  eyeOn,
  eyeOff,
  ban,
  soundOn,
  completed,
} from '../status';
import { tick } from '../toggle';
import { userMarkColored, userAdd, groupBanned } from '../users';
import { truck, box } from '../vehicles';

// TODO: DEPRECATED, for backward compatibility only
export {
  recent as clock,
  close as cross,
  lalamoveFilled as logo,
  userMarkColored as noDriver,
  alert as notificationBell,
  defaultStatus as order,
  settings as settingsGear,
  truck as truckOutline,
  userAdd as addContact,
  android as androidLogo,
  amex as aMEXLogo,
  apple as appleLogo,
  dropdown as arrow,
  reroute as arrowDoubleSidedCurved,
  resize as arrowDoubleSidedDiagonal,
  horizontalArrow as arrowHorizontal,
  groupBanned as blockedGroup,
  priorityFee as bolt,
  camera as cameraOutline,
  box as cart,
  rates as clippedPaper,
  cancelled as crossedParcelBox,
  navigation as directions,
  noteLink as dollarCircle,
  receipt as dollarTorn,
  horizontalArrowDotted as dottedArrow,
  edit as editSymbol,
  socialFacebookColored as facebookColored,
  socialFacebook as facebookOutlineCircle,
  socialGooglePlusColored as googlePlusColored,
  socialGooglePlus as googlePlusOutline,
  favourite as heartSymbol,
  details as magnify,
  search as magnifyingGlass,
  master as masterCardLogo,
  voice as microphone,
  momo as momoCard,
  assigning as networkParcelBox,
  notification as newspaper,
  addressBook as notebookBookmark,
  link as paperClip,
  defaultStatus as parcelBoxOutline,
  discount as percentage,
  tel as phoneIcon1,
  pin as pin2,
  eyeOn as privacyIcon1,
  eyeOff as privacyIcon2,
  ban as restricted,
  reroute3 as reversible,
  collapse as saveDiagonal,
  save as saveIcon,
  send as sendPaperPlane,
  slider as settingsSliders,
  soundOn as sound,
  config as spanner,
  requests as starAdd,
  starMark as starCircled,
  refresh as syncIcon,
  remark as textMessage,
  message as textMessage2,
  tick as tickMark,
  success as tickMarkCircle,
  completed as tickedParcelBox,
  visa as visaLogo,
  info as warningCircle,
  fileZip as zip,
  pinFilled as pinFill,
  amexCard as aMEXCard,
  cashHKD as cashOutline,
  cashHKDVertical as cashVertical,
  jcbCard as jCBCard,
  wallet as walletOutline,
};
