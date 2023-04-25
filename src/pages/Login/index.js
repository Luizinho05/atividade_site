import React, { Component } from 'react'

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            senha: '',
        }
        this.login = this.login.bind(this)
    }

    login(event) {
        event.preventDefault()
        const { email, senha } = this.state
        if (email === '' || senha === '') {
            alert('Preencha todos os Campos')
            return
        }
        
        alert(`E-mail: ${email} \nSenha: ${senha}`)
        this.setState({
            email: '',
            senha: ''
            
        })

    }

    render() {
        return (
            <div id="formulario">
                <h1>Formulário de Login</h1>
                <form onSubmit={this.login}>
                    <label>E-mail:</label>
                    <input
                        type='text'
                        value={this.state.email}
                        onChange={(e) => this.setState({ email: e.target.value })}
                    /><br />
                    <label>Senha:</label>
                    <input
                        type='password'
                        value={this.state.senha}
                        onChange={(e) => this.setState({ senha: e.target.value })}
                    /><br /><br />

                    <button type='submit'><strong class="enviar">Enviar</strong></button>
                </form>
            </div>
        )
    }
}

export default Login;