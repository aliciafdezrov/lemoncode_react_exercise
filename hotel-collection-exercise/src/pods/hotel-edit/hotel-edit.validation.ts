import {ValidationSchema, Validators} from '@lemoncode/fonk';
import {createFinalFormValidation} from '@lemoncode/fonk-final-form';
import {rangeNumber} from '@lemoncode/fonk-range-number-validator';
import {pictureValidator} from "./custom-validators/picture.validator";

const validationSchema: ValidationSchema = {
    field: {
        name: [
            Validators.required.validator,
            {
                validator: Validators.minLength,
                customArgs: { length: 2 },
            },],
        picture: [Validators.required.validator, {validator: pictureValidator}],
        rating: [
            Validators.required.validator,
            {
                validator: rangeNumber.validator,
                customArgs: {
                    min: {
                        value: 2,
                        inclusive: true,
                    },
                    max: {
                        value: 5,
                        inclusive: true,
                    },
                },
            },
        ],
        description: [
            Validators.required.validator,
            {
                validator: Validators.minLength,
                customArgs: {length: 24},
            },
            {
                validator: Validators.maxLength,
                customArgs: {length: 256},
            },
        ],
        city: [Validators.required.validator],
    },
};

export const formValidation = createFinalFormValidation(validationSchema);
