import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';



const ButtonStyle = {
    buttonRadius:"30px",
    letterSpacing:"1px",
    padding:"20px"
}


export const ButtonStyled = withStyles({
    root: {
        background: 'transparent linear-gradient(108deg, #EDC59C 0%, #FB7A75 58%, #DC4E7B 100%) 0% 0% no-repeat padding-box',
        border: 0,
        color: 'white',
        borderRadius:ButtonStyle.buttonRadius,
        letterSpacing:ButtonStyle.letterSpacing,
        paddingLeft:ButtonStyle.padding,
        paddingRight:ButtonStyle.padding,
    },
    label: {
        textTransform: 'uppercase',
    },
})(Button);

export const ButtonOutline = withStyles({
    root: {
        color:"#F59C86",
        border: "1px solid #F59C86",
        borderRadius:ButtonStyle.buttonRadius,
        letterSpacing:ButtonStyle.letterSpacing,
        paddingLeft:ButtonStyle.padding,
        paddingRight:ButtonStyle.padding,
    },
    label: {
        textTransform: 'uppercase',
    },
})(Button);

