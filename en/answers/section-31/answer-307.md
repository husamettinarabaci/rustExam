## 📘 Section: Enums, Variants, and Algebraic Data Types  
### 🔹 Category: Modeling Domain Logic with Algebraic Data Types  
#### ✅ Answer 307: Modeling domain logic with algebraic data types

In this example, both enums and structs are used to model a shopping cart. Each product is represented as a `Product`, and the cart is a vector of `CartItem`. A function calculates the total price.

```rust
struct Product {
    name: String,
    price: f64,
}

enum CartItem {
    Product(Product),
    Empty,
}

fn total_price(cart: &[CartItem]) -> f64 {
    cart.iter().map(|item| match item {
        CartItem::Product(p) => p.price,
        CartItem::Empty => 0.0,
    }).sum()
}

fn main() {
    let cart = vec![
        CartItem::Product(Product { name: "Apple".to_string(), price: 3.5 }),
        CartItem::Product(Product { name: "Bread".to_string(), price: 2.0 }),
        CartItem::Empty,
    ];
    println!("Total price: ${:.2}", total_price(&cart));
}
```
