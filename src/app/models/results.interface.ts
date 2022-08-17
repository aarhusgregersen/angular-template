export type TResults<T = null> = {
  success: boolean;
  message?: string;
  data: T;
};
