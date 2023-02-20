import renderer from 'react-test-renderer';
import Step from './Step';

describe('Step', () => {
    it('should match snapshot', () => {
        const component = renderer.create(<Step />);
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('should match snapshot with Spinner', () => {
        const component = renderer.create(<Step isLoading={true}><div>test</div></Step>);
        expect(component.toJSON()).toMatchSnapshot();
    });
});