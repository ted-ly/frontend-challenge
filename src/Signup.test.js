import renderer from 'react-test-renderer';
import Signup from './Signup';
import { initialState } from './utils';

describe('Signup', () => {
    it('should match snapshot', () => {
        const component = renderer.create(<Signup formData={initialState} />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});