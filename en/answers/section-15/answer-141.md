## 📘 Section: Crates and External Packages  
### 🔹 Category: Creating a new crate with Cargo  
#### ✅ Answer 141: Creating a new crate with Cargo

A crate is a compilation unit in Rust. You can create a new crate using Cargo, Rust's package manager and build tool.

- To create a new binary crate (an executable):

```bash
cargo new my_project
```

- To create a new library crate:

```bash
cargo new my_library --lib
```

Cargo creates the following structure:

```
my_project/
├── Cargo.toml
└── src/
    └── main.rs

my_library/
├── Cargo.toml
└── src/
    └── lib.rs
```

- **Binary crate**: Has a `main.rs` file and produces an executable.
- **Library crate**: Has a `lib.rs` file and produces a reusable library.

Cargo.toml is the manifest file for dependencies and metadata.
