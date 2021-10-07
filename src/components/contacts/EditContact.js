import React, { Component } from 'react';
import TextInputGroup from '../layout/TextInputGroup';


class EditContact extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    };

    onSubmit = (e) => {
        e.preventDefault();

        const {name,email,phone} = this.state;

        if (name === ''){
            this.setState({errors: {name: 'Name is required'}});
            return;
        
        }
        if (email === ''){
            this.setState({errors: {email:'email is required'}});
            return;

        }
        if (phone === ''){
            this.setState({errors: {phone:'phone is required'}});
            return;
        }

        const updContact = {
            name, email, phone
        };

        const { id} = this.props.match.params;

        this.setState({
            name:'',email:'',phone:'',errors:{}
        });
        this.props.history.push('/');
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value});

    render () {
        const {name, email, phone, errors} = this.state;

        return (
            <div className="card mb-4">
                <div className='card-header'>EDIT CONTACT</div>
                <div className='card-body'>
                    <form onSubmit={this.onSubmit}>
                        <TextInputGroup 
                            label="Name"
                            name='name'
                            placeholder='enter name'
                            value={name}
                            onChange={this.onChange}
                            error={errors.name}
                        />
                        <TextInputGroup 
                            label="Email"
                            name='email'
                            type='email'
                            placeholder='enter email'
                            value={email}
                            onChange={this.onChange}
                            error={errors.email}
                        />
                        <TextInputGroup 
                            label="Phone"
                            name='phone'
                            placeholder='enter phone'
                            value={phone}
                            onChange={this.onChange}
                            error={errors.phone}
                        />
                        <input 
                            type='submit'
                            value='update Contact'
                            className='btn btn-light btn-block'
                        />
                    </form>
                </div>
            </div>
        );
    }
}


export default EditContact;