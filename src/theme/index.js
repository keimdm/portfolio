import { extendTheme, theme as base } from '@chakra-ui/react';

const theme = extendTheme({
    fonts: {
        heading: `Averia Serif Libre, serif, ${base.fonts?.heading}`
    }
});

export default theme;