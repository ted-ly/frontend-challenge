import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Button from './Button';

describe('Button', () => {
    it('should match snapshot', () => {
        const component = renderer.create(<Button />);
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('should call onClick stub function', () => {
        const stubOnClick = jest.fn();
        const component = shallow(<Button onClick={stubOnClick} />);
        component.find('button').simulate('click');
        expect(stubOnClick.mock.calls).toHaveLength(1);
    });
});