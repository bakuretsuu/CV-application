import { useState } from 'react'

function GeneralInfo(){
  const [info, setInfo] = useState({
    name: "",
    email: "",
    phone: "",
  })

  const [isEditing, setIsEditing] = useState(true);

  function handleChange(e){
    const { name, value} = e.target;

    setInfo ({
      ...info,
      [name]: value,
    })
  }

  function handleSubmit(e){
    e.preventDefault();
    setIsEditing(false);
  }

  function handleEdit(){
    setIsEditing(true);
  }

  return(
    <section>
      <h2>General Information</h2>

      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input type='text' name='name' placeholder='Name' value={info.name} onChange={handleChange}/>
          <input type='email' name='email' placeholder='Email' value={info.email} onChange={handleChange}/>
          <input type='tel' name='phone' placeholder='Phone' value={info.phone} onChange={handleChange}/>
        <button type='submit'>Submit</button>
        </form>
      ) : (
        <div>
          <p><strong>Name:</strong> {info.name}</p>
          <p><strong>Email:</strong> {info.email}</p>
          <p><strong>Phone:</strong> {info.phone}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </section>
  )
}

export default GeneralInfo;