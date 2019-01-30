import currentLocation from './currentLocation';
import distanceLine from './distanceLine';
import distancePin from './distancePin';
import dropoff from './dropoff';
import midstop from './midstop';
import navigation from './navigation';
import path from './path';
import pickup from './pickup';
import pin from './pin';
import pinCircle from './pinCircle';
import pinFilled from './pinFilled';
import pinOutline from './pinOutline';
import userToDropOff from './userToDropOff';
import userToPickUp from './userToPickUp';
import vehicleToDropOff from './vehicleToDropOff';

const MapsIcons = {
  currentLocation,
  distanceLine,
  distancePin,
  dropoff,
  midstop,
  navigation,
  path,
  pickup,
  pin,
  pinCircle,
  pinFill: pinFilled, // TODO: DEPRECATED, for backward compatibility only
  pinFilled,
  pinOutline,
  userToDropOff,
  userToPickUp,
  vehicleToDropOff,
};

export default MapsIcons;
