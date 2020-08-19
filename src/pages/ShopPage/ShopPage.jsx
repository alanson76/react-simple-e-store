import React, {Component} from 'react';

//css
import './ShopPage.scss';
//shop data
import SHOP_DATA from './shop-data';
//my components
import CollectionPreview from '../../components/ShopPage/CollectionPreview/CollectionPreview';

export class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    const {collections} = this.state;
    return (
      <div className='shop-page'>
        {collections.map(({id, ...otherCollectionProps}) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
