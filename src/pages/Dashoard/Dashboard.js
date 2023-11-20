import React from "react";
import { toast } from "react-toastify";
import { useFetch, useTitle } from "../../hook";
import { DashboardCard } from "./components/DashboardCard";
import { DashboardEmpty } from "./components/DashboardEmpty";

export const Dashboard = () => {

  useTitle('DashBoard')
  const cbid = JSON.parse(sessionStorage.getItem("cbid"));

  const { data: orders, error } = useFetch(`${process.env.REACT_APP_HOST}/660/orders?user.id=${cbid}`)
  !orders && toast.error(error, { position: 'bottom-center' })
  error && toast.error(error, { position: 'bottom-center' })

  return (
    <main>
      <section>
      <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">My Dashboard</p>

      </section>
      <section>
      {(orders.length && typeof orders === 'object') && orders.map((order) => (
        <DashboardCard key={order.id}  order={order} />
      )) }
      </section>
      <section>
        {!orders.length && <DashboardEmpty/> }
      </section>
    </main>
  )
}
