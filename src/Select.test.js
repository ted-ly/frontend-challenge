import renderer from 'react-test-renderer';
import Select from './Select';
import { shallow } from 'enzyme';

describe('Select', () => {
    it('should match snapshot', () => {
        const component = renderer.create(<Select />);
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('should match snapshot with select options', () => {
        const component = renderer.create(<Select options={['black', 'white']} />);
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('should call stub function and change option', () => {
        const stubOnChange = jest.fn();
        const component = shallow(<Select options={['black', 'white']} onChange={stubOnChange} />);
        component.find('select').simulate('change', {target: {value: 'white'}});
        expect(stubOnChange.mock.calls).toHaveLength(1);
        expect(stubOnChange.mock.calls[0][0].target.value).toBe('white');
    })
});