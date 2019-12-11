import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import LoginForm from './login';

const mapStateToProps = ({ errors }) => ({
  user: { email: '', age: '', password: '' },
  errors: Object.values(errors.session)
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
