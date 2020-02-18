import {createDefaultValidationResult, ValidationResult, Validators} from '@lemoncode/fonk';
import axios from "axios";

const isPictureAddressValid = (value): Promise<ValidationResult> => {
    const pattern = /.*\.(gif|jpe?g|bmp|png)$/i;
    return new Promise<ValidationResult>(((resolve, reject) => {
        resolve(Validators.pattern.validator({
            value,
            customArgs: {pattern},
        }));
    }))
};

const pictureExists = (value: string): Promise<boolean> => {
    return new Promise<boolean>((resolve, reject) => {
        axios.get(value)
            .then((response) => {
                (response.headers['content-type'].includes('image') && (response.status === 200 || response.status === 304)) ?
                    resolve(true) : resolve(false)
            })
            .catch(e => {
                resolve(false)
            })
    })
};

export const pictureValidator = (fieldValidatorArgs): Promise<ValidationResult> => {
    const {value, values} = fieldValidatorArgs;

    return new Promise<ValidationResult>((resolve, reject) => {
        const fieldValidationResult: ValidationResult = createDefaultValidationResult();
        isPictureAddressValid(value).then((validationResult: ValidationResult) => {
            if (validationResult.succeeded) {
                pictureExists(value).then(pictureExists => {
                    fieldValidationResult.type = 'INVALID_PICTURE';
                    fieldValidationResult.succeeded = pictureExists;
                    fieldValidationResult.message = pictureExists ? "" : "Must be a picture";
                    resolve(fieldValidationResult);
                })
            } else {
                fieldValidationResult.type = 'INVALID_PICTURE';
                fieldValidationResult.succeeded = false;
                fieldValidationResult.message = "Must be a picture";
                resolve(fieldValidationResult);
            }
        });
    });
};