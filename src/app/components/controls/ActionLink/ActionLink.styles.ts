import styled from 'styled-components/macro';

export const ActionLinkContainer = styled.div`
  padding: 10px;
  font-size: ${props => props.theme.sz.s3};
  line-height: ${props => props.theme.sz.s4};
  text-align: center;
`;

export const Link = styled.a`
  text-decoration: underline;

  &:hover {
    cursor: pointer;
  }
`;
