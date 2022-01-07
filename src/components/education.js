import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import loading from "../assets/loading.gif";
import { useDispatch, useSelector } from "react-redux";
import { set_education } from "../redux/action";

const Education = () => {
  const dispatch = useDispatch();
  const [educations, setEducations] = useState([]);
  const [isloading, setisLoading] = useState(true);
  const fetchEducations = async () => {
    const result = await axios("educations");
    setEducations(result.data);
    dispatch(set_education(result.data));
  };
  const cachedEducation = useSelector((state) => state.education);
  useEffect(() => {
    if (cachedEducation.length === 0) {
      fetchEducations();
    } else {
      setEducations(cachedEducation);
    }
    setisLoading(false);
  }, []);
  return (
    <div>
      <section className="resume-section" id="education">
        <div className="resume-section-content">
          <a href="#education" className="js-scroll-trigger">
            <h2 className="mb-5">Education</h2>
          </a>
          {isloading ? (
            <img src={loading} alt="Loading..." width="200px" />
          ) : (
            educations.map((education) => (
              <div
                className="d-flex flex-column flex-md-row justify-content-between mb-5"
                key={education.id}
              >
                <div className="flex-grow-1">
                  <h3 className="mb-0">{education.academy}</h3>
                  <div className="subheading mb-3">{education.faculty}</div>
                  <div>{education.subject}</div>
                  <p>{education.per_gpa}</p>
                </div>
                <div className="flex-shrink-0">
                  <span className="text-primary">
                    {education.from_date} - {education.to_date}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
      <hr className="m-0" />
    </div>
  );
};

export default Education;
