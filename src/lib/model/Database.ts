import Checklist from "./Checklist";
import User from "./User";
import Vehicle from "./Vehicle";

/** 
 * The main database model
 */
interface Database {
  vehicles: Record<string, Vehicle>
  users: Record<string, User>
  checklists: Record<string, Checklist>
}

export default Database