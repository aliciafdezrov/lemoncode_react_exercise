import * as React from 'react';
import {FieldRenderProps} from 'react-final-form';
import RatingMUI from '@material-ui/lab/Rating';
import Tooltip from "@material-ui/core/Tooltip";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

interface Props extends FieldRenderProps<any, any> {
}

const theme = createMuiTheme({
    overrides: {
        MuiTooltip: {
            tooltip: {
                fontSize: "1em",
                color: "black",
                backgroundColor: "coral"
            }
        }
    }
});

export const Rating: React.FunctionComponent<Props> = props => {
    const {
        input: {name, onChange, value, ...restInput},
        meta,
        ...rest
    } = props;

    const showError = () => ((meta.submitError && !meta.dirtySinceLastSubmit) || meta.error); //&& meta.touched;

    return (
        <ThemeProvider theme={theme}>
            <Tooltip title={meta.error ? meta.error : ""}
                     aria-label="rating-error"
                     leaveTouchDelay={5000}
                     open={!!meta.error}
                     arrow>
                <RatingMUI
                    {...rest}
                    name={name}
                    onChange={onChange}
                    value={value}
                />
            </Tooltip>
        </ThemeProvider>
    );
};
