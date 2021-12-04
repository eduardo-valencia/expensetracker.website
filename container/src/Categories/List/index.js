import React, { Component } from 'react'
import { connect } from 'react-redux'

import fetchCategories from '../../actions/lists/categories'
import MobileApp from '../../components/shared/EmptyList/MobileApp'
import Loading from '../../components/LoadingIndicator'
import CategoryWithDialog from '../../components/CategoryWithDialog'

class Categories extends Component {
  componentDidMount() {
    const { categories, fetchCategories } = this.props
    if (!categories) {
      fetchCategories()
    }
  }

  getCategories = () => {
    const { categories } = this.props
    const items = categories.map(({ name, _id }, index) => (
      <CategoryWithDialog name={name} key={index} _id={_id} />
    ))
    return <ul>{items}</ul>
  }

  getCategoriesOrPlaceholder = () => {
    const { categories } = this.props
    if (categories && categories.length) return this.getCategories()
    return <MobileApp pluralItem="categories" />
  }

  render() {
    const { categories } = this.props
    return (
      <div className="categories">
        {categories ? this.getCategoriesOrPlaceholder() : <Loading />}
      </div>
    )
  }
}

const mapStateToProps = ({ categories }) => ({ categories })

export default connect(mapStateToProps, { fetchCategories })(Categories)
