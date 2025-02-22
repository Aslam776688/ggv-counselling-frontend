import React, { useEffect, useState } from "react";
import getCuetProvidedData from "../middleware/cuet-data-api.js";

const Registration = () => {
  const [cuetData, setCuetData] = useState(null);
  const [student, setStudent] = useState({
    formNumber: "",
    formNumberDoc: "",
    cuetApplicationNo: "",
    applicantName: "",
    fatherName: "",
    motherName: "",
    emailId: "",
    phoneNumber: "",
    gender: "",
    bloodGroup: "",
    category: "",
    categoryDoc: "",
    pSelectCountry: "",
    pOtherCountry: "",
    pPinCode: "",
    pState: "",
    pDistrict: "",
    pCity: "",
    pAddress: "",
    confPermanentAdd: "",
    cSelectCountry: "",
    cOtherCountry: "",
    cPinCode: "",
    cState: "",
    cDistrict: "",
    cCity: "",
    cAddress: "",
    applyForStream: "",
    courses: "",
    cuetMarks: "",
    scoreCardDoc: "",
    matricMarks: "",
    matricMarksDoc: "",
    interMarks: "",
    interMarksDoc: "",
    ugMarks: "",
    ugMarksDoc: "",
    photoDoc: "",
    signDoc: "",


  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCuetProvidedData();
      setCuetData(data);
      // console.log(data.data);
    };
    fetchData();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setStudent((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (event) => {
    const { name } = event.target;
    const file = event.target.files[0];
    console.log(file.size);
    if (file.size > 48 * 1024 && file.size < 260 * 1024) {
      const value = file.name;
      console.log(value);

      // setStudent((prev) => ({ ...prev, [name]: value }));
      return;
    }
    alert("File size should be grater then 50kb and less than 250 kb ");
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(student);
  };

  return (
    <>
      {/* ----------- Start: Heading Text ----------- */}
      <div className="text-xl md:text-2xl mb-2 py-10 text-center bg-teal-600 text-white pt-28">
        Counseling Registration <span className="font-extrabold"> 2025-26</span>
      </div>
      {/* ----------- End: Heading Text ----------- */}

      <div className="px-2 md:px-24 md:flex justify-center mb-30">
        <div className="px-8 py-14 md:px-12 md:py-14 md:size-[50%] bg-slate-100 flex flex-col justify-center rounded shadow-xl">
          {/* ----------- Start: Registration Form here ----------- */}

          <form autoComplete="off" onSubmit={handleFormSubmit}>
            {/* ----------- Form number field ----------- */}

            <div className="max-full mb-6">
              <label
                htmlFor="formNumber"
                className="block text-base font-normal mb-2"
              >
                Form Number <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                id="formNumber"
                name="formNumber"
                className="py-3 px-4 block w-full border-1 bg-gray-200 border-gray-300 rounded-lg text-base text-stone-700 placeholder-neutral-400 focus:border-1 focus:outline-blue-400"
                placeholder="Enter form number"
                value={student.formNumber}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* ----------- Form document upload field ----------- */}

            <div className="max-full mb-6">
              <label
                htmlFor="formNumberDoc"
                className="block text-base font-normal mb-2"
              >
                Form Upload
                <span className="text-sm text-stone-500">
                  (only jpg, jpeg, pdf)
                </span>
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="file"
                id="formNumberDoc"
                name="formNumberDoc"
                className="py-2 px-4 w-full md:size-[60%] bg-gray-200 border-1 border-gray-300 rounded-lg text-base text-stone-700 placeholder-neutral-400 focus:border-1 focus:outline-blue-400 cursor-pointer file:me-4 file:py-[6px] file:px-4 file:rounded-lg file:border-0 file:text-sm file:bg-blue-500 file:text-white hover:file:bg-blue-500 file:disabled:opacity-50 file:cursor-pointer"
                accept=".jpg, .jpeg, .pdf"
                required
                value={student.formNumberDoc}
                onChange={handleFileUpload}
              />
            </div>

            {/* ----------- CUET Application number field ----------- */}

            <div className="max-full mb-6">
              <label
                htmlFor="cuetApplicationNo"
                className="block text-base font-normal mb-2"
              >
                CUET Application Number
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                id="cuetApplicationNo"
                name="cuetApplicationNo"
                className="py-3 px-4 block w-full border-1 border-gray-300 rounded-lg text-base text-stone-700 placeholder-neutral-400 focus:border-1 focus:outline-blue-400"
                placeholder="Enter CUET application number"
                value={student.cuetApplicationNo}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* ----------- Applicant Name field ----------- */}

            <div className="max-full mb-6">
              <label
                htmlFor="applicantName"
                className="block text-base font-normal mb-2"
              >
                Applicant Name <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                id="applicantName"
                name="applicantName"
                className="py-3 px-4 block w-full border-1 border-gray-300 rounded-lg text-base text-stone-700 placeholder-neutral-400 focus:border-1 focus:outline-blue-400"
                placeholder="Enter your name"
                value={student.applicantName}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* ----------- Father's Name field ----------- */}

            <div className="max-full mb-6">
              <label
                htmlFor="fatherName"
                className="block text-base font-normal mb-2"
              >
                Father's Name <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                id="fatherName"
                name="fatherName"
                className="py-3 px-4 block w-full border-1 border-gray-300 rounded-lg text-base text-stone-700 placeholder-neutral-400 focus:border-1 focus:outline-blue-400"
                placeholder="Enter father's name"
                value={student.fatherName}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* ----------- Mother's Name field ----------- */}

            <div className="max-full mb-6">
              <label
                htmlFor="motherName"
                className="block text-base font-normal mb-2"
              >
                Mother's Name <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                id="motherName"
                name="motherName"
                className="py-3 px-4 block w-full border-1 border-gray-300 rounded-lg text-base text-stone-700 placeholder-neutral-400 focus:border-1 focus:outline-blue-400"
                placeholder="Enter mother's name"
                value={student.motherName}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* ----------- Email address field ----------- */}

            <div className="max-full mb-6">
              <label
                htmlFor="emailId"
                className="block text-base font-normal mb-2"
              >
                Email ID <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="email"
                id="emailId"
                name="emailId"
                className="py-3 px-4 block w-full border-1 border-gray-300 rounded-lg text-base text-stone-700 placeholder-neutral-400 focus:border-1 focus:outline-blue-400"
                placeholder="Enter email id"
                value={student.emailId}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* ----------- Phone number field ----------- */}

            <div className="max-full mb-6">
              <label
                htmlFor="phoneNumber"
                className="block text-base font-normal mb-2"
              >
                Phone Number <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="number"
                id="phoneNumber"
                name="phoneNumber"
                className="py-3 px-4 block w-full border-1 border-gray-300 rounded-lg text-base text-stone-700 placeholder-neutral-400 focus:border-1 focus:outline-blue-400 focus:ring-0 [&::-webkit-inner-spin-button]:appearance-none "
                placeholder="Enter phone number"
                value={student.phoneNumber}
                onChange={handleInputChange}
                required
                min={1000000000}
                max={9999999999}
              />
            </div>

            {/* ----------- Gender selection field ----------- */}

            <div className="max-full mb-6">
              <label
                htmlFor="gender"
                className="block text-base font-normal mb-2"
              >
                Gender <span className="text-red-500 ml-1">*</span>
              </label>
              <div id="gender" className="flex gap-x-6 ml-3">
                <label className="flex gap-x-3 text-stone-700 cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    onChange={handleInputChange}
                    required
                  />
                  Male
                </label>
                <label className="flex gap-x-3 text-stone-700 cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    onChange={handleInputChange}
                    required
                  />
                  Female
                </label>
                <label className="flex gap-x-3 text-stone-700 cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    value="other"
                    onChange={handleInputChange}
                    required
                  />
                  Other
                </label>
              </div>
            </div>

            {/* ----------- Blood Group selection field ----------- */}

            <div className="max-full mb-6" aria-label="Select blood Group">
              <label
                htmlFor="bloodGroup"
                className="block text-base font-normal mb-2"
              >
                Blood Group <span className="text-red-500 ml-1">*</span>
              </label>
              <select
                id="bloodGroup"
                name="bloodGroup"
                className="py-3 px-4 w-full border-1 border-gray-300 rounded-lg focus:border-1 text-stone-700 focus:outline-blue-400 cursor-pointer"
                onChange={handleInputChange}
              >
                <option value="" selected>
                  Select Blood Group
                </option>
                <option value="a+">A+</option>
                <option value="a-">A-</option>
                <option value="b+">B+</option>
                <option value="b-">B-</option>
                <option value="ab+">AB+</option>
                <option value="ab-">AB-</option>
                <option value="o+">O+</option>
                <option value="o-">O-</option>
                <option value="not-known">Not Known</option>
              </select>
            </div>

            {/* ----------- Category selection field ----------- */}

            <div className="max-full mb-6">
              <label
                htmlFor="category"
                className="block text-base font-normal mb-2"
              >
                Category <span className="text-red-500 ml-1">*</span>
              </label>
              <select
                id="category"
                name="category"
                className="py-3 px-4 w-full border-1 border-gray-300 rounded-lg focus:border-1 text-stone-700 focus:outline-blue-400 cursor-pointer"
                onChange={handleInputChange}
              >
                <option value="general" selected>
                  General
                </option>
                <option value="ews">EWS</option>
                <option value="obc">OBC</option>
                <option value="sc">SC</option>
                <option value="st">ST</option>
                <option value="pwd">Pwd</option>
              </select>
            </div>

            {/* ----------- Category certificate documnet upload field ----------- */}

            <div className="max-full mb-6">
              <label
                htmlFor="categoryDoc"
                className="block text-base font-normal mb-2"
              >
                <span id="categoryLabel"></span> Certificate Upload
                <span className="text-sm text-stone-500">
                  (only jpg, jpeg, pdf)
                </span>
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="file"
                id="categoryDoc"
                name="categoryDoc"
                className="py-2 px-4 w-full md:size-[60%] border-1 border-gray-300 rounded-lg text-base text-stone-700 placeholder-neutral-400 focus:border-1 focus:outline-blue-400 cursor-pointer file:me-4 file:py-[6px] file:px-4 file:rounded-lg file:border-0 file:text-sm file:bg-blue-500 file:text-white hover:file:bg-blue-500 file:disabled:opacity-50 file:cursor-pointer"
                accept=".jpg, .jpeg, .pdf"
                required
              />
            </div>


            {/* ----------- permanent address -----------*/}

            <h2 className="my-4 font-medium text-xl">Parmanent Address</h2>
            <hr className="mb-5 text-stone-300" />

            {/* ----------- Permanent Country selection field ----------- */}

            <div className="max-full mb-6" aria-label="Select your Country">
              <label
                htmlFor="pSelectCountry"
                className="block text-base font-normal mb-2"
              >
                Country <span className="text-red-500 ml-1">*</span>
              </label>
              <select
                id="pSelectCountry"
                name="pSelectCountry"
                className="py-3 px-4 w-full border-1 border-gray-300 rounded-lg focus:border-1 text-stone-700 focus:outline-blue-400 cursor-pointer"
                onChange={handleInputChange}
              >
                <option value="" selected>
                  Select Country
                </option>
                <option value="india">India</option>
                <option value="nepal">Nepal</option>
                <option value="bhutan">Bhutan</option>
                <option value="afghanistan">Afghanistan</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* ----------- Permanent Other  Country  field ----------- */}

            <div className="max-full mb-6">
              <label
                htmlFor="pOtherCountry"
                className="block text-base font-normal mb-2"
              >
                Other Country <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                id="pOtherCountry"
                name="pOtherCountry"
                className="py-3 px-4 block w-full border-1 border-gray-300 rounded-lg text-base text-stone-700 placeholder-neutral-400 focus:border-1 focus:outline-blue-400"
                placeholder="Enter your Country"
                value={student.pOtherCountry}
                onChange={handleInputChange}
                required
              />
            </div>


            {/* ----------- Permanent Present Pin Code field ----------- */}


            <div className="max-full mb-6">
              <label
                htmlFor="pPinCode"
                className="block text-base font-normal mb-2"
              >
                Pin Code <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="number"
                id="pPinCode"
                name="pPinCode"
                className="py-3 px-4 block w-full border-1 border-gray-300 rounded-lg text-base text-stone-700 placeholder-neutral-400 focus:border-1 focus:outline-blue-400 focus:ring-0 [&::-webkit-inner-spin-button]:appearance-none "
                placeholder="Enter Pin Code"
                value={student.pPinCode}
                onChange={handleInputChange}
                required
              />
            </div>


            {/* ----------- Permanent State field ----------- */}
            <div className="max-full mb-6">
              <label
                htmlFor="pState"
                className="block text-base font-normal mb-2"
              >
                State/U.T <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                id="pState"
                name="pState"
                className="py-3 px-4 block w-full border-1 border-gray-300 rounded-lg text-base text-stone-700 placeholder-neutral-400 focus:border-1 focus:outline-blue-400"
                placeholder="Enter your State/U.T"
                value={student.pState}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* ----------- Permanent District field -----------  */}

            <div className="max-full mb-6">
              <label
                htmlFor="pDistrict"
                className="block text-base font-normal mb-2"
              >
                District <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                id="pDistrict"
                name="pDistrict"
                className="py-3 px-4 block w-full border-1 border-gray-300 rounded-lg text-base text-stone-700 placeholder-neutral-400 focus:border-1 focus:outline-blue-400"
                placeholder="Enter your District"
                value={student.pDistrict}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* ----------- Permanent City field ----------- */}

            <div className="max-full mb-6">
              <label
                htmlFor="pCity"
                className="block text-base font-normal mb-2"
              >
                City <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                id="pCity"
                name="pCity"
                className="py-3 px-4 block w-full border-1 border-gray-300 rounded-lg text-base text-stone-700 placeholder-neutral-400 focus:border-1 focus:outline-blue-400"
                placeholder="Enter your City"
                value={student.pCity}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* ----------- Permanent Address field ----------- */}

            <div className="max-full mb-6">
              <label
                htmlFor="pAddress"
                className="block text-base font-normal mb-2"
              >
                Address <span className="text-red-500 ml-1">*</span>
              </label>
              <textarea
                id="pAddress"
                name="pAddress"
                className="py-3 px-4 block w-full border-1 border-gray-300 rounded-lg text-base text-stone-700 placeholder-neutral-400 focus:border-1 focus:outline-blue-400"
                placeholder="Enter your address"
                value={student.pAddress}
                onChange={handleInputChange}
                required
              />
            </div>


            {/* ----------- same as permanent address ----------- */}

            <div className="mb-6 flex flex-row items-center my-8">
              <input
                type="checkbox"
                id="confPermanentAdd"
                name="confPermanentAdd"
                className="p-11 block"
                value={student.confPermanentAdd}
              />
              <label
                htmlFor="confPermanentAdd"
                className="block text-base font-normal ml-3"
              >
                Same as Permanent Address
              </label>
            </div>

            {/* ----------- Correspondence Address -----------*/}

            <h2 className="my-4 font-medium text-xl">Correspondence Address</h2>
            <hr className="mb-5 text-stone-300" />

            {/* ----------- Correspondence Country selection field ----------- */}

            <div className="max-full mb-6" aria-label="Select your Country">
              <label
                htmlFor="cSelectCountry"
                className="block text-base font-normal mb-2"
              >
                Country <span className="text-red-500 ml-1">*</span>
              </label>
              <select
                id="cSelectCountry"
                name="cSelectCountry"
                className="py-3 px-4 w-full border-1 border-gray-300 rounded-lg focus:border-1 text-stone-700 focus:outline-blue-400 cursor-pointer"
                onChange={handleInputChange}
              >
                <option value="" selected>
                  Select Country
                </option>
                <option value="india">India</option>
                <option value="nepal">Nepal</option>
                <option value="bhutan">Bhutan</option>
                <option value="afghanistan">Afghanistan</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* ----------- Correspondence Other  Country  field ----------- */}
            <div className="max-full mb-6">
              <label
                htmlFor="cOtherCountry"
                className="block text-base font-normal mb-2"
              >
                Other Country <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                id="cOtherCountry"
                name="cOtherCountry"
                className="py-3 px-4 block w-full border-1 border-gray-300 rounded-lg text-base text-stone-700 placeholder-neutral-400 focus:border-1 focus:outline-blue-400"
                placeholder="Enter your Country"
                value={student.cOtherCountry}
                onChange={handleInputChange}
                required
              />
            </div>


            {/* ----------- Correspondence Present Pin Code field ----------- */}


            <div className="max-full mb-6">
              <label
                htmlFor="cPinCode"
                className="block text-base font-normal mb-2"
              >
                Pin Code <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="number"
                id="cPinCode"
                name="cPinCode"
                className="py-3 px-4 block w-full border-1 border-gray-300 rounded-lg text-base text-stone-700 placeholder-neutral-400 focus:border-1 focus:outline-blue-400 focus:ring-0 [&::-webkit-inner-spin-button]:appearance-none "
                placeholder="Enter Pin Code"
                value={student.cPinCode}
                onChange={handleInputChange}
                required
              />
            </div>


            {/* ----------- Correspondence State field ----------- */}
            <div className="max-full mb-6">
              <label
                htmlFor="cState"
                className="block text-base font-normal mb-2"
              >
                State/U.T <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                id="cState"
                name="cState"
                className="py-3 px-4 block w-full border-1 border-gray-300 rounded-lg text-base text-stone-700 placeholder-neutral-400 focus:border-1 focus:outline-blue-400"
                placeholder="Enter your State/U.T"
                value={student.cState}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* ----------- Correspondence District field -----------  */}

            <div className="max-full mb-6">
              <label
                htmlFor="cDistrict"
                className="block text-base font-normal mb-2"
              >
                District <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                id="cDistrict"
                name="cDistrict"
                className="py-3 px-4 block w-full border-1 border-gray-300 rounded-lg text-base text-stone-700 placeholder-neutral-400 focus:border-1 focus:outline-blue-400"
                placeholder="Enter your District"
                value={student.cDistrict}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* ----------- Correspondence City field ----------- */}

            <div className="max-full mb-6">
              <label
                htmlFor="cCity"
                className="block text-base font-normal mb-2"
              >
                City <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                id="cCity"
                name="cCity"
                className="py-3 px-4 block w-full border-1 border-gray-300 rounded-lg text-base text-stone-700 placeholder-neutral-400 focus:border-1 focus:outline-blue-400"
                placeholder="Enter your City"
                value={student.cCity}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* ----------- Correspondence Address field ----------- */}

            <div className="max-full mb-6">
              <label
                htmlFor="cAddress"
                className="block text-base font-normal mb-2"
              >
                Address <span className="text-red-500 ml-1">*</span>
              </label>
              <textarea
                id="cAddress"
                name="cAddress"
                className="py-3 px-4 block w-full border-1 border-gray-300 rounded-lg text-base text-stone-700 placeholder-neutral-400 focus:border-1 focus:outline-blue-400"
                placeholder="Enter your address"
                value={student.cAddress}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* ----------- Apply for Stream ----------- */}

            <div className="max-full mb-6" aria-label="Select your Country">
              <label
                htmlFor="applyForStream"
                className="block text-base font-normal mb-2"
              >
                Apply for Stream <span className="text-red-500 ml-1">*</span>
              </label>
              <select
                id="applyForStream"
                name="applyForStream"
                className="py-3 px-4 w-full border-1 border-gray-300 rounded-lg focus:border-1 text-stone-700 focus:outline-blue-400 cursor-pointer"
                onChange={handleInputChange}
              >
                <option value="ug">UG</option>
                <option value="pg">PG</option>
              </select>
            </div>

            {/* ----------- Courses field ----------- */}
            <div className="mb-8">
              <label
                htmlFor="courses"
                className="block text-base font-normal mb-2"
              >
                Course <span className="text-red-500 ml-1">*</span>
              </label>
              <div className="flex flex-row items-center gap-5">
                <div className="flex flex-row items-center ">
                  <input
                    type="checkbox"
                    id="confPermanentAdd"
                    name="confPermanentAdd"
                    className="p-11 block"
                  />
                  <label
                    htmlFor="confPermanentAdd"
                    className="block text-base font-normal ml-3"
                  >
                    BCA
                  </label>
                </div>
                <div className="flex flex-row items-center ">
                  <input
                    type="checkbox"
                    id="confPermanentAdd"
                    name="confPermanentAdd"
                    className="p-11 block"
                  />
                  <label
                    htmlFor="confPermanentAdd"
                    className="block text-base font-normal ml-3"
                  >
                    BSC-CS
                  </label>
                </div>
                <div className="flex flex-row items-center ">
                  <input
                    type="checkbox"
                    id="confPermanentAdd"
                    name="confPermanentAdd"
                    className="p-11 block"
                  />
                  <label
                    htmlFor="confPermanentAdd"
                    className="block text-base font-normal ml-3"
                  >
                    MCA
                  </label>
                </div>
                <div className="flex flex-row items-center ">
                  <input
                    type="checkbox"
                    id="confPermanentAdd"
                    name="confPermanentAdd"
                    className="p-11 block"
                  />
                  <label
                    htmlFor="confPermanentAdd"
                    className="block text-base font-normal ml-3"
                  >
                    MSC-CS
                  </label>
                </div>
              </div>
            </div>


            {/* Cuet Marks field */}

            <div className="max-full mb-6">
              <label
                htmlFor="cuetMarks"
                className="block text-base font-normal mb-2"
              >
                CUET Marks <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="number"
                id="cuetMarks"
                name="cuetMarks"
                className="py-3 px-4 block w-full border-1 border-gray-300 rounded-lg text-base text-stone-700 placeholder-neutral-400 focus:border-1 focus:outline-blue-400 focus:ring-0 [&::-webkit-inner-spin-button]:appearance-none "
                placeholder="Enter your Cuet Marks"
                value={student.cuetMarks}
                onChange={handleInputChange}
                required
              />
            </div>
            {/* CUET Score Card Document */}

            <div className="max-full mb-6">
              <label
                htmlFor="scoreCardDoc"
                className="block text-base font-normal mb-2"
              >
                <span id="categoryLabel"></span> CUET Score Card
                <span className="text-sm text-stone-500">
                  (only jpg, jpeg, pdf)
                </span>
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="file"
                id="scoreCardDoc"
                name="scoreCardDoc"
                className="py-2 px-4 w-full md:size-[60%] border-1 border-gray-300 rounded-lg text-base text-stone-700 placeholder-neutral-400 focus:border-1 focus:outline-blue-400 cursor-pointer file:me-4 file:py-[6px] file:px-4 file:rounded-lg file:border-0 file:text-sm file:bg-blue-500 file:text-white hover:file:bg-blue-500 file:disabled:opacity-50 file:cursor-pointer"
                accept=".jpg, .jpeg, .pdf"
                required
              />
            </div>

            {/* Matriculation/10th Marks field */}

            <div className="max-full mb-6">
              <label
                htmlFor="matricMarks"
                className="block text-base font-normal mb-2"
              >
                Matriculation/10th Marks<span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="number"
                id="matricMarks"
                name="matricMarks"
                className="py-3 px-4 block w-full border-1 border-gray-300 rounded-lg text-base text-stone-700 placeholder-neutral-400 focus:border-1 focus:outline-blue-400 focus:ring-0 [&::-webkit-inner-spin-button]:appearance-none "
                placeholder="Enter your Matriculation Marks"
                value={student.matricMarks}
                onChange={handleInputChange}
                required
                min={1000000000}
                max={9999999999}
              />
            </div>

            {/* Matriculation Marksheet Upload */}

            <div className="max-full mb-6">
              <label
                htmlFor="matricMarksDoc"
                className="block text-base font-normal mb-2"
              >
                <span id="categoryLabel"></span> Matric/10th Marksheet
                <span className="text-sm text-stone-500">
                  (only jpg, jpeg, pdf)
                </span>
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="file"
                id="matricMarksDoc"
                name="matricMarksDoc"
                className="py-2 px-4 w-full md:size-[60%] border-1 border-gray-300 rounded-lg text-base text-stone-700 placeholder-neutral-400 focus:border-1 focus:outline-blue-400 cursor-pointer file:me-4 file:py-[6px] file:px-4 file:rounded-lg file:border-0 file:text-sm file:bg-blue-500 file:text-white hover:file:bg-blue-500 file:disabled:opacity-50 file:cursor-pointer"
                accept=".jpg, .jpeg, .pdf"
                required
              />
            </div>


            {/* Intermediate/12th Marks field */}

            <div className="max-full mb-6">
              <label
                htmlFor="interMarks"
                className="block text-base font-normal mb-2"
              >
                Inter/12th Marks<span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="number"
                id="interMarks"
                name="interMarks"
                className="py-3 px-4 block w-full border-1 border-gray-300 rounded-lg text-base text-stone-700 placeholder-neutral-400 focus:border-1 focus:outline-blue-400 focus:ring-0 [&::-webkit-inner-spin-button]:appearance-none "
                placeholder="Enter your Matriculation Marks"
                value={student.interMarks}
                onChange={handleInputChange}
                required
                min={1000000000}
                max={9999999999}
              />
            </div>

            {/* Intermediate Marksheet Upload */}

            <div className="max-full mb-6">
              <label
                htmlFor="interMarksDoc"
                className="block text-base font-normal mb-2"
              >
                <span id="categoryLabel"></span> Inter/12th Marksheet
                <span className="text-sm text-stone-500">
                  (only jpg, jpeg, pdf)
                </span>
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="file"
                id="interMarksDoc"
                name="interMarksDoc"
                className="py-2 px-4 w-full md:size-[60%] border-1 border-gray-300 rounded-lg text-base text-stone-700 placeholder-neutral-400 focus:border-1 focus:outline-blue-400 cursor-pointer file:me-4 file:py-[6px] file:px-4 file:rounded-lg file:border-0 file:text-sm file:bg-blue-500 file:text-white hover:file:bg-blue-500 file:disabled:opacity-50 file:cursor-pointer"
                accept=".jpg, .jpeg, .pdf"
                required
              />
            </div>


            {/* UG Marks field */}

            <div className="max-full mb-6">
              <label
                htmlFor="ugMarks"
                className="block text-base font-normal mb-2"
              >
                UG Marks<span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="number"
                id="ugMarks"
                name="ugMarks"
                className="py-3 px-4 block w-full border-1 border-gray-300 rounded-lg text-base text-stone-700 placeholder-neutral-400 focus:border-1 focus:outline-blue-400 focus:ring-0 [&::-webkit-inner-spin-button]:appearance-none "
                placeholder="Enter UG marks"
                value={student.ugMarks}
                onChange={handleInputChange}
                required
                min={1000000000}
                max={9999999999}
              />
            </div>

            {/* UG Marksheet section */}

            <div className="max-full mb-6">
              <label
                htmlFor="ugMarksDoc"
                className="block text-base font-normal mb-2"
              >
                <span id="categoryLabel"></span> UG Marksheet
                <span className="text-sm text-stone-500">
                  (only jpg, jpeg, pdf)
                </span>
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="file"
                id="ugMarksDoc"
                name="ugMarksDoc"
                className="py-2 px-4 w-full md:size-[60%] border-1 border-gray-300 rounded-lg text-base text-stone-700 placeholder-neutral-400 focus:border-1 focus:outline-blue-400 cursor-pointer file:me-4 file:py-[6px] file:px-4 file:rounded-lg file:border-0 file:text-sm file:bg-blue-500 file:text-white hover:file:bg-blue-500 file:disabled:opacity-50 file:cursor-pointer"
                accept=".jpg, .jpeg, .pdf"
                required
              />
            </div>

            {/* Candidate photograph upload */}

            <div className="max-full mb-6">
              <label
                htmlFor="photoDoc"
                className="block text-base font-normal mb-2"
              >
                <span id="categoryLabel"></span> Photo
                <span className="text-sm text-stone-500">
                  (only jpg, jpeg, pdf)
                </span>
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="file"
                id="photoDoc"
                name="photoDoc"
                className="py-2 px-4 w-full md:size-[60%] border-1 border-gray-300 rounded-lg text-base text-stone-700 placeholder-neutral-400 focus:border-1 focus:outline-blue-400 cursor-pointer file:me-4 file:py-[6px] file:px-4 file:rounded-lg file:border-0 file:text-sm file:bg-blue-500 file:text-white hover:file:bg-blue-500 file:disabled:opacity-50 file:cursor-pointer"
                accept=".jpg, .jpeg, .pdf"
                required
              />
            </div>
            {/* Candidate Signature upload */}

            <div className="max-full mb-6">
              <label
                htmlFor="signDoc"
                className="block text-base font-normal mb-2"
              >
                <span id="categoryLabel"></span> Signature
                <span className="text-sm text-stone-500">
                  (only jpg, jpeg, pdf)
                </span>
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="file"
                id="signDoc"
                name="signDoc"
                className="py-2 px-4 w-full md:size-[60%] border-1 border-gray-300 rounded-lg text-base text-stone-700 placeholder-neutral-400 focus:border-1 focus:outline-blue-400 cursor-pointer file:me-4 file:py-[6px] file:px-4 file:rounded-lg file:border-0 file:text-sm file:bg-blue-500 file:text-white hover:file:bg-blue-500 file:disabled:opacity-50 file:cursor-pointer"
                accept=".jpg, .jpeg, .pdf"
                required
              />
            </div>

            {/* ----------- Submit button  ----------- */}

            <div className="max-full mb-6 flex justify-center">
              <button
                type="submit"
                id="submitBtn"
                className="py-3 px-14 block w-auto bg-green-700 hover:bg-green-800 text-white transition delay-150 border-2 border-gray-300 rounded-lg text-base cursor-pointer"
              >
                Submit
              </button>
            </div>
          </form>

          {/* ----------- End: Registration Form here ----------- */}
        </div>
      </div>
    </>
  );
};

export default Registration;
