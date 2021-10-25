/**
 * Common attributes to any data of the database
 */
interface Common {
  /**
   * Timestamp, in millis of when the data was created
   */
  created_at: number
  /**
   * The id of the data, used to facilitate data management
   */
  id: string
}

export default Common