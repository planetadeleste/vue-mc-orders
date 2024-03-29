import { OfferData } from '@planetadeleste/vue-mc-shopaholic';

export interface OrderPositionData {
  id: number;
  order_id: number;
  code: string;
  currency_code: string;
  currency_symbol: string;
  height: number;
  length: number;
  weight: number;
  width: number;
  quantity: number;
  offer: OfferData;

  discount_total_price: number;
  discount_total_price_per_unit: number;
  discount_total_price_per_unit_value: number;
  discount_total_price_per_unit_with_tax: number;
  discount_total_price_per_unit_with_tax_value: number;
  discount_total_price_per_unit_without_tax: number;
  discount_total_price_per_unit_without_tax_value: number;
  discount_total_price_value: number;
  discount_total_price_with_tax: number;
  discount_total_price_with_tax_value: number;
  discount_total_price_without_tax: number;
  discount_total_price_without_tax_value: number;

  increase_total_price: number;
  increase_total_price_per_unit: number;
  increase_total_price_per_unit_value: number;
  increase_total_price_per_unit_with_tax: number;
  increase_total_price_per_unit_with_tax_value: number;
  increase_total_price_per_unit_without_tax: number;
  increase_total_price_per_unit_without_tax_value: number;
  increase_total_price_value: number;
  increase_total_price_with_tax: number;
  increase_total_price_with_tax_value: number;
  increase_total_price_without_tax: number;
  increase_total_price_without_tax_value: number;

  old_price: number;
  old_price_value: number;
  old_price_with_tax: number;
  old_price_with_tax_value: number;
  old_price_without_tax: number;
  old_price_without_tax_value: number;
  old_total_price: number;
  old_total_price_per_unit: number;
  old_total_price_per_unit_value: number;
  old_total_price_per_unit_with_tax: number;
  old_total_price_per_unit_with_tax_value: number;
  old_total_price_per_unit_without_tax: number;
  old_total_price_per_unit_without_tax_value: number;
  old_total_price_value: number;
  old_total_price_with_tax: number;
  old_total_price_with_tax_value: number;
  old_total_price_without_tax: number;
  old_total_price_without_tax_value: number;

  price: number;
  price_value: number;
  price_with_tax: number;
  price_with_tax_value: number;
  price_without_tax: number;
  price_without_tax_value: number;

  tax_discount_total_price: number;
  tax_discount_total_price_per_unit: number;
  tax_discount_total_price_per_unit_value: number;
  tax_discount_total_price_value: number;
  tax_increase_total_price: number;
  tax_increase_total_price_per_unit: number;
  tax_increase_total_price_per_unit_value: number;
  tax_increase_total_price_value: number;
  tax_old_price: number;
  tax_old_price_value: number;
  tax_old_total_price: number;
  tax_old_total_price_per_unit: number;
  tax_old_total_price_per_unit_value: number;
  tax_old_total_price_value: number;
  tax_percent: number;
  tax_price: number;
  tax_price_value: number;
  tax_total_price: number;
  tax_total_price_per_unit: number;
  tax_total_price_per_unit_value: number;
  tax_total_price_value: number;

  total_price: number;
  total_price_per_unit: number;
  total_price_per_unit_value: number;
  total_price_per_unit_with_tax: number;
  total_price_per_unit_with_tax_value: number;
  total_price_per_unit_without_tax: number;
  total_price_per_unit_without_tax_value: number;
  total_price_value: number;
  total_price_with_tax: number;
  total_price_with_tax_value: number;
  total_price_without_tax: number;
  total_price_without_tax_value: number;
}
