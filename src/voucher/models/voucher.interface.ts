export interface Voucher {
    id?: number;
    title?: string;
    description?: string;
    expiry_date?: string;
    img?: string;
    amount?: string;
    qty?: number;
    buy_type?: number;
    disc_pay_method?: number;
    active_state?: number;
    max_buy_limit?: number;
    max_gift_limit?: number;
    created_at?: string;
    updated_at?: string;
}