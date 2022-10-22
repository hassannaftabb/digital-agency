import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from 'firebase/firestore';
import { useFormik } from 'formik';
import React from 'react';
import * as yup from 'yup';
import { db } from '../../firebase';

const Chat = () => {
  const [messages, setMessages] = React.useState([]);
  const user = JSON.parse(localStorage.getItem('da-$user_obj'));
  const formik = useFormik({
    initialValues: {
      text: '',
      from: user?.uid,
      to: 'CBBC6N3ZtXUIf8sjSD95RJE1OKi1',
      fromName: user?.name,
    },
    enableReinitialize: true,
    validationSchema: yup.object({
      text: yup.string().required('Please type a message to send!'),
    }),
    onSubmit: async (values) => {
      let id =
        values.from > values.to
          ? `${values.from + values.to}`
          : `${values.to + values.from}`;
      await addDoc(collection(db, 'messages', id, 'chats'), {
        ...values,
        createdAt: serverTimestamp(),
      });
      values.text = '';
    },
  });

  React.useEffect(() => {
    let id =
      formik.values.from > formik.values.to
        ? `${formik.values.from + formik.values.to}`
        : `${formik.values.to + formik.values.from}`;
    const messageRef = collection(db, 'messages', id, 'chats');
    const q = query(messageRef, orderBy('createdAt', 'asc'));
    onSnapshot(q, (querySnapshot) => {
      let msgs = [];
      querySnapshot.forEach((doc) => msgs.push(doc.data()));
      setMessages(msgs);
    });
  }, [formik.values.from, formik.values.to]);

  const scrollRef = React.useRef(null);

  React.useEffect(() => {
    scrollRef.current?.scrollIntoView({ behaviour: 'smooth' });
  }, [formik.values.text]);

  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  return (
    <>
      <div className="flex flex-row h-[80vh] antialiased text-gray-800 w-[100%] mx-auto sm:w-[60%]">
        <div className="flex flex-col h-full w-full bg-white px-4 py-6">
          <div className="flex flex-row items-center py-4 px-6 rounded-2xl shadow">
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 text-pink-100">
              D
            </div>
            <div className="flex flex-col ml-3">
              <div className="font-semibold text-sm">Digital Agency</div>
            </div>
            <div className="ml-auto">
              <ul className="flex flex-row items-center space-x-2"></ul>
            </div>
          </div>
          <div className="h-full overflow-hidden py-4">
            <div className="h-full overflow-y-auto">
              <div className="grid grid-cols-12 gap-y-2">
                {messages?.length === 0 && <div>No Messages</div>}
                {messages?.map((msg, i) => {
                  return (
                    <>
                      {msg?.from === user?.uid ? (
                        <div
                          className="col-start-6 col-end-13 p-3 rounded-lg"
                          ref={scrollRef}
                        >
                          <div className="flex items-center justify-start flex-row-reverse">
                            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-500 flex-shrink-0">
                              You
                            </div>
                            <div className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
                              <div>{msg.text}</div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div
                          className="col-start-1 col-end-8 p-3 rounded-lg"
                          ref={scrollRef}
                        >
                          <div className="flex flex-row items-center">
                            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                              A
                            </div>
                            <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                              <div>{msg.text}</div>
                            </div>
                          </div>
                        </div>
                      )}
                    </>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <div className="flex flex-row items-center w-full rounded-3xl h-12 px-2 border border-indigo-500">
              <div className="w-full">
                <input
                  type="text"
                  className="border border-transparent w-full focus:outline-none text-sm h-10 flex items-center"
                  placeholder="Type your message...."
                  id="text"
                  name="text"
                  value={formik.values.text}
                  onChange={formik.handleChange}
                />
              </div>
              {formik.touched.text && Boolean(formik.errors.text) && (
                <>
                  <div className="text-md font-bold text-red-600">
                    {formik.errors.text}
                  </div>
                </>
              )}
            </div>

            <div className="ml-6">
              <button
                className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-200 hover:bg-gray-300 text-indigo-800"
                onClick={formik.handleSubmit}
              >
                <svg
                  className="w-5 h-5 transform rotate-90 -mr-px"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
