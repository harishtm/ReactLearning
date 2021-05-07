import {useState} from 'react';
import useInput from '../hooks/useInput';


function UserForm() {

    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');

    // The above has been achieved via custom hooks
    const [firstName, bindFirstName, resetFirstName] = useInput('')
    const [lastName, bindLastName, resetLastName] = useInput('')

    const saveFormHandler = e => {
        e.preventDefault();
        alert(`Hello ${firstName} ${lastName}`);
        resetFirstName()
        resetLastName()
    }

    return(
        <div>
            <form onSubmit={saveFormHandler}>
                <div>
                    <label>First Name</label>
                    <input 
                        type="text"
                        // value={firstName}
                        // onChange={e => setFirstName(e.target.value)}
                        {...bindFirstName}
                        />
                </div>
                <div>
                    <label>Last Name</label>
                    <input
                        type="text"
                        // onChange={e => setLastName(e.target.value)}
                        // value={lastName}
                        {...bindLastName}
                    />
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default UserForm;