import renderer from 'react-test-renderer';
import Spinner from './Spinner';

describe('Spinner', () => {
    it('should match snapshot', () => {
        const component = renderer.create(<Spinner />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});