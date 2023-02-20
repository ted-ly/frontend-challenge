import renderer from 'react-test-renderer';
import AdditionalInfo from './AdditionalInfo';
import { initialState } from './utils';

describe('AdditionalInfo', () => {
    it('should match with snapshot', () => {
        const component = renderer.create(<AdditionalInfo formData={initialState} />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});