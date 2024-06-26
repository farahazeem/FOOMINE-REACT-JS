import React, { useEffect, useState } from "react";
import classes from "./paymentPage.module.css";
import { getNewOrderForCurrentUser } from "../../services/orderService";
import Title from "../../components/Title/Title";
import OrderItemsList from "../../components/OrderItemsList/OrderItemsList";
import Map from "../../components/Map/Map";
import PaypalButtons from "../../components/PaypalButtons/PaypalButtons";

export default function PaymentPage() {
  const [order, setOrder] = useState();
  useEffect(() => {
    getNewOrderForCurrentUser()
      .then((data) => {
        setOrder(data);
      })
      .catch((error) => {
        console.error("Error fetching order:", error);
      });
  }, []);

  if (!order) return; //it will simply not return any of the below html if order not found

  return (
    <>
      <div className={classes.container}>
        <div className={classes.content}>
          <Title title="Order Form" fontSize="1.6rem" />
          <div className={classes.summary}>
            <div>
              <h3>Name:</h3>
              <span>{order.name}</span>
            </div>
            <div>
              <h3>Address:</h3>
              <span>{order.address}</span>
            </div>
          </div>
          <OrderItemsList order={order} />
        </div>
        <div className={classes.map}>
          <Title title="Your Location" fontSize="1.6rem" />
          <Map readOnly={true} location={order.addressLatLng} />
        </div>

        <div className={classes.buttons_container}>
          <div className={classes.buttons}>
            <PaypalButtons order={order} />
          </div>
        </div>
      </div>
    </>
  );
}
