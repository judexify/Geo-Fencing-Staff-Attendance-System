# System Workflows

## 1. Employee Workflow

### Account Setup

- Employee receives an account or registration details.
- Employee sets up their account information.
- Employee logs in.

### Clock-in Workflow

1. Employee logs in.
2. Employee requests to clock in.
3. System requests location permission.
4. System retrieves the employee's current location.
5. System validates the location against the club's geofence.
6. If the employee is within the permitted area, attendance is recorded.
7. Employee receives confirmation.

### If Location Permission Is Denied

- System informs the employee that location permission is required.
- System provides instructions on how to enable location services.
- Employee can retry the clock-in process.

### If Employee Is Outside the Permitted Area

- System calculates the employee's distance from the permitted geofence.
- System displays how far the employee is from the permitted area.
- Employee is informed that they need to move closer to the venue before clocking in.

### Clock-out Workflow

1. Employee requests to clock out.
2. System retrieves the employee's current location.
3. System validates the location against the club's geofence.
4. Systems checks against time if its time for the specific employee
5. If valid, the clock-out time is recorded.
6. Employee receives confirmation.

## 2. Manager Workflow

1. Manager logs in.
2. Manager can register new employees.
3. Manager assigns employee identification details.
4. Manager views attendance records.
5. Manager analyses employee attendance.
6. Manager can view the employee directory, including their own profile.
7. Manager can approve emmergncy leave for employee

## 3. Admin Workflow

1. Admin logs in.
2. Admin views attendance records.
3. Admin manages employee accounts.
4. Admin configures attendance settings.
5. Admin manages the system's geofence settings.

## 4. System Responsibilities

- Authenticate users.
- Retrieve and validate employee location.
- Enforce geofence restrictions.
- Record clock-in and clock-out timestamps.
- Maintain attendance records.
- Calculate attendance status based on configured rules.
