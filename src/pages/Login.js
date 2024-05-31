import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            errors: {}
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const errors = this.validate();
        this.setState({ errors });
        if (Object.keys(errors).length === 0) {
            alert("Login successful!");
            // Handle login logic here
        }
    };

    validate = () => {
        const { username, password } = this.state;
        const errors = {};

        if (!username) {
            errors.username = 'Please enter your username';
        }

        if (!password) {
            errors.password = 'Please enter your password';
        }

        return errors;
    };

    render() {
        const { username, password, errors } = this.state;

        return (
            <div className="login-container">
                <h2>Вхід</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="username">Ім'я користувача:</label><br />
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Введіть ваше ім'я"
                        value={username}
                        onChange={(e) => this.setState({ username: e.target.value })}
                        required
                    /><br />
                    {errors.username && <div className="error">{errors.username}</div>}
                    <label htmlFor="password">Пароль:</label><br />
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Введіть ваш пароль"
                        value={password}
                        onChange={(e) => this.setState({ password: e.target.value })}
                        required
                    /><br />
                    {errors.password && <div className="error">{errors.password}</div>}
                    <input type="submit" value="Увійти" />
                </form>
                <span className="signup-text">Не маєте аккаунта? <Link to="/register" className="register-link">Зареєструйтесь</Link></span>
            </div>
        );
    }
}

export default LoginForm;
