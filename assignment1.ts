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
}
