import Common from "./Common";

/**
 * The attributes a user have
 */
interface User extends Common {
  /**
   * The user name
   */
  name: string
  /**
   * The user register in the form of 200XXXX
   */
  register: number
  /**
   * The number of the user's license
   */
  license_number: number
  /**
   * The user's license expiration date, in milis
   */
  license_expiration: number
  /**
   * The management in which the user is under
   */
  management: string
}

export default User