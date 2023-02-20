import renderer from 'react-test-renderer';
import PostSubmit from './PostSubmit';

describe('PostSubmit', () => {
    it('should match error snapshot', () => {
        const component = renderer.create(<PostSubmit isError={true}/>);
        expect(component.toJSON()).toMatchSnapshot();
    });
    it('should match success snapshot', () => {
        const component = renderer.create(<PostSubmit isError={false}/>);
        expect(component.toJSON()).toMatchSnapshot();
    });
});