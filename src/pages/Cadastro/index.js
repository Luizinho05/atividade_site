import React, { Component } from 'react'
import './cadastro.css'

class Cadastro extends Component {

    constructor(props) {
        super(props)
        this.state = {
            nome: '',
            email: '',
            senha: '',
            sexo: '',
            preferencia: ''
        }
        this.cadastrar = this.cadastrar.bind(this)
    }

    cadastrar(event) {
        event.preventDefault()
        const { nome, email, senha, sexo, preferencia } = this.state
        if (nome === '' || email === '' || senha === '' || sexo === '' || preferencia === '') {
            alert('Preencha todos os Campos')
            return
        }
        alert(`Nome: ${nome} \nE-mail: ${email} \nSenha: ${senha} \nSexo: ${sexo} \nPreferencia: ${preferencia}`)
        this.setState({
            nome: '',
            email: '',
            senha: '',
            sexo: '',
            preferencia: ''
        })

    }



    render() {
        return (
            <div className="formulario"><br/>
                <strong id="temasiniciais">Formulário de Cadastro</strong>
                <form onSubmit={this.cadastrar}><br/>
                    <label><strong class="contato">Nome:</strong></label>
                    <input
                        type='text'
                        value={this.state.nome}
                        onChange={(e) => this.setState({ nome: e.target.value })}
                    /><br />
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
                    /><br />
                    <label><strong class="contato">Sexo:</strong></label>
                    <select
                        value={this.state.sexo}
                        onChange={(e) => this.setState({ sexo: e.target.value })}>
                        <option value=''></option>
                        <option value='feminino'>Feminino</option>
                        <option value='masculino'>Masculino</option>
                    </select><br />
                    <div value={this.state.preferencia}
                      onChange={(e) => this.setState({ preferencia: e.target.value})}><br/>
                        <legend><strong class="contato">Qual você prefere?</strong></legend>
                        <label>
                            <input class='selecionar' type="radio" name="preferencia" value="Filmes" /><strong class="contato">Filmes</strong></label><br/>
                        <label>
                            <input class='selecionar' type="radio" name="preferencia" value="Series" /><strong class="contato">Séries</strong></label><br/>
                        </div><br/>
                        
                    <button class='botaocadastro' type='submit'><strong class='cadastrar'>Cadastrar</strong></button>
                </form>
            </div>
        )
    }
}

export default Cadastro;