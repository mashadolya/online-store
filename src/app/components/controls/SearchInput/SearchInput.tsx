import React, { FC } from 'react';
import * as S from 'src/app/components/controls/SearchInput/SearchInput.styles';

const SearchInput: FC = () => {
    return (
        <S.SearchInputWrapper className="search-input">
            <S.InputWrapped type="search" placeholder="Search" />
        </S.SearchInputWrapper>
    );
};

export default SearchInput;
