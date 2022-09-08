export interface BookingsI {
  full_name: string;
  id: number;
  order_date: string;
  check_in: string;
  check_out: string;
  special_request: string;
  room_type: {
    type: string;
    number: string;
  };
  status: string;
}

export interface InitialAuthStateI {
  isAuth: boolean;
  full_name: string;
  email: string;
}
