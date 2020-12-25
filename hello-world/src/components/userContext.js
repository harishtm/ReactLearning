import React from 'react';


const UserContext = React.createContext('RaectLearning')

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer}

export default UserContext;