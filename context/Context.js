import React, {createContext, useState, useEffect} from 'react';
import * as SecureStore from 'expo-secure-store';

export const Context = createContext();

export function Provider ({ children }){
    const [username, setUsername] = useState('')

    async function setSecureItem(key, value) {
        await SecureStore.setItemAsync(key, await JSON.stringify(value));
    }

    async function setCredentials(value){
        await setSecureItem('credentials', value)
        setUsername(value.username)
    }

    async function getSecureItem(key) {
        const ans = await (SecureStore.getItemAsync(key));
        return await JSON.parse(ans) || null
    }

    async function getCredentials() {
        return await getSecureItem('credentials');
    }

    return(
        <Context.Provider
            value={{
                username,
                setUsername,
                getCredentials,
                setCredentials,
                getSecureItem,
                setSecureItem,
            }}
        >
            {children}
        </Context.Provider>
    )
}

export default {
    Context, Provider
};