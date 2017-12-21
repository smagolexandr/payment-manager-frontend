import { connect } from 'react-redux'
import Login from './Login'
import { bindActionCreators } from 'redux'
import { changeStateProp } from '../../actions'
import { changeCurrentUser } from '../../actions'


const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user,
    ...ownProps
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // bind actions with dispatch
    // ...bindActionCreators({changeStateProp, increment}, dispatch),
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