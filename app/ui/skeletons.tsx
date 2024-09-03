import { lusitana } from "./fonts";

// Loading animation
const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export function CardSkeleton() {
  return (
    <div
      className="relative overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-900 p-2 shadow-sm"
    >
      <div className="flex p-4 animate-pulse">
        <div className="h-5 w-5 rounded-md bg-gray-200 dark:bg-gray-800" />
        <div className="ml-2 h-6 w-16 rounded-md bg-gray-200 dark:bg-gray-800 text-sm font-medium" />
      </div>
      <div className="flex items-center justify-center truncate rounded-xl bg-white dark:bg-gray-800 px-4 py-8">
        <div className="animate-pulse h-7 w-20 rounded-md bg-gray-200 dark:bg-gray-900" />
      </div>
    </div>
  );
}

export function CardsSkeleton() {
  return (
    <>
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </>
  );
}

export function RevenueChartSkeleton() {
  return (
    <div className="relative w-full overflow-hidden md:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl dark:text-slate-300 `}>
        Recent Revenue
      </h2>
      <div className="rounded-xl bg-gray-100 dark:bg-gray-900 p-4">
        <div className="mt-0 grid h-[410px] grid-cols-12 items-end gap-2 rounded-md bg-white dark:bg-gray-800 animate-pulse p-4 sm:grid-cols-13 md:gap-4" />
        <div className="flex items-center pb-2 pt-6 animate-pulse">
          <div className="h-5 w-5 rounded-full bg-gray-200 dark:bg-gray-800" />
          <div className="ml-2 h-4 w-20 rounded-md bg-gray-200 dark:bg-gray-800" />
        </div>
      </div>
    </div>
  );
}

export function InvoiceSkeleton() {
  return (
    <div className="flex flex-row items-center justify-between border-b border-gray-100 dark:border-slate-500 py-4">
      <div className="flex items-center">
        <div className="min-w-0">
          <div className="h-5 w-40 rounded-md bg-gray-200 dark:bg-gray-700" />
          <div className="mt-2 h-4 w-12 rounded-md bg-gray-200 dark:bg-gray-700" />
        </div>
      </div>
      <div className="mt-2 h-4 w-12 rounded-md bg-gray-200 dark:bg-gray-700" />
    </div>
  );
}

export function LatestInvoicesSkeleton() {
  return (
    <div
      className="relative flex w-full flex-col overflow-hidden md:col-span-4"
    >
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl dark:text-slate-300 `}>
        Latest Invoices
      </h2>
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-100 dark:bg-gray-900 p-4">
        <div className="bg-white dark:bg-gray-900 px-6 animate-pulse">
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton />
        </div>
        <div className="flex items-center pb-2 pt-6">
          <div className="h-5 w-5 rounded-full bg-gray-200 dark:bg-gray-800" />
          <div className="ml-2 h-4 w-20 rounded-md bg-gray-200 dark:bg-gray-800" />
        </div>
      </div>
    </div>
  );
}

export default function DashboardSkeleton() {
  return (
    <>
      <div
        className={`${shimmer} relative mb-4 h-8 w-36 overflow-hidden rounded-md bg-gray-100`}
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueChartSkeleton />
        <LatestInvoicesSkeleton />
      </div>
    </>
  );
}

export function InvoiceTableRowSkeleton() {
  return (
    <tr className="w-full border-b border-slate-500 py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
      {/* Customer Name and Image */}
      <td className="relative overflow-hidden whitespace-nowrap py-3 pl-6 pr-3">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-gray-100 dark:bg-gray-700"></div>
          <div className="h-6 w-24 rounded bg-gray-100 dark:bg-gray-700"></div>
        </div>
      </td>
      {/* Email */}
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-32 rounded bg-gray-100 dark:bg-gray-700"></div>
      </td>
      {/* Amount */}
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-16 rounded bg-gray-100 dark:bg-gray-700"></div>
      </td>
      {/* Date */}
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-16 rounded bg-gray-100 dark:bg-gray-700"></div>
      </td>
      {/* Status */}
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-16 rounded bg-gray-100 dark:bg-gray-700"></div>
      </td>
      {/* Actions */}
      <td className="whitespace-nowrap py-3 pl-6 pr-3">
        <div className="flex justify-end gap-3">
          <div className="h-[38px] w-[38px] rounded bg-gray-100 dark:bg-gray-700"></div>
          <div className="h-[38px] w-[38px] rounded bg-gray-100 dark:bg-gray-700"></div>
        </div>
      </td>
    </tr>
  );
}
export function CustomerTableRowSkeleton() {
  return (
    <tr className="group grid grid-cols-10 first:rounded-t-lg last:rounded-b-lg bg-white dark:bg-gray-800 dark:text-slate-500 items-center">
      {/* Customer Name and Image */}
      <td className="col-span-3 whitespace-nowrap px-4 py-3 text-sm">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-gray-100 dark:bg-gray-900"></div>
          <div className="h-6 w-24 rounded bg-gray-100 dark:bg-gray-900"></div>
        </div>
      </td>
      {/* Email */}
      <td className="col-span-2 whitespace-nowrap px-4 py-3 text-sm">
        <div className="h-6 w-32 rounded bg-gray-100 dark:bg-gray-900"></div>
      </td>
      {/* Total Invoices */}
      <td className="col-span-1 whitespace-nowrap px-4 py-3 text-sm">
        <div className="h-6 w-16 rounded bg-gray-100 dark:bg-gray-900"></div>
      </td>
      {/* Total Pending */}
      <td className="col-span-1 whitespace-nowrap px-4 py-3 text-sm">
        <div className="h-6 w-16 rounded bg-gray-100 dark:bg-gray-900"></div>
      </td>
      {/* Total Paid */}
      <td className="col-span-1 whitespace-nowrap px-4 py-3 text-sm ">
        <div className="h-6 w-16 rounded bg-gray-100 dark:bg-gray-900"></div>
      </td>
      {/* Actions */}
      <td className="col-span-2 whitespace-nowrap px-4 py-3 text-sm ">
        <div className="flex justify-end gap-3">
          <div className="h-[38px] w-[38px] rounded bg-gray-100 dark:bg-gray-900"></div>
          <div className="h-[38px] w-[38px] rounded bg-gray-100 dark:bg-gray-900"></div>
        </div>
      </td>
    </tr>
  );
}

export function InvoicesMobileSkeleton() {
  return (
    <div className="mb-2 w-full rounded-md bg-white p-4">
      <div className="flex items-center justify-between border-b border-gray-100 pb-8">
        <div className="flex items-center">
          <div className="mr-2 h-8 w-8 rounded-full bg-gray-100"></div>
          <div className="h-6 w-16 rounded bg-gray-100"></div>
        </div>
        <div className="h-6 w-16 rounded bg-gray-100"></div>
      </div>
      <div className="flex w-full items-center justify-between pt-4">
        <div>
          <div className="h-6 w-16 rounded bg-gray-100"></div>
          <div className="mt-2 h-6 w-24 rounded bg-gray-100"></div>
        </div>
        <div className="flex justify-end gap-2">
          <div className="h-10 w-10 rounded bg-gray-100"></div>
          <div className="h-10 w-10 rounded bg-gray-100"></div>
        </div>
      </div>
    </div>
  );
}

export function InvoicesTableSkeleton() {
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 dark:bg-gray-900  p-2 md:pt-0">
          <div className="md:hidden">
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
          </div>
          <table className="hidden min-w-full text-gray-900 dark:text-slate-300 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium">
                  Customer
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Email
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Amount
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Date
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Status
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800">
              <InvoiceTableRowSkeleton />
              <InvoiceTableRowSkeleton />
              <InvoiceTableRowSkeleton />
              <InvoiceTableRowSkeleton />
              <InvoiceTableRowSkeleton />
              <InvoiceTableRowSkeleton />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export function CustomersTableSkeleton() {
  return (
    <div className="mt-6 flow-root">
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden rounded-md bg-gray-50 dark:bg-gray-900 p-2 md:pt-0">
            <div className="md:hidden">
              {/* <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton /> */}
            </div>
            <table className="hidden min-w-full rounded-md text-gray-900 dark:text-slate-300 md:table">
              <thead className="rounded-md bg-gray-50 dark:bg-gray-900 text-left text-sm font-normal">
                <tr className="grid grid-cols-10">
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
              <tbody className="divide-y divide-gray-200 dark:divide-slate-500">
                <CustomerTableRowSkeleton />
                <CustomerTableRowSkeleton />
                <CustomerTableRowSkeleton />
                <CustomerTableRowSkeleton />
                <CustomerTableRowSkeleton />
                <CustomerTableRowSkeleton />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
