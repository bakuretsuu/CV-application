import { useState } from 'react'

function Experience(){
  const [info, setInfo] = useState({
    company: "",
    position: "",
    responsibilities: "",
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
      <h2>Experience</h2>

      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input type='text' name='company' placeholder='Company' value={info.company} onChange={handleChange}/>
          <input type='text' name='position' placeholder='Job Position' value={info.position} onChange={handleChange}/>
          <textarea type='text' name='responsibilities' placeholder='Main Responsibilities' value={info.responsibilities} onChange={handleChange}/>
          <input type='date' name='startDate' value={info.startDate} onChange={handleChange}/>
          <input type='date' name='endDate' value={info.endDate} onChange={handleChange}/>
        <button type='submit'>Submit</button>
        </form>
      ) : (
        <div>
          <p><strong>Company:</strong> {info.company}</p>
          <p><strong>Title:</strong> {info.position}</p>
          <p><strong>Responsibilities:</strong> {info.responsibilities}</p>
          <p><strong>From:</strong> {info.startDate}</p>
          <p><strong>To:</strong> {info.endDate}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </section>
  )
}

export default Experience;