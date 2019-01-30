import AlertIcons from '../alert';
import ArrowsIcons from '../arrows';
import CommunicationIcons from '../communication';
import ContentIcons from '../content';
import DateIcons from '../date';
import FilesIcons from '../files';
import ImagesIcons from '../images';
import LogoIcons from '../logo';
import MapsIcons from '../maps';
import PaymentsIcons from '../payments';
import ServicesIcons from '../services';
import SocialIcons from '../social';
import StatusIcons from '../status';
import ToggleIcons from '../toggle';
import UsersIcons from '../users';
import VehiclesIcons from '../vehicles';

// TODO: DEPRECATED, for backward compatibility only
const OthersIcons = Object.freeze({
  clock: DateIcons.recent,
  cross: ContentIcons.close,
  logo: LogoIcons.lalamoveFilled,
  noDriver: UsersIcons.userMarkColored,
  notificationBell: AlertIcons.alert,
  order: StatusIcons.defaultStatus,
  pin: MapsIcons.pinFill,
  settingsGear: ContentIcons.settings,
  truckOutline: VehiclesIcons.truck,
  addContact: UsersIcons.userAdd,
  androidLogo: LogoIcons.android,
  aMEXLogo: LogoIcons.amex,
  appleLogo: LogoIcons.apple,
  arrow: ArrowsIcons.dropdown,
  arrowDoubleSidedCurved: ArrowsIcons.reroute,
  arrowDoubleSidedDiagonal: ContentIcons.resize,
  arrowHorizontal: ArrowsIcons.horizontalArrow,
  blockedGroup: UsersIcons.groupBanned,
  bolt: PaymentsIcons.priorityFee,
  calendar: DateIcons.calendar,
  cameraOutline: ImagesIcons.camera,
  cart: VehiclesIcons.box,
  clippedPaper: PaymentsIcons.rates,
  crossedParcelBox: StatusIcons.cancelled,
  directions: MapsIcons.navigation,
  dollarCircle: FilesIcons.noteLink,
  dollarTorn: FilesIcons.receipt,
  dottedArrow: ArrowsIcons.horizontalArrowDotted,
  download: ContentIcons.download,
  editSymbol: ContentIcons.edit,
  facebookColored: SocialIcons.socialFacebookColored,
  facebookOutlineCircle: SocialIcons.socialFacebook,
  googlePlusColored: SocialIcons.socialGooglePlusColored,
  googlePlusOutline: SocialIcons.socialGooglePlus,
  group: UsersIcons.group,
  heartSymbol: SocialIcons.favourite,
  magnify: ContentIcons.details,
  magnifyingGlass: ContentIcons.search,
  masterCardLogo: LogoIcons.master,
  microphone: CommunicationIcons.voice,
  momoCard: PaymentsIcons.momo,
  networkParcelBox: StatusIcons.assigning,
  newspaper: CommunicationIcons.notification,
  notebookBookmark: CommunicationIcons.addressBook,
  paperClip: ContentIcons.link,
  parcelBoxOutline: StatusIcons.defaultStatus,
  percentage: PaymentsIcons.discount,
  phoneIcon1: CommunicationIcons.tel,
  pin2: MapsIcons.pin,
  pinCircle: MapsIcons.pinCircle,
  pinOutline: MapsIcons.pinOutline,
  privacyIcon1: StatusIcons.eyeOn,
  privacyIcon2: StatusIcons.eyeOff,
  // refresh,
  restricted: StatusIcons.ban,
  reversible: ArrowsIcons.reroute3,
  saveDiagonal: ContentIcons.collapse,
  saveIcon: ContentIcons.save,
  // send,
  sendPaperPlane: CommunicationIcons.send,
  settingsSliders: ContentIcons.slider,
  sound: StatusIcons.soundOn,
  spanner: ContentIcons.config,
  // star,
  starAdd: ServicesIcons.requests,
  starCircled: ContentIcons.starMark,
  // starOutline,
  syncIcon: ArrowsIcons.refresh,
  textMessage: CommunicationIcons.remark,
  textMessage2: CommunicationIcons.message,
  tickMark: ToggleIcons.tick,
  tickMarkCircle: AlertIcons.success,
  tickedParcelBox: StatusIcons.completed,
  visaLogo: LogoIcons.visa,
  warningCircle: AlertIcons.info,
  zip: FilesIcons.fileZip,
});

export default OthersIcons;
