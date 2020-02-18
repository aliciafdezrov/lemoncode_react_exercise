import * as React from 'react';
import { FieldRenderProps } from 'react-final-form';
import TextFieldMui from '@material-ui/core/TextField';
import MenuItem from "@material-ui/core/MenuItem";

interface Props extends FieldRenderProps<any, any> {}

export const SelectField: React.FunctionComponent<Props> = props => {
    const {
        input: { name, onChange, value, ...restInput },
        meta,
        menuItemList,
        ...rest
    } = props;

    const showError =
        ((meta.submitError && !meta.dirtySinceLastSubmit) || meta.error) &&
        meta.touched;

    return (
        <>
            <TextFieldMui
                {...rest}
                name={name}
                error={showError}
                onChange={onChange}
                value={value}
                select
                inputProps={restInput}
                helperText={showError ? meta.error : ''}
            >
                {menuItemList.map(option => (
                    <MenuItem key={option.code} value={option.name}>
                        {option.name}
                    </MenuItem>
                ))}
            </TextFieldMui>
        </>
    );
};
