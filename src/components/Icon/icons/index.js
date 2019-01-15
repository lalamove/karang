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
import OthersIcons from './others'; // TODO: DEPRECATED, for backward compatibility only

const icons = Object.freeze({
  ...OthersIcons, // TODO: DEPRECATED, for backward compatibility only
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
});

export default icons;
