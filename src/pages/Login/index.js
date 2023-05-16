import React, { Component } from 'react'
import './login.css'

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
            <div class="formulario"><br/>
                <strong id="temasiniciais">Formulário de Login</strong>
                
                <form onSubmit={this.login}><br/>
                    <label><strong class="contato">E-mail:</strong></label>
                    <input
                        type='email'
                        value={this.state.email}
                        onChange={(e) => this.setState({ email: e.target.value })}
                    /><br />
                    <label><strong class="contato">Senha:</strong></label>
                    <input
                        type='password'
                        value={this.state.senha}
                        onChange={(e) => this.setState({ senha: e.target.value })}
                    /><br /><br />

                    <button class='botaologin' type='submit'><strong class="login">Logar</strong></button>
                </form>
            </div>
        )
    }
}

export default Login;