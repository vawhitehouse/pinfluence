import { connect } from 'react-redux';
import { createPin } from '../../actions/pin_actions';
import CreatePinForm from './create_pin_form';

const mapStateToProps = ({ errors }) => ({
  errors: Object.values(errors.pin)
});

const mapDispatchToProps = dispatch => ({
  createPin: pin => dispatch(createPin(pin))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreatePinForm);