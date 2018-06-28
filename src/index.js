// for components, export them here
export { default as BaseApp } from './components/BaseApp';
export { default as Radio, RadioGroup } from './components/Radio';
export { default as AnimatedInput } from './components/Input';

// for icons, export them here
export { default as ErrorIcon } from './icons/ErrorIcon';
export { default as EyeOffIcon } from './icons/EyeOffIcon';
export { default as EyeOnIcon } from './icons/EyeOnIcon';

// TODO: Better to combine them with Input/AnimatedInput as exported components, not to export HOC
export { default as withAutoFocus } from './hoc/withAutoFocus';
export { default as withOnClickSelect } from './hoc/withOnClickSelect';
export { default as withOnClickToEnd } from './hoc/withOnClickToEnd';
