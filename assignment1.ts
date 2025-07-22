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
}
