import { collection, doc, getDocs, updateDoc } from 'firebase/firestore';
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { db } from '../firebase';
import AdminNavbar from './AdminNavbar';

const Orders = () => {
  const [orders, setOrders] = React.useState([]);
  const [users, setUsers] = React.useState([]);
  const [activeUser, setActiveUser] = React.useState({});
  React.useEffect(() => {
    const usersCollectionRef = collection(db, 'users');
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);
  React.useEffect(() => {
    const getOrders = async () => {
      let ordersRef = collection(db, 'orders', activeUser?.id, 'user-orders');
      await getDocs(ordersRef)
        .then((res) =>
          setOrders(
            res.docs.map((o) => {
              return { ...o.data(), id: o.id };
            })
          )
        )
        .catch((err) => console.log(err));
    };
    if (Object.keys(activeUser).length > 0) {
      getOrders();
    }
  }, [activeUser]);

  const updateOrderStatus = async (e, order) => {
    console.log(order?.id);
    let docRef = doc(db, 'orders', activeUser?.id, 'user-orders', order?.id);
    await updateDoc(docRef, { orderStatus: e.target.value })
      .then(toast.success('Order status updated successfully!'))
      .catch((err) => toast.error(`Couldnt update order status: ${err}`));
  };
  return (
    <div className='min-h-full'>
      <Toaster />
      <AdminNavbar />
      <main className='mx-2 text-2xl font-bold my-4'>
        <>
          <div className='flex flex-row h-screen antialiased text-gray-800'>
            <div className='flex flex-row w-96 flex-shrink-0 bg-gray-100 p-4'>
              <div className='flex flex-col w-full h-full pl-4 pr-4 py-4 -mr-4'>
                <div className='flex flex-row items-center'>
                  <div className='flex flex-row items-center'>
                    <div className='text-xl font-semibold'>Messages</div>
                  </div>
                  <div className='ml-auto'></div>
                </div>
                <div className='mt-5'></div>

                {users?.map((user, i) => {
                  return (
                    !(user.id === 'CBBC6N3ZtXUIf8sjSD95RJE1OKi1') && (
                      <div
                        className='mt-2 cursor-pointer'
                        key={i}
                        onClick={() => setActiveUser(user)}
                      >
                        <div className='flex flex-col -mx-4'>
                          <div className='relative flex flex-row items-center p-4'>
                            <div className='flex items-center justify-center h-10 w-10 rounded-full bg-pink-500 text-pink-300 font-bold flex-shrink-0'>
                              {user?.name?.slice(0, 1)}
                            </div>
                            <div className='flex flex-col flex-grow ml-3'>
                              <div className='text-sm font-medium'>
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
            <div className='flex flex-col h-full w-full bg-white px-4 py-6'>
              {Object.keys(activeUser).length > 0 ? (
                <div className='flex flex-row items-center py-4 px-6 rounded-2xl shadow'>
                  <div className='flex items-center justify-center h-10 w-10 rounded-full bg-pink-500 text-pink-100'>
                    {activeUser?.name?.slice(0, 1)}
                  </div>
                  <div className='flex flex-col ml-3'>
                    <div className='font-semibold text-sm'>
                      {activeUser?.name}
                    </div>
                  </div>
                  <div className='ml-auto'></div>
                </div>
              ) : (
                <div>Please select a user to see his/her orders.</div>
              )}
              <div className='h-full overflow-hidden py-4'>
                <div className='h-full overflow-y-auto'>
                  <div className='flex flex-col'>
                    <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
                      <div className='py-2 inline-block min-w-full sm:px-6 lg:px-8'>
                        <div className='overflow-hidden'>
                          <table className='min-w-full text-center'>
                            <thead className='border-b'>
                              <tr>
                                <th
                                  scope='col'
                                  className='text-sm font-medium text-gray-900 px-6 py-4'
                                >
                                  Order Niche
                                </th>
                                <th
                                  scope='col'
                                  className='text-sm font-medium text-gray-900 px-6 py-4'
                                >
                                  Order Price
                                </th>
                                <th
                                  scope='col'
                                  className='text-sm font-medium text-gray-900 px-6 py-4'
                                >
                                  Order Plan
                                </th>
                                <th
                                  scope='col'
                                  className='text-sm font-medium text-gray-900 px-6 py-4'
                                >
                                  Order Includes
                                </th>
                                <th
                                  scope='col'
                                  className='text-sm font-medium text-gray-900 px-6 py-4'
                                >
                                  Order Not Includes
                                </th>
                                <th
                                  scope='col'
                                  className='text-sm font-medium text-gray-900 px-6 py-4'
                                >
                                  Order Status
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {orders.length === 0 ? (
                                <div className='text-2xl font-bold text-center my-2'>
                                  This user have no orders!
                                </div>
                              ) : (
                                <>
                                  {orders.map((order, i) => {
                                    return (
                                      <tr
                                        className='border-b bg-gray-50 border-gray-200'
                                        key={i}
                                      >
                                        <td className='text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap'>
                                          {order?.orderNiche}
                                        </td>
                                        <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                                          {order?.orderPrice}
                                        </td>
                                        <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                                          {order?.orderType}
                                        </td>
                                        <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                                          {order?.orderIncludes?.map(
                                            (inc, i) => (
                                              <div key={i}>{inc}</div>
                                            )
                                          )}
                                        </td>
                                        <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                                          {order?.orderNotIncludes?.map(
                                            (inc, i) => (
                                              <div key={i}>{inc}</div>
                                            )
                                          )}
                                        </td>
                                        <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                                          <select
                                            defaultValue={order?.orderStatus}
                                            onChange={(e) =>
                                              updateOrderStatus(e, order)
                                            }
                                          >
                                            <option
                                              value={'Information Gathering'}
                                            >
                                              Information Gathering
                                            </option>
                                            <option value={'Implementation'}>
                                              Implementation
                                            </option>
                                            <option value={'Results & Reports'}>
                                              Results & Reports
                                            </option>
                                          </select>
                                        </td>
                                      </tr>
                                    );
                                  })}
                                </>
                              )}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </main>
    </div>
  );
};

export default Orders;
