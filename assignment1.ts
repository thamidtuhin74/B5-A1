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

      constructor(make: string, year: number){
        this.make = make;
        this.year =  year
      }

      getInfo(){
        console.log(`"Make: ${this.make}, Year: ${this.year}"`)
      }
    }

    class Car extends Vehicle{
      private model: string;
      constructor(make: string, year: number, model: string){
        super(make, year);
        this.model = model;
      }
      getModel(){
        console.log(`"Model: ${this.model}"`)
      }
    }

    const mycar = new Car("Toyota", 2020, "Corolla");
    mycar.getInfo();
    mycar.getModel()


  }
}
