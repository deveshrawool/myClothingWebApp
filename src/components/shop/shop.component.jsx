import { useContext, Fragment } from 'react';

import ProductCard from '../../components/product-card/product-card.component';

import './shop.styles.scss';
import { useSelector } from 'react-redux';
import { selectCategories } from '../../store/categories/categories.selector';

const Shop = () => {
  const categoryMap  = useSelector(selectCategories);

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