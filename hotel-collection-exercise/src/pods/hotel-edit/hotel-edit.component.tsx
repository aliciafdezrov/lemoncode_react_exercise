import * as React from 'react';
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import {HotelEntityVm} from "../hotel-collection/hotel-collection.vm";
import {Field, Form} from "react-final-form";
import {formValidation} from "./hotel-edit.validation";
import {Rating, SelectField, TextField} from "../../common/components/forms";

const classes = require('./hotel-edit.styles.scss');

interface Props {
    hotelId: string;
    initialHotel: HotelEntityVm;
    editHotel: (hotel: HotelEntityVm, prop: string, value: any) => void;
}

const selectOptions = [
    {
        value: 0,
        label: "Málaga"

    },
    {
        value: 1,
        label: "Granda"

    },
    {
        value: 2,
        label: "Almería"

    }
];

export const HotelEditComponent: React.FunctionComponent<Props> = (props: Props) => {
    const {hotelId, initialHotel, editHotel} = props;

    const editHotelInfo = (prop, value) => {
        editHotel(initialHotel, prop, value);
    };

    const onSave = (values) => {
        console.log(values)
    };

    return (
        <div className={classes.container}>
            <Form
                onSubmit={values => onSave(values)}
                initialValues={initialHotel}
                render={({handleSubmit, submitting, pristine, values}) => (
                    <form onSubmit={handleSubmit} noValidate>
                        <div className={classes.rowContainer}>
                            <div className={classes.inputLabel}>
                                <InputLabel>Name</InputLabel>
                            </div>
                            <Field
                                fullWidth
                                name="name"
                                component={TextField}
                                type="text"
                                validate={(value, _, meta) =>
                                    formValidation.validateField(meta.name, value)
                                }
                            />
                        </div>

                        <div className={classes.rowContainer}>
                            <img src={initialHotel.picture}
                                 alt={`Image for the hotel with id: ${hotelId}`}/>
                        </div>

                        <div className={classes.rowContainer}>
                            <div className={classes.inputLabel}>
                                <InputLabel>Picture</InputLabel>
                            </div>
                            <Field
                                fullWidth
                                name="picture"
                                component={TextField}
                                type="text"
                                validate={(value, _, meta) =>
                                    formValidation.validateField(meta.name, value)
                                }
                            />
                        </div>

                        <div className={classes.rowContainer}>
                            <div className={classes.inputLabel}>
                                <InputLabel>Rating</InputLabel>
                            </div>
                            <Field
                                name="rating"
                                type="radio"
                                component={Rating}
                                label="Rating"
                                validate={(value, _, meta) =>
                                    formValidation.validateField(meta.name, value)
                                }
                            />

                            <div className={classes.inputLabel}>
                                <InputLabel>City</InputLabel>
                            </div>
                            <Field
                                fullWidth
                                name="city"
                                menuItemList={selectOptions}
                                component={SelectField}
                                validate={(value, _, meta) =>
                                    formValidation.validateField(meta.name, value)
                                }
                            />
                        </div>

                        <div className={classes.rowContainer}>
                            <div className={classes.inputLabel}>
                                <InputLabel>Description</InputLabel>
                            </div>
                            <Field
                                fullWidth
                                variant="outlined"
                                name="description"
                                component={TextField}
                                type="text"
                                rows="4"
                                multiline
                                validate={(value, _, meta) =>
                                    formValidation.validateField(meta.name, value)
                                }
                            />
                        </div>

                        <div className={classes.rowContainer}>
                            <Button
                                variant="contained"
                                color="primary"
                                fullWidth
                                type="submit">Save</Button>
                        </div>
                    </form>
                )}
            />
        </div>
    );
};
