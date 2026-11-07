# Clean Architecture Structure

This question separates the application into layers so that business rules
remain independent from Express, databases, and other external tools.

```text
Q2/
├── domain/
│   ├── entities/       # Core business objects and their rules.
│   └── repositories/   # Interfaces describing required data operations.
├── application/
│   ├── use-cases/      # Application-specific workflows and business actions.
│   └── dto/            # Data shapes exchanged by use cases.
├── infra/
│   ├── database/       # Database clients, schemas, and repository implementations.
│   └── config/         # External configuration and environment setup.
└── routes/             # Express route definitions and HTTP adapters.
```

## Layer responsibilities

- **Domain** contains framework-independent entities and business rules.
- **Application** coordinates use cases and depends on domain abstractions.
- **Infrastructure (`infra`)** implements external concerns such as databases,
  configuration, and third-party services.
- **Routes** exposes application behavior through Express HTTP endpoints.

Dependencies should point inward: routes and infrastructure may depend on the
application and domain layers, but the domain should not depend on Express or a
specific database.
