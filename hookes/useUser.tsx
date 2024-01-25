import { useEffect, useState, createContext, useContext } from 'react';
import {
  useUser as useSupaUser,
  useSessionContext,
  User
} from '@supabase/auth-helpers-react';

import { SeasonDetails, UserDetails } from '@/types';

type UserContextType = {
    accessToken: string | null;
    user: User | null;
    userDetails: UserDetails | null;
    isLoading: boolean;
    currentSeason : SeasonDetails | null;
};

export const UserContext = createContext<UserContextType | undefined>(
    undefined
);
  
  export interface Props {
    [propName: string]: any;
};

export const MyUserContextProvider = (props:Props) =>{
    const {
        session,
        isLoading: isLoadingUser,
        supabaseClient: supabase
      } = useSessionContext();
    const user = useSupaUser();
    const accessToken = session?.access_token ?? null;
    const [isLoadingData, setIsloadingData] = useState(false);
    const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
    const [currentSeason, setCurrentSeason] = useState<SeasonDetails | null>(null);

    const getUserDetails = () => supabase.from('users').select('*').single();
    const getSeasonDetails = ()=>  supabase.from('season_detail').select('season').order('season', { ascending: false }).limit(1);

    useEffect(()=>{
        if (user && !isLoadingData && !userDetails){
            setIsloadingData(true);
            Promise.allSettled([getUserDetails(),getSeasonDetails()]).then(
                (results) =>{
                    const userDetailsPromise = results[0]
                    const currentSeasonDetails = results[1]

                    if (userDetailsPromise.status === 'fulfilled')
                        setUserDetails(userDetailsPromise.value.data as UserDetails)
                    if(currentSeasonDetails.status ==='fulfilled')
                        setCurrentSeason(currentSeasonDetails.value.data as SeasonDetails)
                    setIsloadingData(false)
                }
            )
        }else if (!user && !isLoadingUser && !isLoadingData) {
            setUserDetails(null)
            setCurrentSeason(null)
        }
    },[user,isLoadingUser])

    const value = {
        accessToken,
        user,
        userDetails,
        currentSeason,
        isLoading : isLoadingUser || isLoadingData
    }

    return <UserContext.Provider value={value} {...props}/>
}

export const useUser =()=>{
    const context = useContext(UserContext)
    if (context === undefined){
        throw new Error (`useUser must be used within a MyUserContextProvider.`)
    }
    return context
}
  