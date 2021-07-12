import {Link} from 'react-router-dom';

import logout from '../authentication/logout';



const Homepage = () => {


    return (
        <div>
            <p>Here goes all the relevant info about our app :)</p>
            <button>
                <Link to='/friendcontainer'>Friends List</Link>
            </button>
            <button onClick={logout} >
                Logout
            </button>

        </div>
    )

}

export default Homepage;