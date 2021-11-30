import { collection, query } from "@firebase/firestore"
import { firestore } from "../config/firebaseConfig"
import { Database } from "../model"

type QueryOptions = {
  limit?: number,
  //startAfter?: 
}

const queryDataAt = <P extends keyof Database>(path: P, options?: QueryOptions) => {
  options = {
    limit: 25,
    ...options
  }
  let qry
  const dataRef = collection(firestore, path)

  console.log(options)
}

export default queryDataAt