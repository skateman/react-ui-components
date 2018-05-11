import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { renderFinalFormField, renderFinalFormTextArea, renderFinalFormCheckBox } from '../';
import { fieldInputProp, fieldMetaProps } from './mocks';


describe('Final form component reder functions', () => {
  it('Should return final form text field', () => {
    const input = { ...fieldInputProp };
    const meta = { ...fieldMetaProps };
    const field = renderFinalFormField(input, meta, 'Text field');
    const tree = renderer.create(field).toJSON();
    expect(tree).toMatchSnapshot();

    const wrapper = mount(field);
    expect(wrapper.find('input[type="text"]').length).toEqual(1);
  });

  it('Should return final form number input', () => {
    const input = { ...fieldInputProp };
    const meta = { ...fieldMetaProps };
    const field = renderFinalFormField(input, meta, 'Number field', 'number');
    const tree = renderer.create(field).toJSON();
    expect(tree).toMatchSnapshot();

    const wrapper = mount(field);
    expect(wrapper.find('input[type="number"]').length).toEqual(1);
  });

  it('Should return final form password input', () => {
    const input = { ...fieldInputProp };
    const meta = { ...fieldMetaProps };
    const field = renderFinalFormField(input, meta, 'Number field', 'password');
    const tree = renderer.create(field).toJSON();
    expect(tree).toMatchSnapshot();

    const wrapper = mount(field);
    expect(wrapper.find('input[type="password"]').length).toEqual(1);
  });

  it('Should return final form textarea', () => {
    const input = { ...fieldInputProp };
    const meta = { ...fieldMetaProps };
    const field = renderFinalFormTextArea(input, meta, 'Text area');
    const tree = renderer.create(field).toJSON();
    expect(tree).toMatchSnapshot();

    const wrapper = mount(field);
    expect(wrapper.find('textarea').length).toEqual(1);
  });

  it('Should return final form checkbox', () => {
    const input = { ...fieldInputProp };
    const meta = { ...fieldMetaProps };
    const field = renderFinalFormCheckBox(input, meta, 'check box');
    const tree = renderer.create(field).toJSON();
    expect(tree).toMatchSnapshot();

    const wrapper = mount(field);
    expect(wrapper.find('input[type="checkbox"]').length).toEqual(1);
  });
});
