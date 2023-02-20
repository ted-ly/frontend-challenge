import renderer from 'react-test-renderer';
import Form from './Form';
import { initialState } from './utils';

describe('Form', () => {
    it('should match snapshot', () => {
        const component = renderer.create(<Form formData={initialState} />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});