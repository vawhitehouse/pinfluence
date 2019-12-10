import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import LoginForm from './login';

const mapStateToProps = ({ errors }) => ({
  user: { username: '', email: '', age: '', password: '' },
  errors: errors.session
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
