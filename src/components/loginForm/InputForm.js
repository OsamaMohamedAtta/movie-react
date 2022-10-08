import React from 'react';

function InputForm({ errors, register, inputName, labelContent, type, pattern, requiredError, patternError, handelInputs }) {
    return (
        <div className="form">
            <label className="text-white my-3">{labelContent}</label>
            <input {...register(`${inputName}`, { required: true, pattern: pattern })} type={type} className="form-control mb-1" onKeyUp={handelInputs} />
            {errors?.type === 'required' && <div className="alert alert-danger mt-2">{requiredError}</div>}
            {errors?.type === 'pattern' && <div className="alert alert-danger mt-2">{patternError}</div>}
        </div>
    );
}

export default InputForm;