import { connect } from 'react-redux'
import CategoryForm from './CategoryForm'


const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user,
    ...ownProps
  }
}

const CategoryContainer = connect(
  mapStateToProps,
)(CategoryForm)

export default CategoryContainer