import {
  addDoc,
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from 'firebase/firestore';
import { useFormik } from 'formik';
import React from 'react';
import { db } from '../firebase';
import AdminNavbar from './AdminNavbar';
import * as yup from 'yup';

const Messages = () => {
  const [users, setUsers] = React.useState([]);
  const [activeChat, setActiveChat] = React.useState({});
  const [messages, setMessages] = React.useState([]);
  React.useEffect(() => {
    const usersCollectionRef = collection(db, 'users');
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);

  const formik = useFormik({
    initialValues: {
      text: '',
      from: 'CBBC6N3ZtXUIf8sjSD95RJE1OKi1',
      to: activeChat?.id,
      fromName: 'Admin',
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

  return (
    <div>
      <>
        <div className="min-h-full">
          <AdminNavbar />
          <main className="mx-2 text-2xl font-bold my-4">
            <>
              <div className="flex flex-row h-screen antialiased text-gray-800">
                <div className="flex flex-row w-96 flex-shrink-0 bg-gray-100 p-4">
                  <div className="flex flex-col w-full h-full pl-4 pr-4 py-4 -mr-4">
                    <div className="flex flex-row items-center">
                      <div className="flex flex-row items-center">
                        <div className="text-xl font-semibold">Messages</div>
                      </div>
                      <div className="ml-auto"></div>
                    </div>
                    <div className="mt-5"></div>

                    {users?.map((user, i) => {
                      return (
                        !(user.id === 'CBBC6N3ZtXUIf8sjSD95RJE1OKi1') && (
                          <div
                            className="mt-2 cursor-pointer"
                            key={i}
                            onClick={() => setActiveChat(user)}
                          >
                            <div className="flex flex-col -mx-4">
                              <div className="relative flex flex-row items-center p-4">
                                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-pink-500 text-pink-300 font-bold flex-shrink-0">
                                  {user?.name?.slice(0, 1)}
                                </div>
                                <div className="flex flex-col flex-grow ml-3">
                                  <div className="text-sm font-medium">
                                    {user?.name}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      );
                    })}
                  </div>
                </div>
                <div className="flex flex-col h-full w-full bg-white px-4 py-6">
                  {Object.keys(activeChat).length > 0 ? (
                    <div className="flex flex-row items-center py-4 px-6 rounded-2xl shadow">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-pink-500 text-pink-100">
                        {activeChat?.name?.slice(0, 1)}
                      </div>
                      <div className="flex flex-col ml-3">
                        <div className="font-semibold text-sm">
                          {activeChat?.name}
                        </div>
                      </div>
                      <div className="ml-auto"></div>
                    </div>
                  ) : (
                    <div>Please select a user to chat with!</div>
                  )}
                  <div className="h-full overflow-hidden py-4">
                    <div className="h-full overflow-y-auto">
                      {Object.keys(activeChat).length > 0 && (
                        <div className="grid grid-cols-12 gap-y-2 ">
                          {messages?.length === 0 && <div>No Messages</div>}
                          {messages?.map((msg, i) => {
                            return (
                              <>
                                {msg?.from ===
                                'CBBC6N3ZtXUIf8sjSD95RJE1OKi1' ? (
                                  <div
                                    className="col-start-6 col-end-13 p-3 rounded-lg"
                                    key={i}
                                    ref={scrollRef}
                                  >
                                    <div className="flex items-center justify-start flex-row-reverse">
                                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-500 flex-shrink-0 text-sm">
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
                                    key={i}
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
                      )}
                    </div>
                  </div>
                  <div className="flex flex-row items-center">
                    <div className="flex flex-row items-center w-full border rounded-3xl h-12 px-2">
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
                        onClick={formik.handleSubmit}
                        className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-200 hover:bg-gray-300 text-indigo-800 text-white"
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
          </main>
        </div>
      </>
    </div>
  );
};

export default Messages;
