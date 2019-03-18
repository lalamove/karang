import React from 'react';
import ReactDOM from 'react-dom';
// import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import Rating from '../index';

// full test
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Rating />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// isolated rating bar test
it('renders without crashing', () => {
  shallow(<Rating />);
});

describe('Rating Bar', () => {
  let rating;
  let onClick;

  beforeEach(() => {
    onClick = jest.fn();
    rating = mount(<Rating onClick={onClick} />);
  });

  it('Rating requires onClick prop', () => {
    expect(rating.props().onClick).toBeDefined();
  });

  it('Rating renders star', () => {
    const star = rating.find('star').first();
    expect(star).toBeDefined();
  });

  it('Rating renders 5 stars', () => {
    expect(rating.find('Star').length).toEqual(5);
  });
});

describe('Default size, no value, no action ', () => {
  let rating;

  beforeEach(() => {
    rating = shallow(<Rating />);
    rating.instance();
  });

  it('Rating renders 5 stars', () => {
    expect(rating.find('Star').length).toEqual(5);
  });

  it('The value is 0', () => {
    expect(rating.state('value')).toEqual(0);
  });

  it('The hoverValue is 0', () => {
    expect(rating.state('hoverValue')).toEqual(0);
  });

  // it('every star is empty (to fail)', () => {
  //   const starIcons = rating.find('StarIcon');
  //   expect(starIcons.length).toEqual(5);
  // stars.reduce((retVal, star) => retVal = (star.find('StarIcon').color === offWhite) ? );
  // const emptyStar = { filling: 0, color: '#FFF7DF' };
  // for (let i = 0; i < stars.length; i++) {
  //   expect(stars[i]).toEqual(emptyStar);
  // }

  // const filteredStars = starIcons.filter(icon => {
  //   console.log(icon.props());
  //   return icon.prop('color') === offWhite;
  // });
  // expect(filteredStars.length).toEqual(5);
  // });

  // it('size is default', () => {
  //   const style = rating.state('style');
  //   const targetStyle = { width: 20, height: 20 };
  //   expect(style).toEqual(targetStyle);
  // });
});
// describe('Default size, value = 3, no action ', () => {
//   let rating;
//
//   beforeEach(() => {
//     rating = shallow(<Rating value={3} />);
//   });
//
//   it('Rating renders 5 stars', () => {
//     expect(rating.find('Star').length).toEqual(5);
//   });
//
//   it('The value is 3', () => {
//     expect(rating.state('value')).toEqual(3);
//   });
//
//   it('first 3 stars are full, the other 2 are empty', () => {
//     const stars = rating.state('stars');
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
//     const style = rating.state('style');
//     const targetStyle = { width: 20, height: 20 };
//     expect(style).toEqual(targetStyle);
//   });
// });
//
// describe('Large size, value = 5, no action ', () => {
//   let rating;
//
//   beforeEach(() => {
//     rating = shallow(<Rating size="large" value={5} />);
//   });
//
//   it('Rating renders 5 stars', () => {
//     expect(rating.find('Star').length).toBe(5);
//   });
//
//   it('The value is 5', () => {
//     expect(rating.state('value')).toBe(5);
//   });
//
//   it('All 5 stars are full', () => {
//     const stars = rating.state('stars');
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
//     const style = rating.state('style');
//     const targetStyle = { width: 40, height: 40 };
//     expect(style).toEqual(targetStyle);
//   });
// });
//
// describe('Large size, no value, onClick', () => {
//   let rating;
//   let onClick;
//   function handleClick(value) {
//     return value;
//   }
//   beforeEach(() => {
//     onClick = jest.fn();
//     onClick.mockImplementation(handleClick);
//     rating = mount(<Rating onClick={onClick} size="large" />);
//   });
//
//   it('Rating renders 5 stars', () => {
//     expect(rating.find('Star').length).toBe(5);
//   });
//
//   it('The value is 0', () => {
//     expect(rating.state('value')).toBe(0);
//   });
//
//   it('All stars are empty', () => {
//     const stars = rating.state('stars');
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
//     const style = rating.state('style');
//     const targetStyle = { width: 40, height: 40 };
//     expect(style).toEqual(targetStyle);
//   });
//
//   it('Rating requires onClick prop', () => {
//     expect(rating.props().onClick).toBeDefined();
//   });
//   // click simulate
//   // wrapper.find('button').simulate('click');
//   // expect(onButtonClick.calledOnce).to.equal(true);
//
//   it('click on a fourth star triggers onClick, the value in the state is set to 4, 4 full stars are displayed', () => {
//     const fourthStar = rating.find('Star').at(3);
//     fourthStar.simulate('click');
//     expect(onClick).toHaveBeenCalled();
//     expect(rating.state('value')).toEqual(4);
//
//     // check the displayed stars
//     const stars = rating.state('stars');
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
//     const secondStar = rating.find('Star').at(1);
//     secondStar.simulate('click');
//     expect(onClick).toHaveBeenCalled();
//     expect(rating.state('value')).toEqual(2);
//
//     // check the displayed stars
//     const stars = rating.state('stars');
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
//   let rating;
//   let onClick;
//   beforeEach(() => {
//     onClick = jest.fn();
//     rating = mount(<Rating onClick={onClick} value={4} />);
//   });
//
//   it('Rating renders 5 stars', () => {
//     expect(rating.find('Star').length).toBe(5);
//   });
//
//   it('The value is 4', () => {
//     expect(rating.state('value')).toBe(4);
//   });
//
//   it('4 stars are full', () => {
//     const stars = rating.state('stars');
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
//     const style = rating.state('style');
//     const targetStyle = { width: 20, height: 20 };
//     expect(style).toEqual(targetStyle);
//   });
//
//   it('Rating requires onClick prop', () => {
//     expect(rating.props().onClick).toBeDefined();
//   });
//   // click simulate
//   // wrapper.find('button').simulate('click');
//   // expect(onButtonClick.calledOnce).to.equal(true);
//
//   it('click on a fifth star triggers onClick, the value in the state is set to 5, 5 full stars displayed', () => {
//     const fifthStar = rating.find('Star').at(4);
//     fifthStar.simulate('click');
//     expect(onClick).toHaveBeenCalled();
//     expect(rating.state('value')).toEqual(5);
//
//     // check the displayed stars
//     const stars = rating.state('stars');
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
//     const secondStar = rating.find('Star').at(1);
//     secondStar.simulate('click');
//     expect(onClick).toHaveBeenCalled(); // didn't actually test what got past to the onClick function
//     expect(rating.state('value')).toEqual(2);
//
//     // check the displayed stars
//     const stars = rating.state('stars');
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
