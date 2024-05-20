import React from "react";

Price.defaultProps = {
  locale: "en-US",
  currency: "USD",
};

export default function Price({ price, locale, currency }) {
  const formatPrice = () =>
    new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
    }).format(price);

  return <span>{formatPrice()}</span>;
}
