import React from 'react'
import All_CategoryPage from './All_Category/page'

function CategoryPage({ onViewCategoryItems }) {
  return (
    <div>

      <All_CategoryPage onViewCategoryItems={onViewCategoryItems}/>
    </div>
  )
}

export default CategoryPage