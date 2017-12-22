import { connect } from 'react-redux'
import Login from './Login'
import { changeCurrentUser } from '../../actions'


const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user,
    ...ownProps
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeCurrentUser: (user) => {
        changeCurrentUser(user)(dispatch)
    }
  }
}

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)

export default LoginContainer