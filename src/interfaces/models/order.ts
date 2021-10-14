export default interface IOrder {
  id: number;
  title: string;
  description?: string;
  amount?: number;
  price: number;

  createdDate?: Date;
  updatedDate?: Date;
}
