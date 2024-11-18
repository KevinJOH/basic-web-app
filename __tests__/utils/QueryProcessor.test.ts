import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    // TODO: Deberías actualizar la prueba a continuación después de añadir tu USB ID
    test('should return my USB ID', () => {
        const query = "what's your USB ID?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
		"13-11007"
    	));
    });

		test('should return my name', () => {
			const query = "What is your name?";
			const response: string = QueryProcessor(query);
			expect(response).toBe((
	"Kevin Jesus"
		));
	});


	test('should return my 47 plus 2', () => {
		const query = "What is 47 plus 2?";
		const response: string = QueryProcessor(query);
		expect(response).toBe((
"94"
	));
});

	test('should return my 26 plus 57', () => {
		const query = "What is 26 plus 57?";
		const response: string = QueryProcessor(query);
		expect(response).toBe((
"1482"
));
});

});
