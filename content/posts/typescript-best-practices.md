---
title: "TypeScript Best Practices: Writing Better, Safer Code"
date: "2024-08-01"
excerpt: "A comprehensive guide to TypeScript best practices that will help you write more maintainable and type-safe code."
tags: ["TypeScript", "JavaScript", "Best Practices", "Code Quality"]
author: "Fernando Jacob"
---

# TypeScript Best Practices: Writing Better, Safer Code

TypeScript has revolutionized the way we write JavaScript applications. By adding static type checking to JavaScript, it helps us catch errors early, provides better IDE support, and makes our code more maintainable. However, to truly leverage TypeScript's power, it's essential to follow best practices.

## Why TypeScript?

Before diving into best practices, let's briefly discuss why TypeScript has become so popular:

- **Early Error Detection**: Catch type-related errors at compile time
- **Better IDE Support**: Enhanced autocomplete, refactoring, and navigation
- **Improved Code Documentation**: Types serve as inline documentation
- **Easier Refactoring**: Changes are safer with type checking
- **Better Team Collaboration**: Clear interfaces and contracts

## Essential TypeScript Best Practices

### 1. Use Strict TypeScript Configuration

Always enable strict mode in your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "noImplicitThis": true
  }
}
```

### 2. Prefer Interfaces Over Type Aliases for Object Shapes

While both work, interfaces are generally preferred for object types:

```typescript
// ✅ Preferred
interface User {
  id: number
  name: string
  email: string
}

// ❌ Avoid for simple object types
type User = {
  id: number
  name: string
  email: string
}
```

### 3. Use Union Types Effectively

Union types are powerful for representing values that can be one of several types:

```typescript
type Status = 'loading' | 'success' | 'error'
type ID = string | number

function processStatus(status: Status) {
  switch (status) {
    case 'loading':
      return 'Processing...'
    case 'success':
      return 'Done!'
    case 'error':
      return 'Something went wrong'
    default:
      // TypeScript ensures we handle all cases
      const exhaustiveCheck: never = status
      throw new Error(`Unhandled status: ${exhaustiveCheck}`)
  }
}
```

### 4. Leverage Generic Types

Generics make your code more reusable and type-safe:

```typescript
interface ApiResponse<T> {
  data: T
  status: number
  message: string
}

function fetchData<T>(url: string): Promise<ApiResponse<T>> {
  return fetch(url).then(response => response.json())
}

// Usage
const userResponse = await fetchData<User>('/api/users/1')
// userResponse.data is now typed as User
```

### 5. Use Utility Types

TypeScript provides many built-in utility types:

```typescript
interface User {
  id: number
  name: string
  email: string
  password: string
}

// Pick only certain properties
type PublicUser = Pick<User, 'id' | 'name' | 'email'>

// Make all properties optional
type PartialUser = Partial<User>

// Make all properties required
type RequiredUser = Required<PartialUser>

// Exclude certain properties
type UserWithoutPassword = Omit<User, 'password'>
```

### 6. Avoid `any` – Use `unknown` Instead

When you need to represent a value of unknown type, use `unknown` instead of `any`:

```typescript
// ❌ Avoid
function processData(data: any) {
  return data.someProperty // No type checking
}

// ✅ Preferred
function processData(data: unknown) {
  if (typeof data === 'object' && data !== null && 'someProperty' in data) {
    return (data as { someProperty: any }).someProperty
  }
  throw new Error('Invalid data structure')
}
```

### 7. Use Type Assertions Sparingly

Type assertions should be used only when you know more than TypeScript:

```typescript
// ❌ Avoid unless necessary
const element = document.getElementById('myInput') as HTMLInputElement

// ✅ Better - check first
const element = document.getElementById('myInput')
if (element instanceof HTMLInputElement) {
  // TypeScript now knows element is HTMLInputElement
  console.log(element.value)
}
```

### 8. Define Discriminated Unions for Complex States

For complex state management, use discriminated unions:

```typescript
type LoadingState = {
  type: 'loading'
}

type SuccessState = {
  type: 'success'
  data: User[]
}

type ErrorState = {
  type: 'error'
  error: string
}

type AppState = LoadingState | SuccessState | ErrorState

function renderState(state: AppState) {
  switch (state.type) {
    case 'loading':
      return 'Loading...'
    case 'success':
      return `Loaded ${state.data.length} users`
    case 'error':
      return `Error: ${state.error}`
  }
}
```

### 9. Use Index Signatures Carefully

Be specific with index signatures:

```typescript
// ❌ Too broad
interface StringMap {
  [key: string]: any
}

// ✅ More specific
interface UserMap {
  [userId: string]: User
}

// ✅ Even better - use Map or Record
type UserMap = Map<string, User>
// or
type UserMap = Record<string, User>
```

### 10. Implement Proper Error Handling

Create custom error types for better error handling:

```typescript
class ValidationError extends Error {
  constructor(
    message: string,
    public field: string
  ) {
    super(message)
    this.name = 'ValidationError'
  }
}

class NetworkError extends Error {
  constructor(
    message: string,
    public statusCode: number
  ) {
    super(message)
    this.name = 'NetworkError'
  }
}

type AppError = ValidationError | NetworkError

function handleError(error: AppError) {
  if (error instanceof ValidationError) {
    console.log(`Validation error in field: ${error.field}`)
  } else if (error instanceof NetworkError) {
    console.log(`Network error with status: ${error.statusCode}`)
  }
}
```

## Advanced Patterns

### Branded Types

Create more specific types using branding:

```typescript
type UserId = string & { readonly brand: unique symbol }
type Email = string & { readonly brand: unique symbol }

function createUserId(id: string): UserId {
  // Add validation logic here
  return id as UserId
}

function sendEmail(userId: UserId, email: Email) {
  // Function signature ensures correct types are passed
}
```

### Template Literal Types

Use template literal types for string patterns:

```typescript
type EventName = `on${Capitalize<string>}`
type Color = 'red' | 'green' | 'blue'
type ColorVariant = `${Color}-${'light' | 'dark'}`

// ColorVariant is: 'red-light' | 'red-dark' | 'green-light' | etc.
```

## Common Pitfalls to Avoid

### 1. Over-typing Simple Functions

```typescript
// ❌ Over-engineered
function add(a: number, b: number): number {
  return a + b
}

// ✅ Let TypeScript infer the return type
function add(a: number, b: number) {
  return a + b
}
```

### 2. Not Using readonly for Immutable Data

```typescript
// ✅ Use readonly for immutable arrays
function processItems(items: readonly string[]) {
  // items.push('new') // Error - cannot modify readonly array
  return items.map(item => item.toUpperCase())
}
```

### 3. Ignoring Compiler Errors

Never suppress TypeScript errors with `@ts-ignore` unless absolutely necessary. Instead, fix the underlying issue.

## Tools and Configuration

### ESLint Integration

Use `@typescript-eslint` for consistent code style:

```json
{
  "extends": [
    "@typescript-eslint/recommended",
    "@typescript-eslint/recommended-requiring-type-checking"
  ]
}
```

### Prettier Configuration

Configure Prettier for consistent formatting:

```json
{
  "semi": false,
  "singleQuote": true,
  "trailingComma": "es5"
}
```

## Conclusion

TypeScript is a powerful tool that can significantly improve your JavaScript development experience. By following these best practices, you'll write more maintainable, safer, and more expressive code.

Remember that TypeScript is not just about adding types – it's about designing better APIs, catching errors early, and improving the overall developer experience. Start with the basics, gradually adopt more advanced patterns, and always prioritize readability and maintainability.

The investment in learning TypeScript properly pays dividends in reduced bugs, easier refactoring, and better team collaboration. Happy typing!