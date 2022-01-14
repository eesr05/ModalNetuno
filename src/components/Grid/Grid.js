import Phot from './Photos'
import './styles.css'

const Users = () => {
   
  
    return (
      <div className="users">
        {Phot.map((user) => (
          <div className="user" key={user.id}>
            <img src={user.src} alt="Foto" />
            {user.title}
            
          </div>
        ))}
      </div>
    );
  };

  export default Users