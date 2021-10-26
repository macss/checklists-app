import Common from "./Common";
import { checklistOptions } from '../utils'

type keys = typeof checklistOptions[number]

interface Checklist extends Common {
  user_id: string
  vehicle_id: string
  items: Record<keys, boolean>
}

export default Checklist