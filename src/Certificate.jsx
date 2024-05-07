import React, { useState,useCallback, useRef  } from "react";
import cirtificateImage from "./assets/cirtificate.jpg";
import { toPng } from 'html-to-image';



function Cirtificate() {
  const [name, setName] = useState("Aakash Kumar");
  const [course, SetCourse] = useState("Python");
  const [courseDate, setCourseData] = useState("03/05/2024.");
  const [isSubmit,setisSubmit] = useState(false);

  const handleSubmit =()=>{
    setisSubmit(!isSubmit);
  }



  const ref = useRef(null);

  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return
    }

    toPng(ref.current, { cacheBust: true, })
      .then((dataUrl) => {
        const link = document.createElement('a')
        link.download = 'cirtificate.jpg'
        link.href = dataUrl
        link.click()
      })
      .catch((err) => {
        console.log(err)
      })
  }, [ref])


  return (
    <div>
      <div className="ml-4">
        <label className="font-bold text-2xl" htmlFor="Name">
          Your Name
        </label>
        <input
          className="border-black bg-red-300 rounded-md px-2 py-2 mx-5 my-6"
          type="text"
          placeholder="Write Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label className="font-bold text-2xl" htmlFor="Course">
          Write Your Course
        </label>
        <input
          className="border-black bg-red-300 rounded-md px-2 py-2 mx-5 my-6"
          type="text"
          placeholder="Write your Course"
          value={course}
          onChange={(e) => SetCourse(e.target.value)}
        />

        <label className="font-bold text-2xl" htmlFor="Course Duration">
          Course Date
        </label>
        <input
          className="border-black bg-red-300 rounded-md px-2 py-2 mx-5 my-6"
          type="text"
          placeholder="DD/MM/YYYY"
          value={courseDate}
          onChange={(e) => setCourseData(e.target.value)}
        />
        <button className="border-black bg-red-500 rounded-md px-2 py-2 mx-5 my-6 text-lg font-bold hover:bg-purple-700" onClick={handleSubmit}>Submit</button>
      </div>
      
      {isSubmit?(
        <>
           <div style={{ width: "50%" }} ref={ref}>
        <div style={{ position: "relative", width: "100%" }}>
          <img
            style={{ width: "100%", height: "auto" }}
            src={cirtificateImage}
            alt="cirtificate"
          />
          <div
            className=" mt-12  flex flex-col absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-bold"
            style={{ zIndex: "1", fontSize: "15px", textAlign: "center" }}
          >
            <h1 className="text-3xl text-yellow-500">{name}</h1>
            <p className="mt-7">
              For Successfully completing the Tutedude {course} course on{" "}
              {courseDate}
            </p>
          </div>
        </div>
      </div>
      <div className="px-2 py-2 bg-red-300 mx-4 my-4 w-24 rounded-md hover:bg-red-700 items-center font-bold">
      <button onClick={onButtonClick}>Download</button>
      </div>
        </>
      ):(
        <>
        </>
      )}
     
      
    </div>
  );
}

export default Cirtificate;
