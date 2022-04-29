import React, { FC } from 'react';
import * as S from 'src/app/components/Image/Image.styles';

const Image: FC<React.ImgHTMLAttributes<HTMLImageElement>> = ({ ...rest }) => {
    return (
        <S.ImageContainer>
            <S.Image {...rest} />
        </S.ImageContainer>
    );
};

export default Image;
