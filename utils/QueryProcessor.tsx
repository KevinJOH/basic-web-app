export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("usb id")) {
    // TODO añade tu USB ID a continuación
		var usbId = "13-11007"
    // TODO actualiza el caso de prueba correspondiente en __tests__
    return ( usbId );
  }

	if (query.toLowerCase().includes("name")) {
    // TODO añade tu USB ID a continuación
		var name = "Kevin Jesus"
    // TODO actualiza el caso de prueba correspondiente en __tests__
    return ( name );
  }

	if (query.toLowerCase().includes("39 plus 67")) {
    // TODO añade tu USB ID a continuación
		var res = "2613"
    // TODO actualiza el caso de prueba correspondiente en __tests__
    return ( res );
  }
  return "";
}
