'use client';

import { useState, ChangeEvent } from 'react';
import validator from 'validator';
import axios from 'axios';
import { div } from 'framer-motion/client';

// ✅ Define the interface BEFORE using it
interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  [key: string]: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [number1, setNumber1] = useState<string>('');
  const [errors1, setErrors1] = useState<string>('');
  const [errors2, setErrors2] = useState<string>('');
  const [errors3, setErrors3] = useState<string>('');
  const [errorMessage4, setErrorMessage4] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // console.log(formData)

    let errorMessage = '';
    let errorMessage1 = '';
    let errorMessage2 = '';

    if (name === 'name') {
      if (value.trim() === '') {
        errorMessage = 'Name is required';
      } else if (value.length <= 5) {
        errorMessage = 'Name must not be less than 6 characters';
      }
      setErrors1(errorMessage);
    }

    if (name === 'email') {
      if (value.trim() === '') {
        errorMessage1 = 'Email is required';
      } else if (!validator.isEmail(value)) {
        errorMessage1 = 'Invalid email address';
      }
      setErrors2(errorMessage1);
    }

    if (name === 'phone') {
      if (/^\d*$/.test(value)) {
        setNumber1(value);
      }

      if (validator.isMobilePhone(value, 'en-NG')) {
        errorMessage2 = '';
      } else {
        errorMessage2 = 'Invalid phone number';
      }
      setErrors3(errorMessage2);
    }
  };

  const submitButton = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const { name, email, phone, message } = formData;

    try {
      if (!name || !email || !phone || !message) {
        setErrorMessage4('All fields are required.');
        setTimeout(() => setErrorMessage4(''), 3000);
        return;
      } else {
        setErrorMessage4('');
      }

      if (!validator.isMobilePhone(phone, 'en-NG')) {
        setErrorMessage4('Invalid phone number.');
        setTimeout(() => setErrorMessage4(''), 3000);
        return;
      }

      if (!validator.isEmail(email)) {
        setErrorMessage4('Invalid email address.');
        setTimeout(() => setErrorMessage4(''), 3000);
        return;
      }

      // await axios.post('/api/server', formData);
      const res = await fetch("/api/server", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    // const data = await res.json();

      setFormData({ name: '', email: '', phone: '', message: '' });
      setNumber1('');
      setSuccess('Thanks for your response!');
      setError('');

      setTimeout(() => {
        setShowModal(true);
        setTimeout(() => setShowModal(false), 5000);
      }, 1000);
    } catch (error) {
      console.error('Submission Error:', error);
      setError('Something went wrong. Please try again.');
      setSuccess('');
    }
  };

  return (
    <div data-aos='fade-up' data-aos-delay="200">
      <form className="w-full md:w-[370px] lg:w-[480px] p-1.5">
        <div className="bg-[#0e0e0e] p-6 rounded-lg">
          <div className="text-2xl font-bold text-left mb-10">Get in touch</div>

          <div className="mb-6 w-full">
            <input
              className="p-2 w-full md:w-[270px] lg:w-[380px] border rounded-md border-white mb-2 md:text-sm text-xs"
              type="text"
              placeholder="Enter name"
              name="name"
              value={formData.name}
              onChange={onChangeHandler}
           />
            {errors1 && <div className="text-left text-xs mt-2 text-red-500">{errors1}</div>}
          </div>

          <div className="mb-6">
            <input
              className="p-2 w-full md:w-[270px] lg:w-[380px] border rounded-md border-white mb-2 md:text-sm text-xs"
              type="email"
              placeholder="Enter email"
              name="email"
              value={formData.email}
              onChange={onChangeHandler}
            />
            {errors2 && <div className="text-left text-xs text-red-500">{errors2}</div>}
          </div>

          <div className="pb-6">
            <input
              className="p-2 w-full md:w-[270px] lg:w-[380px] border rounded-md border-white mb-2 md:text-sm text-xs"
              type="tel"
              maxLength={11}
              placeholder="Phone"
              name="phone"
              value={number1}
              onChange={onChangeHandler}
            />
            {errors3 && <div className="text-left text-xs text-red-500">{errors3}</div>}
          </div>

          <div className="mb-6">
            <textarea
              className="p-2 w-full md:w-[270px] lg:w-[380px] h-[100px] border rounded-md border-white mb-2 md:text-sm text-xs"
              placeholder="Enter message..."
              value={formData.message}
              onChange={onChangeHandler}
              name="message"
            ></textarea>
          </div>
 
          <div>
            <button
              className="bg-[#397eff] hover:bg-[#1e1eefe3] p-2 w-[150px] h-auto rounded-md text-sm md:text-base"
              id="send"
              onClick={submitButton}
            >
              Send
            </button>
            {errorMessage4 && (
              <div className="bg-[#fff] fixed xl:w-[40%] lg:w-[45%] md:w-[55%] w-[45%] h-[30px] top-[6.5%]  text-red-500 xl:text-[14px] text-[12px] rounded-md z-20 text-center xl:left-[7%] lg:left-[2%] md:left-[-8%] left-[1%] transform translate-x-1/2 translate-y-1/2 backdrop-blur-[10px] p-[5px] m-4">
                {errorMessage4}
              </div>
            )}
          </div>
        </div>
      </form>

      {success && showModal && (
        <div className='fixed left-0 right-0 mt-[-100px]'>
            <div className='flex justify-center items-center gap-2 py-[-60px] z-20'>
               <div className="text-[16px] lg:text-[18px] text-green-500 text-center">
              Message sent successfully
            </div>

            <div className="w-[30px]">
            <svg className='w-full h-auto' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M320 576C178.6 576 64 461.4 64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576zM438 209.7C427.3 201.9 412.3 204.3 404.5 215L285.1 379.2L233 327.1C223.6 317.7 208.4 317.7 199.1 327.1C189.8 336.5 189.7 351.7 199.1 361L271.1 433C276.1 438 282.9 440.5 289.9 440C296.9 439.5 303.3 435.9 307.4 430.2L443.3 243.2C451.1 232.5 448.7 217.5 438 209.7z" fill='green'/></svg>
            </div>
</div>
            </div>
            )}
              
              
           
      
    </div>
  );
}
