import React, { FC, SyntheticEvent } from 'react';
import * as S from 'src/app/modules/Products/components/Card/Card.styles';
import Image from 'src/app/components/Image/Image';
import IconButton from 'src/app/components/controls/IconButton/IconButton';
import { Icons } from 'src/app/components/Icons';
import { Product } from 'src/app/models/Product';
import { useAppDispatch } from 'src/app/hooks/useAppDispatch';
import { addItemToCart } from 'src/app/modules/Cart/slices/cartSlice';

const { Favorite, Cart } = Icons;

const ICON_SIZE = 32;

const Card: FC<Product> = (product: Product) => {
    const { src, label, category, price } = product;
    const dispatch = useAppDispatch();

    const addToCartHandler = (e: SyntheticEvent) => {
        e.stopPropagation();
        dispatch(addItemToCart(product));
    };

    return (
        <S.ProductGridCard>
            <S.CardContainer>
                <Image src={src} alt={label} />
                <S.CardBody>
                    <div className="product-info">
                        <div className="product-description">
                            <S.BodyHeader>{label}</S.BodyHeader>
                            <p>{category}</p>
                        </div>
                        <p className="price">
                            {price.value} <span>{price.currency}</span>
                        </p>
                    </div>
                    <S.IconsContainer>
                        <IconButton>
                            <Favorite width={ICON_SIZE} height={ICON_SIZE} />
                        </IconButton>
                        <IconButton>
                            <Cart onClick={addToCartHandler} width={ICON_SIZE} height={ICON_SIZE} />
                        </IconButton>
                    </S.IconsContainer>
                </S.CardBody>
            </S.CardContainer>
        </S.ProductGridCard>
    );
};

export default Card;
