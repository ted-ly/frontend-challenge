import renderer from 'react-test-renderer';
import Confirmation from './Confirmation';
import { initialState } from './utils';

describe('AdditionalInfo', () => {
    it('should match snapshot', () => {
        const component = renderer.create(<Confirmation formData={initialState} />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});