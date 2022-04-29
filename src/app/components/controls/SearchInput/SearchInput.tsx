import { FC, useState } from 'react';
import * as S from 'src/app/components/controls/SearchInput/SearchInput.styles';
import { Icons } from 'src/app/components/Icons';

const { Search, Close } = Icons;

const ICON_SIZE = 32;

const SearchInput: FC = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleSearch = () => {
        setIsActive(!isActive);
    };

    const IconButton = isActive ? Close : Search;

    return (
        <S.SearchInputContainer isSearching={isActive}>
            <S.SearchIconButton onClick={toggleSearch}>
                <IconButton width={ICON_SIZE} height={ICON_SIZE} />
            </S.SearchIconButton>

            <S.SearchInput type="search" placeholder="Search" />
        </S.SearchInputContainer>
    );
};

export default SearchInput;
