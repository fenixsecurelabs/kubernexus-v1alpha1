import { createTheme, Theme } from "@mui/material/styles";

const theme = createTheme({})

function createPageContext() {
    return {
        theme,
    };
}

let pageContext: { theme: Theme; };

export default function getPageContext() {
    if (!process.browser) {
        return createPageContext();
    }

    if(!pageContext) {
        pageContext = createPageContext();
    }

    return pageContext;
}