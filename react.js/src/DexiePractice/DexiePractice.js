import React, { useState } from "react";
import Dexie from "dexie";
import { useLiveQuery } from "dexie-react-hooks";


let students = [{ id: 1, name: "nna", rollno: "hello" }];
const border = {border:"1px solid black"}
function DexiePractice() {
  const [name, setName] = useState("");
  const [rollno, setRollno] = useState("");

  const db = new Dexie("practice");
  db.version(1).stores({ students: "++id,name,rollno" });
  const handleClick = async () => {
    await db.students.add({
      name,
      rollno,
    });
    setName("")
    setRollno("")
  };

  students = useLiveQuery(async () => {
    let x = await db.students.toArray();
    console.log(x);
    return x;
  }, []);

  const clearStudents = () => {
      db.students.clear()
  }

  const deleteById = (id) => {
      db.students.where("id").equals(id).delete()
  }
  return (
    <div>
      <input
        type="input"
        placeholder="Enter Your Name Here..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter Your Roll No Here..."
        value={rollno}
        onChange={(e) => setRollno(e.target.value)}
      />
      <button onClick={handleClick}>Add Student</button>
      <table style={border}>
        <tr style={border}>
          <th style={border}>ID</th>
          <th style={border}>NAME</th>
          <th style={border}>ROLL NO</th>
        </tr>
        {students &&
          students.map((student) => (
            <tr style={border}>
              <td style={border}>{student.id}</td>
              <td style={border}>{student.name}</td>
              <td style={border}>{student.rollno}</td>
              <td style={border}><button onClick={() => deleteById(student.id)}>Delete</button></td>
            </tr>
          ))}
      </table>
      <button onClick={clearStudents}>Clear StudentsDB</button>
    </div>
  );
}

export default DexiePractice;
