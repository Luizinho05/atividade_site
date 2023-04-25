import React, { Component } from 'react'

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
            <div className="formulario">
                <h1>Formulário de Cadastro</h1>
                <form onSubmit={this.cadastrar}>
                    <label><p>Nome:</p></label>
                    <input
                        type='text'
                        value={this.state.nome}
                        onChange={(e) => this.setState({ nome: e.target.value })}
                    /><br />
                    <label><p>E-mail:</p></label>
                    <input
                        type='text'
                        value={this.state.email}
                        onChange={(e) => this.setState({ email: e.target.value })}
                    /><br />
                    <label><p>Senha:</p></label>
                    <input
                        type='password'
                        value={this.state.senha}
                        onChange={(e) => this.setState({ senha: e.target.value })}
                    /><br />
                    <label><p>Sexo:</p></label>
                    <select
                        value={this.state.sexo}
                        onChange={(e) => this.setState({ sexo: e.target.value })}>
                        <option value=''></option>
                        <option value='feminino'>Feminino</option>
                        <option value='masculino'>Masculino</option>
                    </select><br />
                    <div value={this.state.preferencia}
                      onChange={(e) => this.setState({ preferencia: e.target.value})}>
                        <legend><p>Qual você prefere?</p></legend>
                        <label>
                            <input type="radio" name="preferencia" value="Filmes" /><p>Filmes</p></label>
                        <label>
                            <input type="radio" name="preferencia" value="Series" /><p>Séries</p></label>
                        </div>
                        
                    <button type='submit'><strong class="enviar">Enviar</strong></button>
                </form>
            </div>
        )
    }
}

export default Cadastro;