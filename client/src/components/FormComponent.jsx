import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { toast } from 'sonner';
import { store } from '../utils/store';
import ResultsModal from './ResultsModal';

const FormComponent = () => {
  const [username, setUserName] = useState('');
  const [useremail, setUserEmail] = useState('');
  const [age, setAge] = useState();
  const [prevCond, setPrevCond] = useState('');
  const [otherCond, setOtherCond] = useState('');
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const [isResultsModalOpen, setIsResultsModalOpen] = useState(false);
  const changeResultsModalState = () => {
    setIsResultsModalOpen(!isResultsModalOpen);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!file) {
      toast.error('Please upload an image');
      return;
    }

    setLoading(true);
    const toastId = toast.loading('Starting prediction...');

    try {
      const formData = new FormData();
      formData.append('image', file);

      const resp = await fetch('https://sih-2023-tf.el.r.appspot.com/predict', {
        method: 'POST',
        body: formData,
      });

      toast.loading('Predicting...', {
        id: toastId,
      });

      const data = await resp.json();

      if (data.status === 'error') {
        toast.error('Something went wrong', {
          id: toastId,
        });
        return;
      }

      setResult(data.data);

      if (data.status === 'success') {
        const pred = data.data;
        toast.success('Predicted successfully', {
          id: toastId,
        });
        toast.success(
          <div>
            <p className="text-lg font-semibold">
              Predicted Disease: {pred.disease}
            </p>
            <p className="text-sm">Accuracy: {pred.accuracy}%</p>
          </div>,
          {
            duration: 10000,
          },
        );
      }

      store.results = [
        ...store.results,
        {
          name: username,
          email: useremail,
          age,
          prevCond,
          otherCond,
          ...data.data,
        },
      ];
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong');
    }

    setLoading(false);
  };

  const handleDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];
    setFile(file);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/png': ['.png'],
      'image/jpeg': ['.jpeg'],
      'image/jpg': ['.jpg'],
    },
    multiple: false,
    validator: file => {
      if (file.size > 1000000) {
        return {
          code: 'file-too-large',
          message: 'File is too large',
        };
      }
      return null;
    },
    onDrop: handleDrop,
    onDropRejected: () => {
      toast.error(`File rejected`);
    },
    onFileDialogCancel: () => {
      toast.error('File upload cancelled');
    },
    onDropAccepted: file => {
      toast.success(`${file[0].name} uploaded successfully`);
    },
  });

  return (
    <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center flex-col">
      <ResultsModal
        isOpen={isResultsModalOpen}
        setIsOpen={setIsResultsModalOpen}
      />
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div className="grid gap-y-2 text-sm grid-cols-2 lg:grid-cols-2 max-md:flex max-md:flex-col">
              <div className="lg:col-span-1 ">
                <form
                  className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5"
                  onSubmit={handleSubmit}
                >
                  <div className="md:col-span-4">
                    <label htmlFor="full_name">Full Name</label>
                    <input
                      type="text"
                      name="full_name"
                      id="full_name"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={username}
                      onChange={e => setUserName(e.target.value)}
                      required
                      minLength={3}
                      placeholder="Ramesh"
                    />
                  </div>

                  <div className="md:col-span-4">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={useremail}
                      onChange={e => setUserEmail(e.target.value)}
                      placeholder="ramesh@gmail.com"
                      required
                    />
                  </div>

                  <div className="md:col-span-4">
                    <label htmlFor="address">Previous Medical Conditions</label>
                    <input
                      type="text"
                      name="medical-condtions"
                      id="medical-condtions"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={prevCond}
                      onChange={e => setPrevCond(e.target.value)}
                      placeholder="Melanoma, Psoriasis, etc."
                      required
                    />
                  </div>

                  <div className="md:col-span-4">
                    <label htmlFor="city">Age</label>
                    <input
                      type="number"
                      name="age"
                      id="age"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={age}
                      onChange={e => setAge(e.target.value)}
                      placeholder="19"
                      required
                      min={13}
                      max={100}
                    />
                  </div>

                  <div className="md:col-span-4">
                    <label htmlFor="zipcode">Other Details</label>
                    <input
                      type="text"
                      name="other"
                      id="other"
                      className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder="Something else... or NA"
                      value={otherCond}
                      onChange={e => setOtherCond(e.target.value)}
                      required
                    />
                  </div>

                  <div className="md:col-span-5 text-left mt-4">
                    <div className="inline-flex items-end">
                      <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded w-24 h-9 grid place-items-center">
                        {loading ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1.5em"
                            height="1.5em"
                            viewBox="0 0 24 24"
                          >
                            <g
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeWidth="2"
                            >
                              <path
                                strokeDasharray="60"
                                strokeDashoffset="60"
                                strokeOpacity=".3"
                                d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"
                              >
                                <animate
                                  fill="freeze"
                                  attributeName="stroke-dashoffset"
                                  dur="1.3s"
                                  values="60;0"
                                ></animate>
                              </path>
                              <path
                                strokeDasharray="15"
                                strokeDashoffset="15"
                                d="M12 3C16.9706 3 21 7.02944 21 12"
                              >
                                <animate
                                  fill="freeze"
                                  attributeName="stroke-dashoffset"
                                  dur="0.3s"
                                  values="15;0"
                                ></animate>
                                <animateTransform
                                  attributeName="transform"
                                  dur="1.5s"
                                  repeatCount="indefinite"
                                  type="rotate"
                                  values="0 12 12;360 12 12"
                                ></animateTransform>
                              </path>
                            </g>
                          </svg>
                        ) : (
                          'Submit'
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              <div
                className="aspect-square w-full max-md:mx-auto max-md:my-10 col-span-1 rounded-md text-white bg-zinc-900 flex justify-center items-center relative"
                {...getRootProps()}
              >
                {/* a cross button */}
                {file && (
                  <button
                    className="absolute -top-2 -right-2 rounded-full w-6 h-6 flex justify-center items-center bg-gray-50 text-zinc-900 hover:bg-gray-200 transition-all 0.2s ease-in-out"
                    onClick={e => {
                      e.stopPropagation();
                      setFile(null);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 15 15"
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M11.782 4.032a.575.575 0 1 0-.813-.814L7.5 6.687L4.032 3.218a.575.575 0 0 0-.814.814L6.687 7.5l-3.469 3.468a.575.575 0 0 0 .814.814L7.5 8.313l3.469 3.469a.575.575 0 0 0 .813-.814L8.313 7.5l3.469-3.468Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                )}
                <input {...getInputProps()} required type="file" />
                {file ? (
                  <img
                    src={URL.createObjectURL(file)}
                    alt="preview"
                    className="w-full h-full object-contain rounded-md"
                  />
                ) : (
                  <p className="text-center">
                    Select or drag and drop your image here. <br />
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <p
        className="font-medium max-md:text-xs px-4 py-1 rounded-xl shadow-md bg-[#fffff] text-[#000] hover:transition all 0.2s ease-in-out cursor-pointer hover:bg-lime-100 mb-3"
        onClick={changeResultsModalState}
      >
        Results
      </p>
      {result && (
        <div className="w-full bg-[#EFFDF3] shadow-lg p-4 mb-6 max-w-screen-lg rounded-lg">
          <div>
            <p className="text-lg font-semibold">
              Predicted Disease: {result.disease}
            </p>
            <p className="mb-1">Accuracy: {result.accuracy}%</p>
            {/* show yellow note if accuracy below 85 */}
            {result.accuracy < 85 && (
              <p className="text-yellow-700">
                Note: Accuracy is below 85%. Results might be inaccurate. Please
                consult a doctor for further diagnosis. <br />
                Retry with a better image.
              </p>
            )}
            <p className="mt-10 text-sm">
              <span className="mt-4">Results are </span>
              <span className="font-semibold">not</span>
              <span> a substitute for professional medical advice.</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormComponent;
