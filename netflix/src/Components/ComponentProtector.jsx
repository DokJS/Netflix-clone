import {useNavigate} from 'react-router-dom';
import { UserAuth } from '../Context/AuthContext';

const ComponentProtector = ({children}) => {
    const {user} = UserAuth()
    const redirect = useNavigate()

    if(!user){
        redirect('/')
    }else {
        return children
    }
 
}

export default ComponentProtector