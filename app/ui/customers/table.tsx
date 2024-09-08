import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';
import Search from '@/app/ui/search';
import {
  CustomersTableType,
  FormattedCustomersTable,
} from '@/app/lib/definitions';
import { fetchAPICustomers, fetchFilteredCustomers } from '@/app/lib/data';
import { DeleteCustomer, UpdateCustomer } from './buttons';

export default async function CustomersTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  // const customers = await fetchFilteredCustomers(query, currentPage);
  const customers = await fetchAPICustomers();
  console.log(customers)

  return (
    <div className="mt-6 flow-root">
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden rounded-md bg-gray-50 dark:bg-gray-900 p-2 md:pt-0">
            <div className="md:hidden">
              {customers?.map((customer: FormattedCustomersTable) => (
                <div
                  key={customer.id}
                  className="mb-2 w-full rounded-md bg-white dark:bg-gray-900 p-4"
                >
                  <div className="flex items-center justify-between border-b pb-4">
                    <div>
                      <div className="mb-2 flex items-center">
                        <div className="flex items-center gap-3">
                          <Image
                            src={customer.imageUrl}
                            className="rounded-full"
                            alt={`${customer.name}'s profile picture`}
                            width={28}
                            height={28}
                          />
                          <p>{customer.name}</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-500">
                        {customer.email}
                      </p>
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-between border-b py-5">
                    <div className="flex w-1/2 flex-col">
                      <p className="text-xs">Pending</p>
                      <p className="font-medium">{customer.totalPending}</p>
                    </div>
                    <div className="flex w-1/2 flex-col">
                      <p className="text-xs">Paid</p>
                      <p className="font-medium">{customer.totalPaid}</p>
                    </div>
                  </div>
                  <div className="pt-4 text-sm">
                    <p>{customer.totalInvoices} invoices</p>
                  </div>
                </div>
              ))}
            </div>
            <table className="hidden min-w-full rounded-md text-gray-900 dark:text-slate-300 md:table">
              <thead className="rounded-md bg-gray-50 dark:bg-gray-900 text-left text-sm font-normal">
                <tr className='grid grid-cols-10'>
                  <th scope="col" className="col-span-3 px-4 py-5 font-medium">
                    Name
                  </th>
                  <th scope="col" className="col-span-2 px-3 py-5 font-medium">
                    Email
                  </th>
                  <th scope="col" className="col-span-1 px-3 py-5 font-medium">
                    Total Invoices
                  </th>
                  <th scope="col" className="col-span-1 px-3 py-5 font-medium">
                    Total Pending
                  </th>
                  <th scope="col" className="col-span-1 px-4 py-5 font-medium">
                    Total Paid
                  </th>
                  <th scope="col" className="col-span-2 px-4 py-5 font-medium">
                    {/* Actions */}
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200 dark:divide-slate-500 ">
                {customers.map((customer: FormattedCustomersTable) => (
                  <tr key={customer.id} className="group grid grid-cols-10 first:rounded-t-lg last:rounded-b-lg bg-white dark:bg-gray-800 dark:text-slate-500 items-center">
                    <td className="col-span-3 whitespace-nowrap px-4 py-3 text-sm ">
                      <div className="flex items-center gap-3">
                        <Image
                          src={customer.imageUrl}
                          className="rounded-full"
                          alt={`${customer.name}'s profile picture`}
                          width={28}
                          height={28}
                        />
                        <p>{customer.name}</p>
                      </div>
                    </td>
                    <td className="col-span-2 whitespace-nowrap px-4 py-3 text-sm">
                      {customer.email}
                    </td>
                    <td className="col-span-1 whitespace-nowrap px-4 py-3 text-sm">
                      {customer.totalInvoices}
                    </td>
                    <td className="col-span-1 whitespace-nowrap px-4 py-3 text-sm">
                      {customer.totalPending}
                    </td>
                    <td className="col-span-1 whitespace-nowrap px-4 py-3 text-sm">
                      {customer.totalPaid}
                    </td>
                    <td className="col-span-2 whitespace-nowrap px-4 py-3 text-sm group-first-of-type:rounded-md group-last-of-type:rounded-md">
                      <div className="flex justify-end gap-3">
                        <UpdateCustomer id={customer.id} />
                        <DeleteCustomer id={customer.id} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
