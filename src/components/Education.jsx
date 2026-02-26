import { useState } from 'react'

function Education(){
  const [info, setInfo] = useState({
    school: "",
    course: "",
    startDate: "",
    endDate: "",
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
      <h2>Education</h2>

      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input type='text' name='school' placeholder='School/College/University' value={info.school} onChange={handleChange}/>
          <input type='text' name='course' placeholder='Course' value={info.course} onChange={handleChange}/>
          <input type='date' name='startDate' value={info.startDate} onChange={handleChange}/>
          <input type='date' name='endDate' value={info.endDate} onChange={handleChange}/>
        <button type='submit'>Submit</button>
        </form>
      ) : (
        <div>
          <p><strong>University:</strong> {info.school}</p>
          <p><strong>Course:</strong> {info.course}</p>
          <p><strong>From:</strong> {info.startDate}</p>
          <p><strong>To:</strong> {info.endDate}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </section>
  )
}

export default Education;