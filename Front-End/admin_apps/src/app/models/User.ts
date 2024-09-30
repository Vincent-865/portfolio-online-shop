
export default interface User{
  user_id: string,
  username: string,
  password: string,
  hashed_password: string,
  created_date: string,
  modified_datetime: string,
  is_blacklisted: string,
  user_type: string,
}
