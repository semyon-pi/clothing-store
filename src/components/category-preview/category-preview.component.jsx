import React from 'react'
import ProductCard from '../product-card/product-card.component'
import {
  CategoryPreviewContainer,
  TitleLink,
  ProductsPreview,
} from './category-preview.styles'

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <TitleLink to={title}>{title.toUpperCase()}</TitleLink>
      </h2>
      <ProductsPreview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </ProductsPreview>
    </CategoryPreviewContainer>
  )
}

export default CategoryPreview
