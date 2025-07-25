# 1. use of the keyof keyword in TypeScript:

`keyof` keyword is using for the get an `Union` of all the key of an type; It also using to build generic & type-safe Utilities <br>

### Example 1 (Union):

```
type Student = {
    name: string;
    stdID : number;
    class: string;
}
type SicenceStudent = keyof Student; //Output : "name"| "stdId"|"class"
```

### Example 2 (Generic):

```
function getPropertyValue<T, Q extends keyof T>(params: T, key: Q) {
    return params[key];
  }
type User = {
    name: string;
    age: number;
    phone: number;
  };
const user1: User = {
    name: "tuhin",
    age: 27,
    phone: 8801798905167,
  };
const res1 = getPropertyValue(user1, "name");
```

### Example 3 (type-safe Utilities):

```
type User = {
    name: string;
    age: number;
    phone: number;
  };
<!-- //   Require Utility👇 -->
type RequireUtility = Require<User>

```

# use of enums in TypeScript

### enum is the shorter form of enumeration, thatn help us to set of named constants — either numeric or string values.

```
enum Day {
      Monday = "Weekday",
      Tuesday = "Weekday",
      Wednesday = "Weekday",
      Thursday = "Weekday",
      Friday = "Weekday",
      Saturday = "Weekday",
      Sunday = "Weekend",
    }
    function getDayType(day: Day): string {
      return day;
    }
    console.log(getDayType(Day.Sunday));
```
