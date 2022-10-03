import style from "./Profile.module.css";
const Profile = () => {
  const getName =localStorage.getItem('UserName')
    const getEmail =localStorage.getItem('UserEmail')
  return (
    <div className={style.myprofile}>
      <div className={style.myprofile__content}>
    <label>Welcome {getName}!</label>
    <br></br>
    <br></br>
    <label>Your Email Address {getEmail} </label>
    </div>
  </div>
  )
}

export default Profile