import './style.css'

function Home() {

  const users = [{
    id: 'dmknsvjsjnvjnv',
    name: 'Bruno',
    age: 32,
    email: 'brunodamente@gmail.com',
  }, {
    id: 'daahhahahah',
    name: 'Elaine',
    age: 23,
    email: 'elainedamente@gmail.com',
  }]

  return (
    <div className='container'>
      <form>
        <h1>Cadastro de usuarios</h1>
        <input name='nome' type='text' placeholder='Digite seu nome'/>
        <input name='idade' type='number' placeholder='Digite sua idade' />
        <input name='email' type='email' placeholder='Digite seu email'/>
        <button type='button'>Cadastrar</button>
      </form>

      {users.map(user => (
        <div key={user.id} className='card'>
          <div>
            <p>Nome: <span>{user.name}</span></p>
            <p>Idade: <span>{user.age}</span> </p>
            <p>Email: <span>{user.email}</span> </p>
          </div>
          <div>
            <button>
              <a href='https://svgshare.com/s/16qg' ><img src='https://svgshare.com/i/16qg.svg' title='trash' /></a>
            </button>
          </div>
        </div>
      ))}


    </div>

  )
}

export default Home
