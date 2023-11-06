interface IPayment {
  sum: number;
  from: number;
  to: number;
}

enum PaymentStatus {
  Success = 'success',
  Failed = 'failed',
}

// разделим саму сущность в запросе и саму суть платежа
// тоесть если что-то добавится новое в генерацию платежа, то мы добавим в IPaymentRequest, а не в IPayment
interface IPaymentRequest extends IPayment {}

/*
interface IDataSuccess {
  databaseId: number;
  sum: number;
  from: number;
  to: number;
}

interface IDataFailed {
  errorMessage: string;
  errorCode: number;
}

interface IResponce {
  status: PaymentStatus;
  data: IDataSuccess | IDataFailed;
}
*/

interface IDataSuccess extends IPayment {
  databaseId: number;
}

interface IDataFailed {
  errorMessage: string;
  errorCode: number;
}

interface IResponceSuccess {
  status: PaymentStatus.Success;
  data: IDataSuccess;
}

interface IResponceFailed {
  status: PaymentStatus.Failed;
  data: IDataFailed;
}

// function get(): IResponceSuccess | IResponceFailed {
//   // функция вернет union тип между IResponceSuccess и IResponceFailed
// }
