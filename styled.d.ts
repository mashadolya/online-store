import {} from 'styled-components/cssprop';
import { Theme } from 'app/components/StyleWrapper/StyleWrapper';

declare module 'styled-components' {
    export interface DefaultTheme extends Theme {}
}
