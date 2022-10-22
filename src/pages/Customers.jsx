import { SearchBox } from 'components/SearchBox';
import { getCustomers } from 'fakeApi';
import { useMemo } from 'react';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

export const Customers = () => {
  const location = useLocation();
  const [customers, setCustomers] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const filterParam = searchParams.get('filter') ?? '';

  useEffect(() => {
    getCustomers().then(setCustomers);
  }, []);

  const changeFiler = value => {
    setSearchParams(value !== '' ? { filter: value } : {});
  };

  const visibleCustomers = useMemo(
    () =>
      customers.filter(customer =>
        customer.name.toLowerCase().includes(filterParam.toLowerCase())
      ),
    [customers, filterParam]
  );

  return (
    <main>
      <SearchBox onChange={changeFiler} value={filterParam} />
      <ul>
        {visibleCustomers.map(({ id, name }) => (
          <li key={id}>
            <Link to={`${id}`} state={{ filter: location }}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};
