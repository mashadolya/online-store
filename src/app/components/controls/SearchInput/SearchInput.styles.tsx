import styled from 'styled-components';
import IconButton from 'src/app/components/controls/IconButton/IconButton';

export const SearchInputContainer = styled.div<{ isSearching?: boolean }>`
    position: relative;
    display: flex;
    align-items: center;
    padding: 0 10px;
    width: 100%;
    max-width: ${({ isSearching }) => (isSearching ? 500 : 40)}px;
    height: 40px;
    border-radius: 40px;
    background-color: ${({ theme, isSearching }) => (isSearching ? theme.color.light002 : 'none')};
    transition: all 0.3s ease;
    @media (min-width: 959px) {
        max-width: ${({ isSearching }) => (isSearching ? 300 : 40)}px;
    }
`;

export const SearchInput = styled.input`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding-left: 50px;
    background-color: transparent;
    border-radius: 20px;
    outline: none;
    border: 1px solid transparent;
    &:focus {
        border-color: #000;
    }
`;

export const SearchIconButton = styled(IconButton)`
    &:hover {
        &::after {
            opacity: 1;
            transform: scale(1);
        }
    }
`;
