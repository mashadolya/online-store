import Card from 'src/app/modules/Products/components/Card';
import * as S from 'src/app/modules/Products/components/CardList/CardList.styles';
import { Product } from 'src/app/models/Product';

const CardList = ({ products }: { products: Product[] }) => {
  return (
    <S.CardListContainer>
      {products.map(product => (
        <Card key={product.id} {...product} />
      ))}
    </S.CardListContainer>
  );
};

export default CardList;
