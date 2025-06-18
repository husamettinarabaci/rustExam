## 📘 Section: Domain-Driven Design in Rust
### 🔹 Category: Applying Command and Query Responsibility Segregation (CQRS)
#### ✅ Answer 666: Applying Command and Query Responsibility Segregation (CQRS)

CQRS separates commands (state-changing operations) from queries (read-only operations). In Rust, you can use different methods or traits for commands and queries.

```rust
struct BankAccount {
    balance: i32,
}

impl BankAccount {
    // Command
    fn deposit(&mut self, amount: i32) {
        self.balance += amount;
    }
    // Query
    fn get_balance(&self) -> i32 {
        self.balance
    }
}

fn main() {
    let mut acc = BankAccount { balance: 0 };
    acc.deposit(50);
    println!("Balance: {}", acc.get_balance());
}
```
