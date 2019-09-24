import { shallow } from 'enzyme';
import ReactDom from 'react-dom';
import Signup from './components/Signup';


description ('<Signup />', () => {
    it('add signup a user', () => {
        const signup = shallow(<Signup />);
        expect(signup.find('input').length).toEqual(2);
    })
});
