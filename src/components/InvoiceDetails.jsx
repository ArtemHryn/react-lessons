import { getInvoiceById } from 'fakeApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const InvoiceDetails = () => {
  const { invoiceId } = useParams();
  const [invoice, setInvoice] = useState(null);
  useEffect(() => {
    getInvoiceById(invoiceId).then(setInvoice);
  }, [invoiceId]);

  if (!invoice) {
    return null;
  }
  const { recipient, account, total, date } = invoice;
  return (
    <div>
      <ul>
        <li>
          <b>Recipient:</b> {recipient}
        </li>
        <li>
          <b>Account Number:</b> {account}
        </li>
        <li>
          <b>Total due:</b> {total}
        </li>
        <li>
          <b>Invoice date:</b> {new Date(date.created).toLocaleDateString()}{' '}
          {new Date(date.created).toLocaleTimeString()}
        </li>
        <li>
          <b>Due date:</b> {new Date(date.due).toLocaleString()}
        </li>
      </ul>
    </div>
  );
};
