// Basic (To be deprecated)
import add from './basic/add';
import clock from './basic/clock';
import cross from './basic/cross';
import facebook from './basic/facebook';
import logo from './basic/logo';
import noDriver from './basic/noDriver';
import order from './basic/order';
import question from './basic/question';

// Category
import AlertIcons from './alert';
import CommunicationIcons from './communication';
import ContentIcons from './content';
import EmojiIcons from './emoji';
import MapsIcons from './maps';
import PaymentsIcons from './payments';
import ToggleIcons from './toggle';
import VehiclesIcons from './vehicles';

// Others (To be deprecated)
import addContact from './others/addContact';
import androidLogo from './others/androidLogo';
import appleLogo from './others/appleLogo';
import arrow from './others/arrow';
import arrowDoubleSidedCurved from './others/arrowDoubleSidedCurved';
import arrowDoubleSidedDiagonal from './others/arrowDoubleSidedDiagonal';
import arrowHorizontal from './others/arrowHorizontal';
import blockedGroup from './others/blockedGroup';
import bolt from './others/bolt';
import calendar from './others/calendar';
import cameraOutline from './others/cameraOutline';
import clippedPaper from './others/clippedPaper';
import crossedParcelBox from './others/crossedParcelBox';
import directions from './others/directions';
import dottedArrow from './others/dottedArrow';
import download from './others/download';
import editSymbol from './others/editSymbol';
import facebookColored from './others/facebookColored';
import facebookOutlineCircle from './others/facebookOutlineCircle';
import googlePlusColored from './others/googlePlusColored';
import googlePlusOutline from './others/googlePlusOutline';
import group from './others/group';
import heartSymbol from './others/heartSymbol';
import key from './others/key';
import magnify from './others/magnify';
import magnifyingGlass from './others/magnifyingGlass';
import microphone from './others/microphone';
import networkParcelBox from './others/networkParcelBox';
import newspaper from './others/newspaper';
import notebookBookmark from './others/notebookBookmark';
import onOff from './others/onOff';
import paperClip from './others/paperClip';
import parcelBoxOutline from './others/parcelBoxOutline';
import percentage from './others/percentage';
import pin2 from './others/pin2';
import pinCircle from './others/pinCircle';
import pinOutline from './others/pinOutline';
import privacyIcon1 from './others/privacyIcon1';
import privacyIcon2 from './others/privacyIcon2';
import refresh from './others/refresh';
import restricted from './others/restricted';
import reversible from './others/reversible';
import saveDiagonal from './others/saveDiagonal';
import saveIcon from './others/saveIcon';
import send from './others/send';
import sendPaperPlane from './others/sendPaperPlane';
import settingsSliders from './others/settingsSliders';
import sound from './others/sound';
import spanner from './others/spanner';
import starAdd from './others/starAdd';
import starCircled from './others/starCircled';
import syncIcon from './others/syncIcon';
import textMessage from './others/textMessage';
import textMessage2 from './others/textMessage2';
import tickedParcelBox from './others/tickedParcelBox';
import zip from './others/zip';

const icons = Object.freeze({
  // Basic
  add,
  clock,
  cross,
  facebook,
  logo,
  noDriver,
  notificationBell: AlertIcons.alert, // TODO: DEPRECATED, for backward compatibility only
  order,
  pin: MapsIcons.pinFill, // TODO: DEPRECATED, for backward compatibility only
  question,
  settingsGear: ContentIcons.settings, // TODO: DEPRECATED, for backward compatibility only
  truckOutline: VehiclesIcons.truck, // TODO: DEPRECATED, for backward compatibility only

  // Alert
  ...AlertIcons,

  // Communication
  ...CommunicationIcons,

  // Content
  ...ContentIcons,

  // Emoji
  ...EmojiIcons,

  // Maps
  ...MapsIcons,

  // Payments
  ...PaymentsIcons,

  // Toggle
  ...ToggleIcons,

  // Vehicles
  ...VehiclesIcons,

  // Others
  addContact,
  androidLogo,
  appleLogo,
  arrow,
  arrowDoubleSidedCurved,
  arrowDoubleSidedDiagonal,
  arrowHorizontal,
  blockedGroup,
  bolt,
  calendar,
  cameraOutline,
  cart: VehiclesIcons.box, // TODO: DEPRECATED, for backward compatibility only
  clippedPaper,
  crossedParcelBox,
  directions,
  dottedArrow,
  download,
  editSymbol,
  facebookColored,
  facebookOutlineCircle,
  googlePlusColored,
  googlePlusOutline,
  group,
  heartSymbol,
  key,
  magnify,
  magnifyingGlass,
  microphone,
  momoCard: PaymentsIcons.momo, // TODO: DEPRECATED, for backward compatibility only
  networkParcelBox,
  newspaper,
  notebookBookmark,
  onOff,
  paperClip,
  parcelBoxOutline,
  percentage,
  phoneIcon1: CommunicationIcons.phone, // TODO: DEPRECATED, for backward compatibility only
  pin2,
  pinCircle,
  pinOutline,
  privacyIcon1,
  privacyIcon2,
  refresh,
  restricted,
  reversible,
  saveDiagonal,
  saveIcon,
  send,
  sendPaperPlane,
  settingsSliders,
  sound,
  spanner,
  // star,
  starAdd,
  starCircled,
  // starDotted,
  // starOutline,
  syncIcon,
  textMessage,
  textMessage2,
  tickMark: ToggleIcons.tick,
  tickMarkCircle: AlertIcons.success, // TODO: DEPRECATED, for backward compatibility only
  tickedParcelBox,
  warningCircle: AlertIcons.info, // TODO: DEPRECATED, for backward compatibility only
  zip,
});

export default icons;
