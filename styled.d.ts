import {} from 'styled-components/cssprop';
import { Theme } from 'src/app/components/theme/StyleWrapper/StyleWrapper';

declare module 'styled-components' {
    export interface DefaultTheme extends Theme {}
}
