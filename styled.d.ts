import {} from 'styled-components/cssprop';
import { Theme } from 'app/components/theme/StyleWrapper/StyleWrapper';

declare module 'styled-components' {
    export interface DefaultTheme extends Theme {}
}
