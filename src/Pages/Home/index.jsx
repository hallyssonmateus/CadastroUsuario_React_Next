import { useEffect, useState, useRef } from 'react'
import './style.css'
import api from '../../services/api'



function Home() {

  const [users, setUsers] = useState([])


  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()


  //Mostrar informações dos usuarios no Front
  async function getUsers(){
    const usersFromApi = await api.get('/usuarios')
    setUsers(usersFromApi.data)
  }

  //Criar novos usuarios
  async function createUsers(){
    await api.post('/usuarios', {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value
    })    
    getUsers()
  }

  //Deletar informações dos usuarios
  async function deleteUsers(id){
    await api.delete(`/usuarios/${id}`)    
    getUsers()
  }

  useEffect(() => {
    getUsers()
  }, [])
  

  return (
    <div className='container'>
      <form>
        <h1>Cadastro de usuarios</h1>
        <input name='nome' type='text' placeholder='Digite seu nome' ref={inputName}/>
        <input name='idade' type='number' placeholder='Digite sua idade' ref={inputAge}/>
        <input name='email' type='email' placeholder='Digite seu email' ref={inputEmail}/>
        <button type='button' onClick={createUsers}>Cadastrar</button>
      </form>

      {users.map(user => (
        <div key={user.id} className='card'>
          <div>
            <p>Nome: <span>{user.name}</span></p>
            <p>Idade: <span>{user.age}</span> </p>
            <p>Email: <span>{user.email}</span> </p>
          </div>
          <div>
            <button onClick={() => deleteUsers(user.id)}>
            <i className="fas fa-trash" style={{ color: "#e83030" }}></i>
            </button>
          </div>
        </div>
      ))}


    </div>

  )
}

export default Home
