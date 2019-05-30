import React from 'react';
import { Field, reduxForm} from 'redux-form';


class StreamForm extends React.Component{
    renderError({error, touched}){
        if(error && touched){
        return (
            <div className="ui error message">
                <header>{error}</header>
            </div>
        )};
    }

    renderInput=({input, label, meta})=>{
        const className = `field ${meta.error && meta.touched? 'error': ''}`;
        return (
                <div className={className}>
                    <label>{label}</label>
                    <input {...input} autoComplete="off"/>
                    <div>{this.renderError(meta)}</div>
                </div>
        );
    }

    render(){
        return (
            <form onSubmit={this.props.handleSubmit(this.props.onSubmit)} className="ui form error">
                <Field name="title" component={this.renderInput} label="Enter Title" />
                <Field name="description" component={this.renderInput} label="Enter Description" />
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
}

const validate = (formValues) => {
    const errors = {};

    if(!formValues.title){
        errors.title = 'Enter title here';
    }

    
    if(!formValues.description){
        errors.description = 'Enter correct description here';
    }
    return errors;

};

export default reduxForm({
    form: 'streamForm',
    validate: validate
})(StreamForm);

