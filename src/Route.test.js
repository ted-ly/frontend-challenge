import renderer from 'react-test-renderer';
import Route from './Route';

describe('Route', () => {
    it('should match snapshot', () => {
        const component = renderer.create(<Route path='/'><div>path</div></Route>);
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('should match snapshot if route does not match', () => {
        global.window = Object.create(window);
        Object.defineProperty(window, 'location', {
            value: {
                pathname: '/something-else'
            },
            writable: true,
        })
        const component = renderer.create(<Route path='/'><div>path</div></Route>);
        expect(component.toJSON()).toMatchSnapshot();
    });
});