import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SignupForm from './signup_form'

const mapStateToProps = ({ errors }) => ({
  user: { email: '', age: '', password: '' },
  errors: Object.values(errors.session)
})

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignupForm));