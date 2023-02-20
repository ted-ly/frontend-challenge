import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Input from './Input';

describe('Input', () => {
    it('should match snapshot', () => {
        const component = renderer.create(<Input />);
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('should call onChange stub function', () => {
        const onChangeStub = jest.fn();
        const component = shallow(<Input onChange={onChangeStub} />);
        component.find('input').simulate('change', {target: {value: 'test'}});
        expect(onChangeStub.mock.calls).toHaveLength(1);
        expect(onChangeStub.mock.calls[0][0].target.value).toBe('test');
    });
});