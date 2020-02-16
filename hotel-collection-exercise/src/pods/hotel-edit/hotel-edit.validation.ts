import { ValidationSchema, Validators } from '@lemoncode/fonk';
import { createFinalFormValidation } from '@lemoncode/fonk-final-form';
import { rangeNumber } from '@lemoncode/fonk-range-number-validator';

const validationSchema: ValidationSchema = {
    field: {
        name: [
            Validators.required.validator,
            {
                validator: Validators.minLength,
                customArgs: { length: 2 },
            },],
        picture: [Validators.required.validator],
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
        description: [Validators.required.validator],
        city: [Validators.required.validator],
    },
};

export const formValidation = createFinalFormValidation(validationSchema);
