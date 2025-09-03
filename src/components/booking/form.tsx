'use client';

import { useState, Fragment } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  service: string;
  notes: string;
};

export default function Booking() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [bookCount, setBookCount] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    notes: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    nextStep();
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="">
            <div className='my-12'>
              <h2 className="text-3xl mb-2 text-center">Booking Information</h2>
              <p className='text-center text-[#B0B0B0]'>Please fill up the blank fields below</p>
            </div>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-12'>
              <div className='flex flex-col gap-2'>
                <Image
                  src="/booking.png"
                  alt="Logo"
                  width={500}
                  height={500}

                />
                <div className='flex justify-between px-2'>
                  <p>First Time Subscribers</p>
                  <p className='text-[#B0B0B0]'>2 books</p>
                </div>

              </div>
              <div className='md:px-8 px-0 flex flex-col gap-4'>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Lorem ipsum dolor sit amet,</label>
                  <div className="flex items-center space-x-2 justify-between bg-[#F0F0F0]">
                    <button
                      type="button"
                      onClick={() => setBookCount(prev => Math.max(1, prev - 1))}
                      className="px-3 py-2 border border-gray-300 rounded-l-md bg-[#E74C3C] text-white hover:bg-[#E74C3C]/80 focus:outline-none"
                      aria-label="Decrease book count"
                    >
                      -
                    </button>
                    <span className="w-8 text-center">{bookCount}</span>
                    <button
                      type="button"
                      onClick={() => setBookCount(prev => prev + 1)}
                      className="px-3 py-2 border border-gray-300 rounded-r-md bg-[#1ABC9C] text-white hover:bg-[#1ABC9C]/80 focus:outline-none"
                      aria-label="Increase book count"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="mt-4">
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">Pick a Date</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="py-3 px-4 rounded-lg bg-[#F0F0F0] focus:ring-2 focus:ring-[#FF66C4] focus:outline-none transition-colors duration-200 w-full"
                    required
                  />
                </div>
                <div className='flex flex-col gap-2 py-2'>
                  <p>You will pay <span className='text-[#152C5B] font-bold'>$400 USD</span></p>
                  <p>per  <span className='text-[#152C5B] font-bold'>2 Days</span></p>
                </div>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <div className='my-12 text-center flex flex-col gap-2'>
              <h2 className="text-2xl">Payment</h2>
              <p>Kindly follow the instructions below</p>
            </div>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>
              <div className='flex flex-col gap-4 text-lg'>
                <p>Lorem ipsum </p>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing</p>
                <p>Initial Payment: $200</p>
                <p>Total: $400 USD</p>
              </div>
              <div className='flex flex-col gap-6'>
                <div className='flex flex-col gap-1'>
                  <label htmlFor="cardNumber" className='text-sm font-medium text-gray-700'>Card number</label>
                  <input 
                    id="cardNumber" 
                    type="text" 
                    placeholder="1234 5678 9012 3456"
                    className='py-3 px-4 rounded-lg bg-[#F0F0F0] focus:ring-2 focus:ring-[#FF66C4] focus:outline-none transition-colors duration-200 w-full'
                  />
                </div>
                <div className='flex flex-col gap-1'>
                  <label htmlFor="bankName" className='text-sm font-medium text-gray-700'>Bank name</label>
                  <input 
                    id="bankName" 
                    type="text" 
                    placeholder="e.g. Chase, Bank of America"
                    className='py-3 px-4 rounded-lg bg-[#F0F0F0] focus:ring-2 focus:ring-[#FF66C4] focus:outline-none transition-colors duration-200 w-full'
                  />
                </div>
                <div className='grid grid-cols-2 gap-4'>
                  <div className='flex flex-col gap-1'>
                    <label htmlFor="expDate" className='text-sm font-medium text-gray-700'>Exp Date</label>
                    <input 
                      id="expDate" 
                      type="text" 
                      placeholder="MM/YY"
                      className='py-3 px-4 rounded-lg bg-[#F0F0F0] focus:ring-2 focus:ring-[#FF66C4] focus:outline-none transition-colors duration-200 w-full'
                    />
                  </div>
                  <div className='flex flex-col gap-1'>
                    <label htmlFor="cvv" className='text-sm font-medium text-gray-700'>CVV</label>
                    <input 
                      id="cvv" 
                      type="password" 
                      placeholder="••••"
                      maxLength={4}
                      className='py-3 px-4 rounded-lg bg-[#F0F0F0] focus:ring-2 focus:ring-[#FF66C4] focus:outline-none transition-colors duration-200 w-full'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className='flex flex-col items-center'>
            <h2 className="text-2xl">Yay! Payment Completed</h2>
            <Image src="/confrim.png" alt="Logo" width={300} height={300} />
            <p className="text-gray-600">Thank you for your booking. We will send a confirmation to {formData.email}.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className=" bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl  overflow-hidden p-6">
        <div className="mb-8 text-center">
          <div className="md:w-1/2 w-full mx-auto">
            <div className="flex items-center justify-between w-full px-4">
              {[1, 2, 3].map((stepNumber, index) => (
                <div key={stepNumber} className="flex items-center flex-1 last:flex-none">
                  <div className="flex flex-col items-center z-10">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= stepNumber ? 'bg-[#FF66C4] text-white' : 'bg-gray-200 text-gray-600'
                        }`}
                    >
                      {stepNumber}
                    </div>
                  </div>
                  {index < 2 && (
                    <div
                      className={`h-[1px] flex-1  ${step > stepNumber ? 'bg-[#FF66C4]' : 'bg-gray-200'}`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="">
          {renderStep()}

          <div className="flex flex-col-reverse gap-4 items-center pt-12">
            {step > 1 && step < 3 && (
              <button
                type="button"
                onClick={prevStep}
                className="px-4 py-2"
              >
                Back
              </button>
            )}
            <div className="">
              {step < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="px-12 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#FF66C4] hover:bg-[#FF66C4]/80 "
                >
                  Next
                </button>
              ) : step === 3 ? (
                <button
                  type="button"
                  onClick={() => router.push('/')}
                  className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#FF66C4] hover:bg-[#FF66C4]/80"
                >
                  Back to homepage
                </button>
              ) : null}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
