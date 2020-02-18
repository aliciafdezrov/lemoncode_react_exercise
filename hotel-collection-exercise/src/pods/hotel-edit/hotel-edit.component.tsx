import * as React from 'react';
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import {Field, Form} from "react-final-form";
import {formValidation} from "./hotel-edit.validation";
import {Rating, SelectField, TextField} from "../../common/components/forms";
import {HotelEntityVm} from "./hotel-edit.vm";
import {CityEntityApi} from "./hotel-edit.api";

const classes = require('./hotel-edit.styles.scss');

interface Props {
    hotelId: string;
    initialHotel: HotelEntityVm;
    editHotel: (hotel: HotelEntityVm, prop: string, value: any) => void;
    citiesList: CityEntityApi[];
}

export const HotelEditComponent: React.FunctionComponent<Props> = (props: Props) => {
    const {hotelId, initialHotel, editHotel, citiesList} = props;

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
                                precision={0.5}
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
                                name="city"
                                menuItemList={citiesList}
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
