import { connect } from 'react-redux'
import Index from './index'


const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user,
    ...ownProps
  }
}

const IndexContainer = connect(
  mapStateToProps,
)(Index)

export default IndexContainer