import { connect } from 'react-redux'
import CategoryForm from './CategoryForm'
import Categories from './Categories'


const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user,
    ...ownProps
  }
}

export const CategoriesContainer = connect(
  mapStateToProps,
)(Categories)

export const CategoryFormContainer = connect(
  mapStateToProps,
)(CategoryForm)


