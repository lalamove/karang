// Basic (To be deprecated)
import add from './basic/add';
import clock from './basic/clock';
import cross from './basic/cross';
import noDriver from './basic/noDriver';
import question from './basic/question';

// Category
import AlertIcons from './alert';
import ArrowsIcons from './arrows';
import CommunicationIcons from './communication';
import ContentIcons from './content';
import DateIcons from './date';
import EmojiIcons from './emoji';
import FilesIcons from './files';
import LogoIcons from './logo';
import MapsIcons from './maps';
import PaymentsIcons from './payments';
import SocialIcons from './social';
import StatusIcons from './status';
import ToggleIcons from './toggle';
import UsersIcons from './users';
import VehiclesIcons from './vehicles';

// Others (To be deprecated)
import arrowDoubleSidedCurved from './others/arrowDoubleSidedCurved';
import arrowDoubleSidedDiagonal from './others/arrowDoubleSidedDiagonal';
import arrowHorizontal from './others/arrowHorizontal';
import bolt from './others/bolt';
import calendar from './others/calendar';
import cameraOutline from './others/cameraOutline';
import clippedPaper from './others/clippedPaper';
import directions from './others/directions';
import dottedArrow from './others/dottedArrow';
import download from './others/download';
import editSymbol from './others/editSymbol';
import facebookColored from './others/facebookColored';
import facebookOutlineCircle from './others/facebookOutlineCircle';
import googlePlusColored from './others/googlePlusColored';
import googlePlusOutline from './others/googlePlusOutline';
import heartSymbol from './others/heartSymbol';
import key from './others/key';
import magnify from './others/magnify';
import magnifyingGlass from './others/magnifyingGlass';
import microphone from './others/microphone';
import newspaper from './others/newspaper';
import notebookBookmark from './others/notebookBookmark';
import paperClip from './others/paperClip';
import refresh from './others/refresh';
import restricted from './others/restricted';
import reversible from './others/reversible';
import saveDiagonal from './others/saveDiagonal';
import saveIcon from './others/saveIcon';
import send from './others/send';
import sendPaperPlane from './others/sendPaperPlane';
import settingsSliders from './others/settingsSliders';
import spanner from './others/spanner';
import starAdd from './others/starAdd';
import starCircled from './others/starCircled';
import syncIcon from './others/syncIcon';
import textMessage from './others/textMessage';
import textMessage2 from './others/textMessage2';

const icons = Object.freeze({
  // Basic
  add,
  clock,
  cross,
  // facebook,
  logo: LogoIcons.lalamoveFilled, // TODO: DEPRECATED, for backward compatibility only
  noDriver,
  notificationBell: AlertIcons.alert, // TODO: DEPRECATED, for backward compatibility only
  order: StatusIcons.defaultStatus,
  pin: MapsIcons.pinFill, // TODO: DEPRECATED, for backward compatibility only
  question,
  settingsGear: ContentIcons.settings, // TODO: DEPRECATED, for backward compatibility only
  truckOutline: VehiclesIcons.truck, // TODO: DEPRECATED, for backward compatibility only

  // Category
  ...AlertIcons,
  ...ArrowsIcons,
  ...CommunicationIcons,
  ...ContentIcons,
  ...DateIcons,
  ...EmojiIcons,
  ...FilesIcons,
  ...LogoIcons,
  ...MapsIcons,
  ...PaymentsIcons,
  ...SocialIcons,
  ...StatusIcons,
  ...ToggleIcons,
  ...UsersIcons,
  ...VehiclesIcons,

  // Others
  addContact: UsersIcons.userAdd, // TODO: DEPRECATED, for backward compatibility only
  androidLogo: LogoIcons.android, // TODO: DEPRECATED, for backward compatibility only
  aMEXLogo: LogoIcons.amex, // TODO: DEPRECATED, for backward compatibility only
  appleLogo: LogoIcons.apple, // TODO: DEPRECATED, for backward compatibility only
  arrow: ArrowsIcons.dropdown, // TODO: DEPRECATED, for backward compatibility only
  arrowDoubleSidedCurved,
  arrowDoubleSidedDiagonal,
  arrowHorizontal,
  blockedGroup: UsersIcons.groupBanned, // TODO: DEPRECATED, for backward compatibility only
  bolt,
  calendar,
  cameraOutline,
  cart: VehiclesIcons.box, // TODO: DEPRECATED, for backward compatibility only
  clippedPaper,
  crossedParcelBox: StatusIcons.cancelled, // TODO: DEPRECATED, for backward compatibility only
  directions,
  dollarCircle: FilesIcons.noteLink, // TODO: DEPRECATED, for backward compatibility only
  dollarTorn: FilesIcons.receipt, // TODO: DEPRECATED, for backward compatibility only
  dottedArrow,
  download,
  editSymbol,
  facebookColored,
  facebookOutlineCircle,
  googlePlusColored,
  googlePlusOutline,
  group: UsersIcons.group, // TODO: DEPRECATED, for backward compatibility only
  heartSymbol,
  key,
  magnify,
  magnifyingGlass,
  masterCardLogo: LogoIcons.master, // TODO: DEPRECATED, for backward compatibility only
  microphone,
  momoCard: PaymentsIcons.momo, // TODO: DEPRECATED, for backward compatibility only
  networkParcelBox: StatusIcons.assigning, // TODO: DEPRECATED, for backward compatibility only
  newspaper,
  notebookBookmark,
  // onOff,
  paperClip,
  parcelBoxOutline: StatusIcons.defaultStatus, // TODO: DEPRECATED, for backward compatibility only
  percentage: PaymentsIcons.discount, // TODO: DEPRECATED, for backward compatibility only
  phoneIcon1: CommunicationIcons.phone, // TODO: DEPRECATED, for backward compatibility only
  pin2: MapsIcons.pin, // TODO: DEPRECATED, for backward compatibility only
  pinCircle: MapsIcons.pinCircle, // TODO: DEPRECATED, for backward compatibility only
  pinOutline: MapsIcons.pinOutline, // TODO: DEPRECATED, for backward compatibility only
  privacyIcon1: StatusIcons.eyeOn, // TODO: DEPRECATED, for backward compatibility only
  privacyIcon2: StatusIcons.eyeOff, // TODO: DEPRECATED, for backward compatibility only
  refresh,
  restricted,
  reversible,
  saveDiagonal,
  saveIcon,
  send,
  sendPaperPlane,
  settingsSliders,
  sound: StatusIcons.soundOn, // TODO: DEPRECATED, for backward compatibility only
  spanner,
  // star,
  starAdd,
  starCircled,
  // starDotted,
  // starOutline,
  syncIcon,
  textMessage,
  textMessage2,
  tickMark: ToggleIcons.tick, // TODO: DEPRECATED, for backward compatibility only
  tickMarkCircle: AlertIcons.success, // TODO: DEPRECATED, for backward compatibility only
  tickedParcelBox: StatusIcons.completed, // TODO: DEPRECATED, for backward compatibility only
  visaLogo: LogoIcons.visa, // TODO: DEPRECATED, for backward compatibility only
  warningCircle: AlertIcons.info, // TODO: DEPRECATED, for backward compatibility only
  zip: FilesIcons.zip, // TODO: DEPRECATED, for backward compatibility only
});

export default icons;
