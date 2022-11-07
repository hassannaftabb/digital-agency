import { collection, getDocs } from 'firebase/firestore';
import React from 'react';
import { db } from '../../firebase';

const MyOrders = () => {
  const [orders, setOrders] = React.useState([]);
  const user = JSON.parse(localStorage.getItem('da-$user_obj'));
  React.useEffect(() => {
    const getOrders = async () => {
      let ordersRef = collection(db, 'orders', user?.uid, 'user-orders');
      await getDocs(ordersRef)
        .then((res) => setOrders(res.docs.map((doc) => doc.data())))
        .catch((err) => console.log(err));
    };
    getOrders();
  }, [user?.uid]);
  return (
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
                  <p className='text-2xl font-bold text-center my-2'>
                    You have no orders
                  </p>
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
                            <ul>
                              {order?.orderIncludes?.map((inc, i) => (
                                <li key={i}>{inc}</li>
                              ))}
                            </ul>
                          </td>
                          <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                            <ul>
                              {order?.orderNotIncludes?.map((inc, i) => (
                                <li key={i}>{inc}</li>
                              ))}
                            </ul>
                          </td>
                          <td className='text-lg text-gray-900 font-bold px-6 py-4 whitespace-nowrap'>
                            {order?.orderStatus}
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
  );
};

export default MyOrders;
