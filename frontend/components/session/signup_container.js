import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import Signup from './signup'

const mapStateToProps = ({ errors }) => ({
  user: { email: '', age: '', password: '' },
  errors: Object.values(errors.session)
})

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);