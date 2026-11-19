# System Requirements

## 1. Actors and Responsibilities

### Employee

- Log in to their account.
- Clock in and clock out within the designated premises.
- View personal attendance records.
- Submit emergency leave requests.

### Manager

- Create employee accounts.
- Assign employees their working shifts.
- View and analyse employee attendance records.
- View the employee directory, including their own profile.
- Approve or reject emergency leave requests.
- Configure the permitted geofence radius within Admin-defined limits.
- Clock in and clock out as an employee.

### Admin

- Log in to the administrative dashboard.
- View attendance records.
- Oversee employee account management.
- Configure system-wide attendance settings.
- Manage geofence configurations and permitted limits.
- Manage user roles and permissions.

### System

- Authenticate users and enforce role-based permissions.
- Retrieve and validate employee locations.
- Enforce geofence restrictions.
- Record clock-in and clock-out timestamps.
- Evaluate attendance against assigned working schedules.
- Flag early clock-outs for management review.
- Maintain attendance and leave records.
- Calculate attendance statuses based on configured rules.

## 2. Business Rules

1. Employees must be within the designated geofence to clock in.
2. Employees must satisfy configured location requirements when clocking out.
3. Every employee must have an assigned working schedule.
4. Managers create employee accounts and assign shifts.
5. Employees may clock out before their scheduled shift ends, but the system must flag it for management.
6. Employees can only view their personal attendance records.
7. Managers can view attendance records but cannot modify them.
8. Admins can view attendance records but cannot modify them.
9. Managers can approve or reject emergency leave requests.
10. Geofence settings are controlled by both Manager and Admin according to their respective permissions.
11. Attendance timestamps are generated and maintained by the system.
12. Managers can participate in employee attendance workflows.
13. The initial system supports one registered club location.
14. Emergency leave is the only leave category supported initially.

## 3. Permission Boundaries

| Operation                     | Employee    | Manager       | Admin         |
| ----------------------------- | ----------- | ------------- | ------------- |
| Clock in/out                  | Yes         | Yes           | Not specified |
| Create employee accounts      | No          | Yes           | Oversight     |
| Assign shifts                 | No          | Yes           | Not specified |
| View attendance               | Own records | All records   | All records   |
| Edit attendance               | No          | No            | No            |
| Approve emergency leave       | No          | Yes           | Not specified |
| Configure geofence            | No          | Within limits | Full control  |
| Configure attendance settings | No          | No            | Yes           |
| Manage roles and permissions  | No          | No            | Yes           |

## 4. System Scope

- Single club location.
- Employee attendance management.
- Geofence-based attendance validation.
- Working shift management.
- Emergency leave management.
- Attendance monitoring and reporting.
- Future hardware integration.
