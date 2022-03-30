import React from 'react';
import * as S from 'app/components/controls/SearchInput/SearchInput.styles';

export const SearchInput = () => {
    return (
        <S.SearchInputWrapper className="search-input">
            <S.InputWrapped type="search" placeholder="Search" />
        </S.SearchInputWrapper>
    );
};
