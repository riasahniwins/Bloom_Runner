export class Client {
    id: number;
    name: string;
    email: string;
    phone: string;
    address: string;
    billingName: string;
    billingContact: string;
    billingCity: string;
    billingZip: string;
    billingAddress: string;
    billingNote: string;
    SearchColumn: string;
    SearchValue: string;
    PageNo: number;
    PageSize: number;
}

export class ClientList {
    emailId: string;
    firstName: string;
    lastName: string;
    createdDate: string;
    status: string;
    lastPurchase: string;
    lastConnect: string;
    noOfRecipients: number;
    noOfSubscriptions: number;
    ltv: number;
    historicalOrders: number;
    upcomingOrders: number;
    ordersAmount: number;
} 
