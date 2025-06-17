## 📘 Bölüm: Desen Eşleme ve Kontrol Akışı  
### 🔹 Kategori: Enumlar ve Desen Eşleme  
#### ✅ Cevap 281: Enumlar üzerinde desen eşleme ve iç içe veri çıkarma

Bu soruda, iç içe enumlar ile veri modellemesi yapılır ve desen eşleme ile içteki verilere erişilir. Rust'ta enumlar, farklı veri türlerini ve durumları modellemek için güçlüdür. İç içe enumlar ile karmaşık durumlar kolayca yönetilebilir.

```rust
#[derive(Debug)]
enum Status {
    Active,
    Inactive,
}

enum User {
    Admin { status: Status },
    Guest,
    Member { status: Status },
}

fn print_user_status(user: User) {
    match user {
        User::Admin { status: Status::Active } => println!("Admin is active"),
        User::Admin { status: Status::Inactive } => println!("Admin is inactive"),
        User::Member { status } => match status {
            Status::Active => println!("Member is active"),
            Status::Inactive => println!("Member is inactive"),
        },
        User::Guest => println!("Guest user"),
    }
}

fn main() {
    print_user_status(User::Admin { status: Status::Active });
    print_user_status(User::Member { status: Status::Inactive });
    print_user_status(User::Guest);
}
```
