import { createContext } from "react";
import { User } from "../model";

const UserContext = createContext<{
  user: User | undefined, 
  setUser: (user?: User) => void,
  loading: boolean
}> ({
  user: undefined,
  setUser(user){},
  loading: true
})

export default UserContext