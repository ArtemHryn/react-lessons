import { getCustomerById } from 'fakeApi';
import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

export const CustomerDetails = () => {
  const { customerId } = useParams();
  const [customer, setCustomer] = useState(null);
  const location = useLocation();

  useEffect(() => {
    getCustomerById(+customerId).then(setCustomer);
  }, [customerId]);

  if (!customer) {
    return null;
  }
  console.log(location.state);
  return (
    <div>
      <Link to={location.state?.filter ?? '/customers'}> Back To Customers</Link>
      <p>{customer.name}</p>
      <p>{customer.id}</p>
    </div>
  );
};
