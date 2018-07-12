// import React from 'react';
// import ReactDOM from 'react-dom';
// import renderer from 'react-test-renderer';
// import { shallow, mount, render } from 'enzyme';
// import RatingBar from './RatingBar';
//
// // full test
// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<RatingBar />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });
//
// // isolated rating bar test
// it('renders without crashing', () => {
//   shallow(<RatingBar />);
// });
//
// /*
// it('renders welcome message', () => {
//   const wrapper = shallow(<RatingBar />);
//   const welcome = <h2>Welcome to React</h2>;
//   // expect(wrapper.contains(welcome)).to.equal(true);
//   expect(wrapper.contains(welcome)).toEqual(true);
// }); */
//
// /*
// describe('Rating Bar', () => {
//   let ratingBar;
//   let onClick;
//
//   beforeEach(() => {
//     onClick = jest.fn();
//     ratingBar = mount(<RatingBar onClick={onClick} />);
//   });
//
//   it('RatingBar requires onClick prop', () => {
//     expect(ratingBar.props().onClick).toBeDefined();
//   });
//
//   it('RatingBar renders star', () => {
//     const star = ratingBar.find('star').first();
//     expect(star).toBeDefined();
//   });
//
// });
//
// */
//
// describe('Default size, no value, no action ', () => {
//   let ratingBar;
//
//   beforeEach(() => {
//     ratingBar = shallow(<RatingBar />);
//   });
//
//   it('RatingBar renders 5 stars', () => {
//     expect(ratingBar.find('Star').length).toEqual(5);
//   });
//
//   it('The value is 0', () => {
//     expect(ratingBar.state('value')).toEqual(0);
//   });
//
//   it('every star is empty', () => {
//     const stars = ratingBar.state('stars');
//     const emptyStar = { filling: 0, color: '#FFF7DF' };
//     for (let i = 0; i < stars.length; i++) {
//       expect(stars[i]).toEqual(emptyStar);
//     }
//   });
//
//   it('size is default', () => {
//     const style = ratingBar.state('style');
//     const targetStyle = { width: 20, height: 20 };
//     expect(style).toEqual(targetStyle);
//   });
// });
//
// describe('Default size, value = 3, no action ', () => {
//   let ratingBar;
//
//   beforeEach(() => {
//     ratingBar = shallow(<RatingBar value={3} />);
//   });
//
//   it('RatingBar renders 5 stars', () => {
//     expect(ratingBar.find('Star').length).toEqual(5);
//   });
//
//   it('The value is 3', () => {
//     expect(ratingBar.state('value')).toEqual(3);
//   });
//
//   it('first 3 stars are full, the other 2 are empty', () => {
//     const stars = ratingBar.state('stars');
//     const value = 3;
//     const emptyStar = { filling: 0, color: '#FFF7DF' };
//     const fullStar = { filling: 1, color: '#FFA02D' };
//     for (let i = 0; i < stars.length; i++) {
//       if (i < value) {
//         expect(stars[i]).toEqual(fullStar);
//       } else {
//         expect(stars[i]).toEqual(emptyStar);
//       }
//     }
//   });
//
//   it('size is default', () => {
//     const style = ratingBar.state('style');
//     const targetStyle = { width: 20, height: 20 };
//     expect(style).toEqual(targetStyle);
//   });
// });
//
// describe('Large size, value = 5, no action ', () => {
//   let ratingBar;
//
//   beforeEach(() => {
//     ratingBar = shallow(<RatingBar size="large" value={5} />);
//   });
//
//   it('RatingBar renders 5 stars', () => {
//     expect(ratingBar.find('Star').length).toBe(5);
//   });
//
//   it('The value is 5', () => {
//     expect(ratingBar.state('value')).toBe(5);
//   });
//
//   it('All 5 stars are full', () => {
//     const stars = ratingBar.state('stars');
//     const value = 5;
//     const emptyStar = { filling: 0, color: '#FFF7DF' };
//     const fullStar = { filling: 1, color: '#FFA02D' };
//     for (let i = 0; i < stars.length; i++) {
//       if (i < value) {
//         expect(stars[i]).toEqual(fullStar);
//       } else {
//         expect(stars[i]).toEqual(emptyStar);
//       }
//     }
//   });
//
//   it('size is large', () => {
//     const style = ratingBar.state('style');
//     const targetStyle = { width: 40, height: 40 };
//     expect(style).toEqual(targetStyle);
//   });
// });
//
// describe('Large size, no value, onClick', () => {
//   let ratingBar;
//   let onClick;
//   function handleClick(value) {
//     return value;
//   }
//   beforeEach(() => {
//     onClick = jest.fn();
//     onClick.mockImplementation(handleClick);
//     ratingBar = mount(<RatingBar onClick={onClick} size="large" />);
//   });
//
//   it('RatingBar renders 5 stars', () => {
//     expect(ratingBar.find('Star').length).toBe(5);
//   });
//
//   it('The value is 0', () => {
//     expect(ratingBar.state('value')).toBe(0);
//   });
//
//   it('All stars are empty', () => {
//     const stars = ratingBar.state('stars');
//     const value = 0;
//     const emptyStar = { filling: 0, color: '#FFF7DF' };
//     const fullStar = { filling: 1, color: '#FFA02D' };
//     for (let i = 0; i < stars.length; i++) {
//       if (i < value) {
//         expect(stars[i]).toEqual(fullStar);
//       } else {
//         expect(stars[i]).toEqual(emptyStar);
//       }
//     }
//   });
//
//   it('size is large', () => {
//     const style = ratingBar.state('style');
//     const targetStyle = { width: 40, height: 40 };
//     expect(style).toEqual(targetStyle);
//   });
//
//   it('RatingBar requires onClick prop', () => {
//     expect(ratingBar.props().onClick).toBeDefined();
//   });
//   // click simulate
//   // wrapper.find('button').simulate('click');
//   // expect(onButtonClick.calledOnce).to.equal(true);
//
//   it('click on a fourth star triggers onClick, the value in the state is set to 4, 4 full stars are displayed', () => {
//     const fourthStar = ratingBar.find('Star').at(3);
//     fourthStar.simulate('click');
//     expect(onClick).toHaveBeenCalled();
//     expect(ratingBar.state('value')).toEqual(4);
//
//     // check the displayed stars
//     const stars = ratingBar.state('stars');
//     const value = 4;
//     const emptyStar = { filling: 0, color: '#FFF7DF' };
//     const fullStar = { filling: 1, color: '#FFA02D' };
//     for (let i = 0; i < stars.length; i++) {
//       if (i < value) {
//         expect(stars[i]).toEqual(fullStar);
//       } else {
//         expect(stars[i]).toEqual(emptyStar);
//       }
//     }
//   });
//
//   it('click on a second star triggers onClick, the value in the state is set to 2, 2 full stars are displayed', () => {
//     const secondStar = ratingBar.find('Star').at(1);
//     secondStar.simulate('click');
//     expect(onClick).toHaveBeenCalled();
//     expect(ratingBar.state('value')).toEqual(2);
//
//     // check the displayed stars
//     const stars = ratingBar.state('stars');
//     const value = 2;
//     const emptyStar = { filling: 0, color: '#FFF7DF' };
//     const fullStar = { filling: 1, color: '#FFA02D' };
//     for (let i = 0; i < stars.length; i++) {
//       if (i < value) {
//         expect(stars[i]).toEqual(fullStar);
//       } else {
//         expect(stars[i]).toEqual(emptyStar);
//       }
//     }
//   });
// });
//
// describe('default size, value = 4, onClick', () => {
//   let ratingBar;
//   let onClick;
//   beforeEach(() => {
//     onClick = jest.fn();
//     ratingBar = mount(<RatingBar onClick={onClick} value={4} />);
//   });
//
//   it('RatingBar renders 5 stars', () => {
//     expect(ratingBar.find('Star').length).toBe(5);
//   });
//
//   it('The value is 4', () => {
//     expect(ratingBar.state('value')).toBe(4);
//   });
//
//   it('4 stars are full', () => {
//     const stars = ratingBar.state('stars');
//     const value = 4;
//     const emptyStar = { filling: 0, color: '#FFF7DF' };
//     const fullStar = { filling: 1, color: '#FFA02D' };
//     for (let i = 0; i < stars.length; i++) {
//       if (i < value) {
//         expect(stars[i]).toEqual(fullStar);
//       } else {
//         expect(stars[i]).toEqual(emptyStar);
//       }
//     }
//   });
//
//   it('size is default', () => {
//     const style = ratingBar.state('style');
//     const targetStyle = { width: 20, height: 20 };
//     expect(style).toEqual(targetStyle);
//   });
//
//   it('RatingBar requires onClick prop', () => {
//     expect(ratingBar.props().onClick).toBeDefined();
//   });
//   // click simulate
//   // wrapper.find('button').simulate('click');
//   // expect(onButtonClick.calledOnce).to.equal(true);
//
//   it('click on a fifth star triggers onClick, the value in the state is set to 5, 5 full stars displayed', () => {
//     const fifthStar = ratingBar.find('Star').at(4);
//     fifthStar.simulate('click');
//     expect(onClick).toHaveBeenCalled();
//     expect(ratingBar.state('value')).toEqual(5);
//
//     // check the displayed stars
//     const stars = ratingBar.state('stars');
//     const value = 5;
//     const emptyStar = { filling: 0, color: '#FFF7DF' };
//     const fullStar = { filling: 1, color: '#FFA02D' };
//     for (let i = 0; i < stars.length; i++) {
//       if (i < value) {
//         expect(stars[i]).toEqual(fullStar);
//       } else {
//         expect(stars[i]).toEqual(emptyStar);
//       }
//     }
//   });
//
//   it('click on a second star triggers onClick, the value in the state is set to 2, 2 full stars displayed', () => {
//     const secondStar = ratingBar.find('Star').at(1);
//     secondStar.simulate('click');
//     expect(onClick).toHaveBeenCalled(); // didn't actually test what got past to the onClick function
//     expect(ratingBar.state('value')).toEqual(2);
//
//     // check the displayed stars
//     const stars = ratingBar.state('stars');
//     const value = 2;
//     const emptyStar = { filling: 0, color: '#FFF7DF' };
//     const fullStar = { filling: 1, color: '#FFA02D' };
//     for (let i = 0; i < stars.length; i++) {
//       if (i < value) {
//         expect(stars[i]).toEqual(fullStar);
//       } else {
//         expect(stars[i]).toEqual(emptyStar);
//       }
//     }
//   });
// });
