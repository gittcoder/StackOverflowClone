import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import {updateProfile} from '../../actions/users'

const EditProfileForm = ({currentUser,setSwitch}) => {

  

  const [name,setName] = useState(currentUser?.result?.name)
  const [about,setAbout]=useState(currentUser?.result?.about)
  const [tags,setTags] = useState("")

  const dispatch = useDispatch();

  const handleSubmit = (e)=>
  {
    e.preventDefault();
    if(tags.length===0)
    {
      dispatch(updateProfile(currentUser?.result?.id,{name,about,tags:currentUser?.result?.tags}))
    }
    else
    {
      dispatch(updateProfile(currentUser?.result?.id,{name,about,tags}))
    }
    setSwitch(false)
  }
  return (
    <div>
      <h1 className="edit-profile-title">
        </h1>
        <h2 className="edit-profile-title-2">

        </h2>

        <form className="edit-profile-form">
          <label htmlFor="name">
            <h3>Display Name</h3>
            <input type="text" value={name}  onChange={(e)=>setName(e.target.value)}/>
            <label htmlFor="about">
              <h3>About me</h3>
              <textarea name="" id="about" cols="30" rows="10" value={about} onChange={(e)=>setAbout(e.target.value)}></textarea>
            </label>
            <label htmlFor="tags">
              <h3>Watched Tags</h3>
              <p>Add tags separated by 1 space</p>
              <input type="text" id ="tags" onChange={(e)=>setTags(e.target.value.split(" "))}/>
            </label>
          </label>
          <input type="submit" value="Save Profile" className="user-submit-btn" onClick={handleSubmit}/>
          <button type="button" className="user-cancel-btn" onClick={()=>setSwitch(false)}>Cancel</button>
        </form>
    </div>
  )
}

export default EditProfileForm