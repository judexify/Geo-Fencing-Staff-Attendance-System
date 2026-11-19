# Architecture

## 1. Architecture Overview

The application will be developed using **Next.js with the App Router and TypeScript**.

The initial development phase will focus on building a functional frontend that supports the core workflows of the staff attendance management system.

Google Sheets will serve as a temporary data store during this phase, supporting both read and write operations. Data access will be handled through server-side functionality within Next.js to keep external service credentials out of the browser.

The application will follow a **layer-based architecture**, organizing code according to technical responsibilities such as components, hooks, services, types, utilities and infrastructure.

The initial application will use simulated authentication with predefined test accounts representing Employee, Manager and Admin roles.

The architecture will allow the temporary Google Sheets integration and simulated authentication to be replaced with a dedicated backend and production authentication in a later phase.

## 2. Technology Stack

| Area                      | Technology               |
| ------------------------- | ------------------------ |
| Framework                 | Next.js                  |
| Routing                   | App Router               |
| Language                  | TypeScript               |
| UI                        | React components         |
| Temporary data store      | Google Sheets            |
| Server-side functionality | Next.js Route Handlers   |
| Data access               | Service layer            |
| Authentication            | Simulated authentication |
| Version control           | Git                      |

Additional libraries will be selected when their specific requirements arise.

## 3. Architectural Approach

The application will follow a layer-based architecture.

Code will be organized according to its technical responsibility rather than being grouped primarily by business feature.

The main layers will include:

- **Presentation layer:** Components and UI elements.
- **Hooks layer:** Reusable React logic and state management.
- **Services layer:** Application operations and data access coordination.
- **Types layer:** TypeScript definitions and interfaces.
- **Utilities layer:** Reusable helper functions.
- **Infrastructure layer:** External integrations and shared application configuration.

Related files may be grouped into subdirectories within each layer where necessary.

This approach allows new functionality to be introduced progressively without requiring the creation of predefined feature directories.

## 4. High-Level Architecture

The application will follow these logical responsibilities:

### 4.1 Presentation Layer

Responsible for displaying the user interface and handling user interactions.

Includes:

- Next.js pages and layouts.
- Shared UI components.
- Application-specific components.
- Client-side interactions.

### 4.2 Application Logic Layer

Responsible for coordinating application functionality.

Includes:

- Custom React hooks.
- Application state management.
- Reusable business logic.
- Role-based interface behaviour.

### 4.3 Service Layer

Responsible for application operations and coordinating data access.

Includes:

- Employee services.
- Attendance services.
- Shift services.
- Leave services.

Services will provide a consistent interface for the rest of the application without exposing the underlying data source.

### 4.4 Data Access and Infrastructure Layer

Responsible for communicating with external data sources and providing shared infrastructure.

Includes:

- Google Sheets integration.
- Server-side configuration.
- External service credentials.
- Shared application utilities.

### 4.5 Temporary Data Store

Google Sheets will temporarily store application data, including:

- Employee records.
- Attendance records.
- Working shifts.
- Emergency leave requests.
- Application settings.

## 5. Request Handling Strategy

Next.js Route Handlers will provide the HTTP API boundary for application data operations.

They will handle requests such as:

- Retrieving employees.
- Creating employee records.
- Retrieving attendance history.
- Recording clock-in and clock-out.
- Assigning working shifts.
- Submitting emergency leave requests.
- Approving or rejecting leave requests.

Route Handlers will delegate application operations to the appropriate service functions rather than containing all business logic themselves.

Server Components may be used for initial server-side data fetching, while Client Components will handle interactive functionality.

Server Actions are not part of the initial request-handling strategy. They may be introduced later if a specific use case justifies them.

## 6. Authentication and Authorization

The frontend phase will use simulated authentication.

Predefined test accounts will represent the three application roles:

- Employee
- Manager
- Admin

The selected account will determine the interface and available actions.

Role-based access rules will be implemented in the frontend to simulate the intended application permissions.

This implementation is strictly for development and testing. It does not provide production-grade authentication or authorization.

A proper authentication and server-side authorization mechanism will be introduced during backend development.

## 7. Data Management

Google Sheets will serve as the temporary data store.

The application will support both reading and writing data through Next.js server-side functionality.

Services will abstract the data source so that UI components do not communicate directly with Google Sheets.

The data-access implementation should be replaceable without requiring major changes to the presentation layer.

Only dummy or non-sensitive data will be used during this phase. Google Sheets credentials and other secrets must never be exposed to the browser.

## 8. Location and Geofencing

The frontend phase will implement location-related interactions and geofence testing.

The application will:

- Request browser location permission.
- Retrieve the user's coordinates.
- Compare the coordinates against the configured test venue location.
- Determine whether the user is within the configured geofence.
- Display appropriate feedback when location permission is denied or the user is outside the permitted area.

Test coordinates and geofence settings will be configurable to allow testing outside the actual club premises.

Location checks performed in the frontend are for prototyping and are not tamper-proof. Production geofence enforcement will require server-side validation and additional security considerations.

## 9. Error Handling

The application will provide consistent error handling for:

- Failed data requests.
- Invalid or missing data.
- Google Sheets communication failures.
- Location permission errors.
- Geofence validation failures.
- Invalid user interactions.

Errors will be handled at appropriate boundaries, with understandable feedback displayed to users.

The implementation will distinguish between user-facing error messages and technical details used for debugging.

## 10. Project Structure

The proposed project structure is:

```text
src/
├── app/
│   ├── (auth)/
│   ├── (dashboard)/
│   └── api/
│       ├── employees/
│       ├── attendance/
│       ├── shifts/
│       └── leave/
│
├── components/
│   ├── ui/
│   ├── layout/
│   ├── employees/
│   ├── attendance/
│   ├── shifts/
│   └── leave/
│
├── hooks/
│   ├── useEmployees.ts
│   ├── useAttendance.ts
│   └── ...
│
├── services/
│   ├── employeeService.ts
│   ├── attendanceService.ts
│   ├── shiftService.ts
│   └── leaveService.ts
│
├── types/
├── lib/
└── utils/
```

Folders will be created when the corresponding functionality requires them. The structure may evolve as the application grows.

## 11. Scope and Constraints

### Included in the frontend phase

- Application interface and navigation.
- Employee, Manager and Admin experiences.
- Simulated authentication.
- Role-based interface permissions.
- Employee management workflows.
- Attendance workflows.
- Shift management workflows.
- Emergency leave workflows.
- Google Sheets read and write integration.
- Browser geolocation and geofence testing.
- Basic application error handling.

### Excluded from the frontend phase

- Dedicated Express backend.
- Production database.
- Production authentication.
- Production-grade authorization.
- Hardware integration using Arduino.
- Production-grade location verification.
- Multi-venue support.

## 12. Future Architecture Evolution

The architecture should support progressive development.

### Phase 1: Frontend and Google Sheets

Build and test the application using Next.js, simulated authentication and Google Sheets as the temporary data store.

### Phase 2: Dedicated Backend

Introduce Express, production authentication, server-side authorization and a proper database.

Replace the temporary Google Sheets integration with backend services while preserving the frontend-facing API contracts where practical.

### Phase 3: Hardware Integration

Explore Arduino-based hardware integration to extend the attendance verification process.

Each phase should build upon the previous one without requiring unnecessary restructuring of the entire application.
