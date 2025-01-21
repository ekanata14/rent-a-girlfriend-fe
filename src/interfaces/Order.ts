export interface Order {
  id: number; // Primary Key
  package_id: number; // Reference to a user's package
  user_id: number; // Reference to the user
  total_price: number; // The total price of the order
  status: string; // The status of the order (e.g., 'pending', 'completed')
}
