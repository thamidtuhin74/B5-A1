{
  {
    function formatString(input: string, toUpper?: boolean): string {
      let transformedString: string = "";
      if (toUpper === false) {
        transformedString = input.toLowerCase();
        return transformedString;
      } else {
        transformedString = input.toUpperCase();
        return transformedString;
      }
    }

    console.log(formatString("Tuhin", false));
  }

  {
    function filterByRating(
      items: { title: string; rating: number }[]
    ): { title: string; rating: number }[] {
      //   return [{ title: "string", rating: 5 }];
      let filterdItem: { title: string; rating: number }[] = [];
      items.map((item) => {
        if (item.rating >= 4) {
          filterdItem.push(item);
        }
      });
      return filterdItem;
    }

    const books = [
      { title: "Book A", rating: 4.5 },
      { title: "Book B", rating: 3.2 },
      { title: "Book C", rating: 5.0 },
    ];

    console.log(filterByRating(books));
  }

  {
    function concatenateArrays<T>(...arrays: T[][]): T[] {
      const newArray: T[] = arrays.flat();
      return newArray;
    }
    console.log(concatenateArrays(["a", "b"], ["c"]));
    console.log(concatenateArrays([1, 2], [3, 4], [5]));
  }

  {
    class Vehicle {
      private make: string;
      private year: number;

      constructor(make: string, year: number) {
        this.make = make;
        this.year = year;
      }

      getInfo() {
        console.log(`"Make: ${this.make}, Year: ${this.year}"`);
      }
    }

    class Car extends Vehicle {
      private model: string;
      constructor(make: string, year: number, model: string) {
        super(make, year);
        this.model = model;
      }
      getModel() {
        console.log(`"Model: ${this.model}"`);
      }
    }

    const mycar = new Car("Toyota", 2020, "Corolla");
    mycar.getInfo();
    mycar.getModel();
  }

  {
    function processValue(value: string | number): number {
      if (typeof value === "number") {
        return value * 2;
      } else {
        return value.length;
      }
    }
    console.log(processValue(5));
    console.log(processValue("Tahmid Tuhin"));
  }
  {
    interface Product {
      name: string;
      price: number;
    }
    // function getMostExpensiveProduct(products: Product[]): Product | null {
    //   if (products.length === 0) {
    //     return null;
    //   } else {
    //     let index: number = -1;
    //     let maxPrice: number = 0;

    //     products.map((product, i) => {
    //       if (product.price > maxPrice) {
    //         maxPrice = product.price;
    //         index = i;
    //       }
    //     });
    //     return products[index];
    //   }
    // }

    function getMostExpensiveProduct(products: Product[]): Product | null {
      if (products.length === 0) {
        return null;
      } else {
        let maxPriceProduct: Product = products[0];

        products.map((product) => {
          if (product.price >= maxPriceProduct?.price) {
            maxPriceProduct = product;
          }
        });
        return maxPriceProduct;
      }
    }

    const products: Product[] = [
      { name: "Pen", price: 10 },
      { name: "Notebook", price: 25 },
      { name: "Bag", price: 50 },
    ];

    console.log(getMostExpensiveProduct(products));
  }
  {
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
  }
  {
    async function squareAsync(n: number): Promise<number> {
      if (n < 0) {
        throw new Error("Negative number not allowed");
      } else {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return n * n;
      }
    }
    squareAsync(4).then(console.log);
    squareAsync(-34).catch(console.error);
  }
}
