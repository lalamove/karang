// Basic (To be deprecated)
import noDriver from './basic/noDriver';
import question from './basic/question';

// Category
import AlertIcons from './alert';
import ArrowsIcons from './arrows';
import CommunicationIcons from './communication';
import ContentIcons from './content';
import DateIcons from './date';
import DevicesIcons from './devices';
import EmojiIcons from './emoji';
import FilesIcons from './files';
import ImagesIcons from './images';
import LogoIcons from './logo';
import MapsIcons from './maps';
import PaymentsIcons from './payments';
import SecurityIcons from './security';
import ServicesIcons from './services';
import SocialIcons from './social';
import StatusIcons from './status';
import ToggleIcons from './toggle';
import UsersIcons from './users';
import VehiclesIcons from './vehicles';

// Others (To be deprecated)
import arrowHorizontal from './others/arrowHorizontal';
import dottedArrow from './others/dottedArrow';
import starCircled from './others/starCircled';

const icons = Object.freeze({
  // Basic
  // add,
  clock: DateIcons.recent,
  cross: ContentIcons.close,
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
  ...DevicesIcons,
  ...EmojiIcons,
  ...FilesIcons,
  ...ImagesIcons,
  ...LogoIcons,
  ...MapsIcons,
  ...PaymentsIcons,
  ...SecurityIcons,
  ...ServicesIcons,
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
  arrowDoubleSidedCurved: ArrowsIcons.reroute, // TODO: DEPRECATED, for backward compatibility only
  arrowDoubleSidedDiagonal: ContentIcons.resize,
  arrowHorizontal,
  blockedGroup: UsersIcons.groupBanned, // TODO: DEPRECATED, for backward compatibility only
  bolt: PaymentsIcons.priorityFee, // TODO: DEPRECATED, for backward compatibility only
  calendar: DateIcons.calendar, // TODO: DEPRECATED, for backward compatibility only
  cameraOutline: ImagesIcons.camera, // TODO: DEPRECATED, for backward compatibility only
  cart: VehiclesIcons.box, // TODO: DEPRECATED, for backward compatibility only
  clippedPaper: PaymentsIcons.rates, // TODO: DEPRECATED, for backward compatibility only
  crossedParcelBox: StatusIcons.cancelled, // TODO: DEPRECATED, for backward compatibility only
  directions: MapsIcons.navigation, // TODO: DEPRECATED, for backward compatibility only
  dollarCircle: FilesIcons.noteLink, // TODO: DEPRECATED, for backward compatibility only
  dollarTorn: FilesIcons.receipt, // TODO: DEPRECATED, for backward compatibility only
  dottedArrow,
  download: ContentIcons.download,
  editSymbol: ContentIcons.edit,
  facebookColored: SocialIcons.socialFacebookColored, // TODO: DEPRECATED, for backward compatibility only
  facebookOutlineCircle: SocialIcons.socialFacebook, // TODO: DEPRECATED, for backward compatibility only
  googlePlusColored: SocialIcons.socialGooglePlusColored, // TODO: DEPRECATED, for backward compatibility only
  googlePlusOutline: SocialIcons.socialGooglePlus, // TODO: DEPRECATED, for backward compatibility only
  group: UsersIcons.group, // TODO: DEPRECATED, for backward compatibility only
  heartSymbol: SocialIcons.favourite, // TODO: DEPRECATED, for backward compatibility only
  // key: SecurityIcons.key,
  magnify: ContentIcons.details,
  magnifyingGlass: ContentIcons.search,
  masterCardLogo: LogoIcons.master, // TODO: DEPRECATED, for backward compatibility only
  microphone: CommunicationIcons.voice, // TODO: DEPRECATED, for backward compatibility only
  momoCard: PaymentsIcons.momo, // TODO: DEPRECATED, for backward compatibility only
  networkParcelBox: StatusIcons.assigning, // TODO: DEPRECATED, for backward compatibility only
  newspaper: CommunicationIcons.notification, // TODO: DEPRECATED, for backward compatibility only
  notebookBookmark: CommunicationIcons.addressBook, // TODO: DEPRECATED, for backward compatibility only
  // onOff,
  paperClip: ContentIcons.link,
  parcelBoxOutline: StatusIcons.defaultStatus, // TODO: DEPRECATED, for backward compatibility only
  percentage: PaymentsIcons.discount, // TODO: DEPRECATED, for backward compatibility only
  phoneIcon1: CommunicationIcons.tel, // TODO: DEPRECATED, for backward compatibility only
  pin2: MapsIcons.pin, // TODO: DEPRECATED, for backward compatibility only
  pinCircle: MapsIcons.pinCircle, // TODO: DEPRECATED, for backward compatibility only
  pinOutline: MapsIcons.pinOutline, // TODO: DEPRECATED, for backward compatibility only
  privacyIcon1: StatusIcons.eyeOn, // TODO: DEPRECATED, for backward compatibility only
  privacyIcon2: StatusIcons.eyeOff, // TODO: DEPRECATED, for backward compatibility only
  // refresh,
  restricted: StatusIcons.ban, // TODO: DEPRECATED, for backward compatibility only
  reversible: ArrowsIcons.reroute3, // TODO: DEPRECATED, for backward compatibility only
  saveDiagonal: ContentIcons.collapse,
  saveIcon: ContentIcons.save,
  // send,
  sendPaperPlane: CommunicationIcons.send, // TODO: DEPRECATED, for backward compatibility only
  settingsSliders: ContentIcons.slider, // TODO: DEPRECATED, for backward compatibility only
  sound: StatusIcons.soundOn, // TODO: DEPRECATED, for backward compatibility only
  spanner: ContentIcons.config,
  // star,
  starAdd: ServicesIcons.requests,
  starCircled, // content/starMark
  // starDotted,
  // starOutline,
  syncIcon: ArrowsIcons.refresh, // TODO: DEPRECATED, for backward compatibility only
  textMessage: CommunicationIcons.remark, // TODO: DEPRECATED, for backward compatibility only
  textMessage2: CommunicationIcons.message, // TODO: DEPRECATED, for backward compatibility only
  tickMark: ToggleIcons.tick, // TODO: DEPRECATED, for backward compatibility only
  tickMarkCircle: AlertIcons.success, // TODO: DEPRECATED, for backward compatibility only
  tickedParcelBox: StatusIcons.completed, // TODO: DEPRECATED, for backward compatibility only
  visaLogo: LogoIcons.visa, // TODO: DEPRECATED, for backward compatibility only
  warningCircle: AlertIcons.info, // TODO: DEPRECATED, for backward compatibility only
  zip: FilesIcons.fileZip, // TODO: DEPRECATED, for backward compatibility only
});

export default icons;
