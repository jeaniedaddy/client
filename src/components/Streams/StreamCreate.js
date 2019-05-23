import React from 'react';
import { Field, reduxForm} from 'redux-form';

class StreamCreate extends React.Component{
    renderError({error, touched}){
        if(error && touched){
        return (
            <div className="ui error message">
                <header>{error}</header>
            </div>
        )};
    }
    renderInput=({input, label, meta})=>{
        console.log(meta);
        return (
                
                <div className="field">
                    <label>{label}</label>
                    <input {...input} autoComplete="off"/>
                    <div>{this.renderError(meta)}</div>
                </div>
        );
    }

    onSubmit(formValues){
        console.log(formValues);

    }
    render(){
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
                <Field name="title" component={this.renderInput} label="Enter Title"/>
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
    form: 'streamCreate',
    validate: validate
})(StreamCreate);