const scart = require('./test01.js');

	test("SCART: X", function () {
		result = scart("X");
		expect(result).toBe("X");
	});
	
	test("SCART: Y", function () {
		result = scart("Y");
		expect(result).toBe("Y");
	});

	test("SCART: Z", function () {
		result = scart("Z");
		expect(result).toBe("Z");
	});

	test("SCART: X X", function () {
		result = scart("XX");
		expect(result).toBe("X");
	});
	
	test("SCART: Z X", function () {
		result = scart("ZX");
		expect(result).toBe("Y");
	});

	test("SCART: X Z", function () {
		result = scart("XZ");
		expect(result).toBe("Y");
	});

	test("SCART: Z Y", function () {
		result = scart("ZY");
		expect(result).toBe("X");
	});
	
	test("SCART: Y Z", function () {
		result = scart("YZ");
		expect(result).toBe("X");
	});

	test("SCART: X Y", function () {
		result = scart("XY");
		expect(result).toBe("Z");
	});

	test("SCART: Y X", function () {
		result = scart("YX");
		expect(result).toBe("Z");
	});
	
	test("SCART: Y Y", function () {
		result = scart("YY");
		expect(result).toBe("Y");
	});

	test("SCART: Z X X", function () {
		result = scart("ZXX");
		expect(result).toBe("Z");
	});

	test("SCART: Y Y Z X Y Y", function () {
		result = scart("YYZXYY");
		expect(result).toBe("Y");
	});

	test("SCART: Y Y Y X Z Y", function () {
		result = scart("YYYXZY");
		expect(result).toBe("X");
	});
	
	test("SCART: X X Y Z X Y Z Z", function () {
		result = scart("XXYZXYZZ");
		expect(result).toBe("Y");
	});

	test("SCART: X Y Y Z Y Y Z Z", function () {
		result = scart("XYYZYYZZ");
		expect(result).toBe("Y");
	});

	test("SCART: X Y Y Z Y Y Z Z Y", function () {
		result = scart("XYYZYYZZY");
		expect(result).toBe("Z");
	});

	test("SCART: X Y Z Z Y Y Z Z Y", function () {
		result = scart("XYZZYYZZY");
		expect(result).toBe("X");
	});

	test("SCART: Y X X Z Y Z Y X X Y", function () {
		result = scart("YXXZYZYXXY");
		expect(result).toBe("Y");
	});
	
	test("SCART: Z Y X X Y Y Y X X Y Z X Y X", function () {
		result = scart("ZYXXYYYXXYZXYX");
		expect(result).toBe("Y");
	});

	test("SCART: Y Y Z X Y Y X Y Z X X Y X X Z Z X Y", function () {
		result = scart("YYZXYYXYZXXYXXZZXY");
		expect(result).toBe("Y");
	});

	test("SCART: Y Y X X Y Y X Y Z X Y Y X X Y Z X Y", function () {
		result = scart("YYXXYYXYZXYYXXYZXY");
		expect(result).toBe("X");
	});

	test("SCART: Z X Y Y X Z Z X Y X X Y Y Z X Z X Y Z Y X Y", function () {
		result = scart("ZXYYXZZXYXXYYZXZXYZYXY");
		expect(result).toBe("Y");
	});

	test("SCART: Z X X Y X X Z X Y Y X Z Y Y X Y Y Y Z X X Z Y", function () {
		result = scart("ZXXYXXZXYYXZYYXYYYZXXZY");
		expect(result).toBe("Z");
	});

	test("SCART: Y Y X X Y Y X Y Z X Y Y X X Y Z X Y", function () {
		result = scart("YYXXYYXYZXYYXXYZXY");
		expect(result).toBe("X");
	});
