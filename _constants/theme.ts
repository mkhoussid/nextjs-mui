import { Theme, ThemeOptions, createMuiTheme } from '@material-ui/core/styles';
import { Palette } from '@material-ui/core/styles/createPalette';
import { red } from '@material-ui/core/colors';
import { COLORS, TColors } from '_constants/colors';

interface IPalette extends Palette {
    COLORS: TColors;
    disabled: {
        main: string;
    };
}
interface IThemeOptions extends ThemeOptions {
    palette: IPalette;
}

export interface ITheme extends Theme {
    palette: IPalette;
}

const theme = createMuiTheme({
    palette: {
        primary: {
            main: COLORS.PRIMARY,
        },
        disabled: {
            main: COLORS.DISABLED,
        },
        secondary: {
            main: COLORS.SECONDARY,
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#fff',
        },
        COLORS,
    },
} as IThemeOptions);

export default theme;
