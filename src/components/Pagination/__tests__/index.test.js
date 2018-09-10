import React from 'react';
import { render, shallow } from 'enzyme';

import Pagination from '../index';

describe('Snapshots', () => {
  it('Pagination with default value', () => {
    const wrapper = render(<Pagination />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Pagination with 0 items', () => {
    const wrapper = render(
      <Pagination current={1} total={0} pageSize={10} onChange={() => {}} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('Pagination with 300 items, at first page with 10 items', () => {
    const wrapper = render(
      <Pagination current={1} total={300} pageSize={10} onChange={() => {}} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('Pagination with custom description', () => {
    const wrapper = render(
      <Pagination description="blah {{fromIndex}}-{{toIndex}} of {{total}}" />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('Pagination with text buttons', () => {
    const wrapper = render(<Pagination showLabel />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Pagination with custom text buttons', () => {
    const wrapper = render(
      <Pagination prevLabel="blah" nextLabel="lala" showLabel />
    );
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Functions', () => {
  it('trigger onChange when clicked next button when current page is 1', () => {
    const clickHandler = jest.fn();
    const currentPage = 1;
    const pageSize = 10;
    const wrapper = shallow(
      <Pagination
        current={currentPage}
        total={300}
        pageSize={pageSize}
        onChange={clickHandler}
      />
    );
    wrapper
      .find('SCButton')
      .last()
      .simulate('click');
    expect(clickHandler).toHaveBeenCalledTimes(1);
    expect(clickHandler.mock.calls[0][0]).toEqual(currentPage + 1);
    expect(clickHandler.mock.calls[0][1]).toEqual(pageSize);
  });

  it('will not trigger onChange when clicked prev button when current page is 1', () => {
    const clickHandler = jest.fn();
    const wrapper = shallow(
      <Pagination
        current={1}
        total={300}
        pageSize={10}
        onChange={clickHandler}
      />
    );
    wrapper
      .find('SCButton')
      .first()
      .simulate('click');
    expect(clickHandler).toHaveBeenCalledTimes(0);
  });

  it('trigger onChange when clicked last button when current page is 30', () => {
    const clickHandler = jest.fn();
    const currentPage = 30;
    const pageSize = 10;
    const wrapper = shallow(
      <Pagination
        current={currentPage}
        total={300}
        pageSize={pageSize}
        onChange={clickHandler}
      />
    );
    wrapper
      .find('SCButton')
      .first()
      .simulate('click');
    expect(clickHandler).toHaveBeenCalledTimes(1);
    expect(clickHandler.mock.calls[0][0]).toEqual(currentPage - 1);
    expect(clickHandler.mock.calls[0][1]).toEqual(pageSize);
  });

  it('will not trigger onChange when clicked next button when current page is 30', () => {
    const clickHandler = jest.fn();
    const wrapper = shallow(
      <Pagination
        current={30}
        total={300}
        pageSize={10}
        onChange={clickHandler}
      />
    );
    wrapper
      .find('SCButton')
      .last()
      .simulate('click');
    expect(clickHandler).toHaveBeenCalledTimes(0);
  });

  it('trigger onChange and state update when clicked next button', () => {
    const wrapper = shallow(<Pagination defaultTotal={36} />);
    expect(
      wrapper
        .find('Text')
        .children()
        .text()
    ).toEqual('Viewing 1-20 of 36');
    const { current } = wrapper.state();
    wrapper
      .find('SCButton')
      .last()
      .simulate('click');
    const { current: updatedCurrent } = wrapper.state();
    expect(updatedCurrent).toEqual(current + 1);
    expect(
      wrapper
        .find('Text')
        .children()
        .text()
    ).toEqual('Viewing 21-36 of 36');
  });
});
