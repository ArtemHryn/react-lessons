import { lazy } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Toaster } from 'react-hot-toast';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Layout } from './Layout';
// import { Sales } from 'pages/Sales';
import { Invoices } from './Invoices';
import { InvoiceDetails } from './InvoiceDetails';
import { NotFound } from './NotFound';
import { Customers } from 'pages/Customers';
import { CustomerDetails } from 'pages/CustomerDetails';

const Sales = lazy(() => import('../pages/Sales'))

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<div>Welcome to the Candy Shop!</div>} /> */}
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<div>Dashboard</div>}></Route>
          <Route path="sales" element={<Sales />}>
            <Route index element={<div>Sales index Route</div>} />
            <Route path="analytics" element={<div>Analytics</div>}></Route>
            <Route path="invoices" element={<Invoices />}>
              <Route path=":invoiceId" element={<InvoiceDetails />} />
            </Route>
            <Route path="deposits" element={<div>Deposits</div>}></Route>
          </Route>
          <Route path="reports" element={<div>Reports</div>}></Route>
          <Route path="feedback" element={<div>Feedback</div>}></Route>
          <Route path="customers" element={<Customers />}></Route>
          <Route path="customers/:customerId" element={<CustomerDetails/>}></Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <GlobalStyle />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};
