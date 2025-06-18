## 📘 Section: Domain-Driven Design in Rust
### 🔹 Category: Encapsulating Invariants with Private Fields
#### ✅ Answer 665: Encapsulating invariants with private fields

Encapsulating invariants means restricting direct access to struct fields and enforcing rules through methods. In Rust, you can make fields private and provide public methods for controlled access.

```rust
pub struct Account {
    balance: i32, // private
}

impl Account {
    pub fn new() -> Self {
        Account { balance: 0 }
    }
    pub fn deposit(&mut self, amount: i32) {
        if amount > 0 {
            self.balance += amount;
        }
    }
    pub fn balance(&self) -> i32 {
        self.balance
    }
}

fn main() {
    let mut acc = Account::new();
    acc.deposit(100);
    println!("Balance: {}", acc.balance());
}
```
