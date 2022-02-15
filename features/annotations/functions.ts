const add = (a: number, b: number) => {
   return a + b;
};

// This function has a return annotation
const subtract = (a: number, b: number): number => {
   return a - b;
};

// this function is a function literal with annotation
function divide(a: number, b: number): number {
   return a / b;
}

// this function is an anon function with annotation
const multiple = function (a: number, b: number): number {
   return a * b;
};

// Function that does not return a value with void
const logger = (message: string): void => {
   console.log(message);
};

// function that throws an error and returns no value
const throwError = (message: string): void => {
   if (!message) {
      throw new Error(message);
   }
};

const todaysWeather = {
   date: new Date(),
   weather: 'sunny',
};

// ES2015 syntax for destructuring
// const logWeather = ({ date, weather }) => {
//    console.log(date);
//    console.log(weather);
// };

// typeScript syntax for destructuring
const logWeather = ({
   date,
   weather,
}: {
   date: Date;
   weather: string;
}): void => {
   console.log(date);
   console.log(weather);
};

logWeather(todaysWeather);

const profile = {
   name: 'alex',
   age: 20,
   coords: {
      lat: 0,
      lng: 15,
   },
   setAge(age: number): void {
      this.age = age;
   },
};

const { age, name }: { age: number; name: string } = profile;
const {
   coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
