import { useContext, Fragment } from 'react';

import ProductCard from '../../components/product-card/product-card.component';

import { CategoriesContext } from '../../contexts/categories.context';

import './shop.styles.scss';

const Shop = () => {
  const { categoryMap } = useContext(CategoriesContext);

  return (
    <Fragment>
      {Object.keys(categoryMap).map((title) => (
        <Fragment key={title}>
          <h2>{title}</h2>
          <div className='products-container'>
            {categoryMap[title].map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Fragment>
      ))}
    </Fragment>
  );
};

export default Shop;