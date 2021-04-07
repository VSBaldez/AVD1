import React, { Component } from 'react'

class Welcome extends Component {
  
  handleSubmit = (e) => {

    e.preventDefault();

    const profiles = {
      name: e.target.elements.full_name.value,
      email: e.target.elements.email.value,
      cpf: e.target.elements.cpf.value,
      phone: e.target.elements.phone.value
    };

    localStorage.setItem('@welcome-app/profiles', JSON.stringify(profiles));
    //localStorage.setItem('@welcome-app/profiles', profiles);
    //document.getElementById("profile_list").innerHTML = document.getElementById("profile_list").innerHTML + profiles.name;

    //window.location.reload();
  }

  handleLogout = () => {
    //localStorage.removeItem('@welcome-app/name');
    //window.location.reload();
  }

  render() {
    const storage_profiles = localStorage.getItem('@welcome-app/profiles');
    const list = JSON.parse(storage_profiles);
    if(list!=null){
    const storage_name = storage_profiles.full_name;
    }
    return (
      <div>
      <form style={styles.container} onSubmit={this.handleSubmit}>
        <p>REACT - CADASTRO</p>
        <input style={styles.formItem} type="text" name="full_name" placeholder="Nome" required />
        <input style={styles.formItem} type="text" name="email" placeholder="E-mail" required />
        <input style={styles.formItem} type="text" name="cpf" placeholder="CPF" required />
        <input style={styles.formItem} type="text" name="phone" placeholder="Telefone" required />
        <button type="submit" style={styles.submitButton}>Cadastrar</button>
      </form>
      <br></br>
      <div style={styles.container}>
          <p>LISTA DE NOMES</p>
          <p id="profile_list">{storage_profiles}</p>
      </div>
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    textAlign: 'center',
    flexDirection: 'column',
    minWidth: '300px',
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 20px',
    background: 'rgb(255, 255, 255)',
    borderRadius: '4px',
    padding: '30px 20px'
  },
  submitButton: {
    height: '40px',
    textAlign: 'center',
    alignItems: 'center',
    borderRadius: '4px',
    fontWeight: 'bold',
    fontSize: '14px',
    border: 0,
    color: '#fff',
    background: '#000',
    marginTop: '5px',
  },
  formItem: {
    height: '40px',
    padding: '0 15px',
    border: '1px solid #eee',
    borderRadius: '4px',
    marginBottom: '10px',
    color: '#444'
  }
}

export default Welcome;
