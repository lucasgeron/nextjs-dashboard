import { fetchCustomers, fetchCustomersPages } from "@/app/lib/data";
import Breadcrumbs from "@/app/ui/app/breadcrumbs";
import { CreateCustomer } from "@/app/ui/customers/buttons";
import Table from "@/app/ui/customers/table";
import { lusitana } from "@/app/ui/fonts";
import Pagination from "@/app/ui/app/pagination";
import Search from "@/app/ui/app/search";
import { CustomersTableSkeleton } from "@/app/ui/skeletons";
import { Suspense } from "react";


export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchCustomersPages(query);

  return (
    <div className="w-full">
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Dashboard', href: '/dashboard' },
          { label: 'Customers', href: '/dashboard/customers', active: true },
        ]}
      />
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search customers..." />
        <CreateCustomer />
      </div>
      <Suspense key={query + currentPage} fallback={<CustomersTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  )
}
