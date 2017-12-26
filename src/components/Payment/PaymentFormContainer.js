import { connect } from 'react-redux'
import PaymentForm from './PaymentForm'
import Payments from './Payments'


const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user,
    ...ownProps
  }
}

export const PaymentsContainer = connect(
  mapStateToProps,
)(Payments)

export const PaymentFormContainer = connect(
  mapStateToProps,
)(PaymentForm)
