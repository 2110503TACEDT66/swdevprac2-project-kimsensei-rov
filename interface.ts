import dayjs, { Dayjs } from "dayjs"

export interface HospitalItem {
    _id: string,
    name: string,
    address: string,
    district: string,
    province: string,
    postalcode: string,
    tel: string,
    picture: string,
    __v: number,
    id: string
  }
  
  export interface HospitalJson {
    success: boolean,
    count: number,
    pagination: Object,
    data: HospitalItem[]
  }

  export interface BookingItem {
    bookingBegin: Date,
    bookingEnd: Date,
    roomType: string,
    user: string,
    hotel: string
  }

    // export interface HotelItem {
    //   name: string,
    //   telephone: string,
    //   id:string
    // }

  export interface BookingJson {
    success: boolean,
    count: number,
    pagination: Object,
    data: BookingItem[]
  }