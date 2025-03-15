import moment from "moment";

export const dateFormat = (date) => {
  return moment(date).format("DD/MM/YYYY");
};

export const formatTHB = (amount) => {
  return new Intl.NumberFormat("th-TH", {
    style: "currency",
    currency: "THB",
  }).format(amount);
};
