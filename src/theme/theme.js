import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    "palette": {
        primary: {
            main: '#353535',
        },
        secondary: {
            main: '#F59C86',
        },
    },

    "typography":{
        fontFamily:"'Open Sans', sans-serif",
        "h1":{
            fontSize:"3rem"
        },
        "h2":{
            fontSize:"2rem"
        },
        "h3":{
            fontSize:"1.5rem"
        },
        "h4":{
            fontSize:"1.2rem"
        },
        "button": {
            "height": 30,
            "fontSize":12,
            "fontWeight":500,
            "borderRadius": "70px",
        },
    },
    "body1":{
        fontFamily:"'Open Sans', sans-serif",
        fontSize:15,
    }
});

